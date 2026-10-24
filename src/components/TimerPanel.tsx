import { useEffect, useRef, useState } from "react";

type TimerPanelProps = {
  isActive: boolean;
};

function formatTime(milliseconds: number) {
  const totalSeconds = Math.ceil(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function playAlarm(audioContext: AudioContext | null) {
  if (audioContext === null) return;

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
  gain.gain.setValueAtTime(0.2, audioContext.currentTime);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.7);
}

export default function TimerPanel({ isActive }: TimerPanelProps) {
  const [durationMs, setDurationMs] = useState(600_000);
  const [durationInput, setDurationInput] = useState("10:00");
  const [remainingMs, setRemainingMs] = useState(600_000);
  const [isRunning, setIsRunning] = useState(false);

  const endTimeRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = window.setInterval(() => {
      const deadline = endTimeRef.current;

      if (deadline === null) return;

      const nextRemainingMs = Math.max(deadline - Date.now(), 0);

      setRemainingMs(nextRemainingMs);

      if (nextRemainingMs === 0) {
        endTimeRef.current = null;
        setIsRunning(false);
        playAlarm(audioContextRef.current);
      }
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isRunning]);

  const circumference = 2 * Math.PI * 44;

  const progress =
    durationMs > 0 ? Math.min(Math.max(remainingMs / durationMs, 0), 1) : 0;

  const titleTime = formatTime(remainingMs);

  useEffect(() => {
    if (!isActive) return;

    document.title = `${titleTime} | Timer`;
  }, [isActive, titleTime]);

  function handleDurationChange(value: string) {
    setDurationInput(value);

    const match = /^(\d{1,3}):([0-5]\d)$/.exec(value);

    if (!match) return;

    const minutes = Number(match[1]);
    const seconds = Number(match[2]);
    const nextDurationMs = (minutes * 60 + seconds) * 1000;

    setDurationMs(nextDurationMs);
    setRemainingMs(nextDurationMs);
  }

  function handleStart() {
    if (remainingMs <= 0 || isRunning) return;

    if (audioContextRef.current === null) {
      audioContextRef.current = new window.AudioContext();
    }

    void audioContextRef.current.resume();

    endTimeRef.current = Date.now() + remainingMs;
    setIsRunning(true);
  }

  function handlePause() {
    const deadline = endTimeRef.current;

    if (deadline !== null) {
      setRemainingMs(Math.max(deadline - Date.now(), 0));
    }

    endTimeRef.current = null;
    setIsRunning(false);
  }

  function handleReset() {
    endTimeRef.current = null;
    setIsRunning(false);
    setRemainingMs(durationMs);
    setDurationInput(formatTime(durationMs));
  }

  function addTime(secondsToAdd: number) {
    const addedMs = secondsToAdd * 1000;
    const nextDurationMs = durationMs + addedMs;

    setDurationMs(nextDurationMs);
    setDurationInput(formatTime(nextDurationMs));
    setRemainingMs((currentMs) => currentMs + addedMs);

    if (endTimeRef.current !== null) {
      endTimeRef.current += addedMs;
    }
  }

  return (
    <section>
      <label className="timer-duration">
        Start time (MM:SS)
        <input
          type="text"
          inputMode="numeric"
          aria-label="Starting time in minutes and seconds"
          value={durationInput}
          disabled={isRunning}
          onChange={(event) => handleDurationChange(event.target.value)}
          onBlur={() => setDurationInput(formatTime(durationMs))}
        />
      </label>

      <div className="timer-ring">
        <svg
          className="timer-progress-svg"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <circle
            className="timer-progress-track"
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#302a43"
            strokeWidth="3.5"
          />

          <circle
            className="timer-progress-value"
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#9475ff"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
          />
        </svg>

        <p>{formatTime(remainingMs)}</p>
      </div>

      <div>
        <button onClick={handleStart} disabled={isRunning || remainingMs <= 0}>
          Play
        </button>

        <button onClick={handlePause} disabled={!isRunning}>
          Pause
        </button>

        <button onClick={handleReset}>Reset</button>
      </div>

      <div>
        <button onClick={() => addTime(30)}>+0:30</button>
        <button onClick={() => addTime(60)}>+1:00</button>
        <button onClick={() => addTime(300)}>+5:00</button>
      </div>
    </section>
  );
}
