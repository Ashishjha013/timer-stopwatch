import { useEffect, useRef, useState } from "react";

type StopwatchPanelProps = {
  isActive: boolean;
};

export default function StopwatchPanel({ isActive }: StopwatchPanelProps) {
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = window.setInterval(() => {
      if (startTimeRef.current !== null) {
        setElapsedMs(Date.now() - startTimeRef.current);
      }
    }, 10);

    return () => window.clearInterval(intervalId);
  }, [isRunning]);

  const seconds = Math.floor(elapsedMs / 1000);
  const centiseconds = Math.floor((elapsedMs % 1000) / 10);

  const displayTime = `${seconds}.${String(centiseconds).padStart(2, "0")}`;

  // Complete one revolution every 60 seconds.
  const dotAngle = ((elapsedMs / 1000) * 6) % 360;

  useEffect(() => {
    if (!isActive) return;

    document.title = `${displayTime} | Stopwatch`;
  }, [isActive, displayTime]);

  function handleStart() {
    if (startTimeRef.current !== null) return;

    startTimeRef.current = Date.now() - elapsedMs;
    setIsRunning(true);
  }

  function handlePause() {
    if (startTimeRef.current !== null) {
      setElapsedMs(Date.now() - startTimeRef.current);
      startTimeRef.current = null;
    }

    setIsRunning(false);
  }

  function handleReset() {
    startTimeRef.current = null;
    setElapsedMs(0);
    setIsRunning(false);
  }

  return (
    <section>
      <div className="stopwatch-ring">
        <div
          className="stopwatch-orbit"
          style={{ transform: `rotate(${dotAngle}deg)` }}
          aria-hidden="true"
        >
          <span className="stopwatch-dot" />
        </div>

        <p>{displayTime}</p>
      </div>

      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </section>
  );
}
