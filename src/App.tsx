import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TimerPanel from "./components/TimerPanel";
import StopwatchPanel from "./components/StopwatchPanel";

type ActiveTab = "timer" | "stopwatch";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("timer");

  return (
    <div>
      <Header />

      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div hidden={activeTab !== "timer"}>
        <TimerPanel isActive={activeTab === "timer"} />
      </div>

      <div hidden={activeTab !== "stopwatch"}>
        <StopwatchPanel isActive={activeTab === "stopwatch"} />
      </div>
    </div>
  );
}
