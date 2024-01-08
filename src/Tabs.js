import { useState } from "react";

export default function Component() {
  // Tabs data array
  const tabs = [
    "Amazing views",
    "Nature",
    "Cityscapes",
    "Mountains",
    "Oceans",
    "Forests",
    "Deserts",
    "Wildlife",
    "Night Sky",
    "Architecture",
  ];

  // State for the active tab
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Function to get the maximum width based on the number of tabs
  const tabWidth = 100 / tabs.length;

  return (
    <div className="flex gap-3 items-start font-sans">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`flex flex-col gap-2 items-center cursor-pointer px-2 ${
            activeTab === tab ? "border-b-2 border-[#222222]" : ""
          }`}
          onClick={() => setActiveTab(tab)}
          style={{ width: `${tabWidth}%` }} // Setting the width dynamically
        >
          <img
            src="https://file.rendit.io/n/wXe4P0IcsBVeuOaFji7V.png"
            alt="Category Icon"
            className="w-6"
          />
          <span
            className={`text-center text-xs leading-[16px] ${
              activeTab === tab ? "text-[#222222]" : "text-gray-400"
            }`}
          >
            {tab}
          </span>
        </div>
      ))}
    </div>
  );
}
