type TabButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export const TabButton = ({ label, isActive, onClick, }: TabButtonProps) => {
  return (
    <button onClick={onClick} className={isActive ? "tab active" : "tab"}>
      {label}
    </button>
  );
}
