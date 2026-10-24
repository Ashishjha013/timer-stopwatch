import { TabButton } from "./TabButton";

type TabProps = {
  activeTab: "timer" | "stopwatch";
  onTabChange: (tab: "timer" | "stopwatch") => void;
};

export default function Tabs({ activeTab, onTabChange }: TabProps) {
  return (
    <div>
      <TabButton
        label="Timer"
        isActive={activeTab === "timer"}
        onClick={() => onTabChange("timer")}
      />
      <TabButton
        label="Stopwatch"
        isActive={activeTab === "stopwatch"}
        onClick={() => onTabChange("stopwatch")}
      />
    </div>
  );
}
