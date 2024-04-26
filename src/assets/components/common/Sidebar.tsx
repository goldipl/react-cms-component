import React, { useState } from "react";
import sidebarInfoIcon from "./../../icons/sidebar/sidebar-info.svg";
import sidebarChatIcon from "./../../icons/sidebar/sidebar-chat.svg";
import sidebarSettingsIcon from "./../../icons/sidebar/sidebar-settings.svg";
import sidebarLabelIcon from "./../../icons/sidebar/sidebar-label.svg";
import sidebarUserSharedIcon from "./../../icons/sidebar/sidebar-user-shared.svg";
import SidebarTagsModal from "./sidebar_modals/SidebarTagsModal";

const Sidebar = () => {
  const [showTagsModal, setShowTagsModal] = useState(false);

  const handleTagsModalClick = () => {
    setShowTagsModal(!showTagsModal);
  };

  return (
    <div className="relative">
      {/* Sidebar container */}
      <div className="flex flex-col border border-1 border-[#E1E1E2] bg-white rounded-xl p-2 w-max h-auto">
        <div className="flex p-4 rounded-xl cursor-pointer hover:bg-[#F4F4F5]">
          <img
            className="select-none"
            src={sidebarInfoIcon}
            alt="sidebar icon"
            width={32}
            height={32}
          />
        </div>
        <div className="flex p-4 rounded-xl cursor-pointer hover:bg-[#F4F4F5]">
          <img
            className="select-none"
            src={sidebarChatIcon}
            alt="sidebar icon"
            width={32}
            height={32}
          />
        </div>
        <div className="flex p-4 rounded-xl cursor-pointer hover:bg-[#F4F4F5]">
          <img
            className="select-none"
            src={sidebarSettingsIcon}
            alt="sidebar icon"
            width={32}
            height={32}
          />
        </div>
        <div
          className={`flex p-4 rounded-xl cursor-pointer hover:bg-[#F4F4F5]`}
          onClick={handleTagsModalClick}
        >
          <img
            className="select-none"
            src={sidebarLabelIcon}
            alt="sidebar icon"
            width={32}
            height={32}
          />
        </div>
        <div className="flex p-4 rounded-xl cursor-pointer hover:bg-[#F4F4F5]">
          <img
            className="select-none"
            src={sidebarUserSharedIcon}
            alt="sidebar icon"
            width={32}
            height={32}
          />
        </div>
      </div>
      {/* Sidebar Modals container */}
      <div className="flex absolute top-0 left-24">
        {showTagsModal && <SidebarTagsModal />}
      </div>
    </div>
  );
};

export default Sidebar;
