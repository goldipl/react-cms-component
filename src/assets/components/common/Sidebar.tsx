import { useState } from "react";
import sidebarInfoIcon from "./../../icons/sidebar/sidebar-info.svg";
import sidebarChatIcon from "./../../icons/sidebar/sidebar-chat.svg";
import sidebarSettingsIcon from "./../../icons/sidebar/sidebar-settings.svg";
import sidebarLabelIcon from "./../../icons/sidebar/sidebar-label.svg";
import sidebarUserSharedIcon from "./../../icons/sidebar/sidebar-user-shared.svg";
import SidebarTagsModal from "./sidebar_modals/SidebarTagsModal";
import SidebarInfoModal from "./sidebar_modals/SidebarInfoModal";
import SidebarChatModal from "./sidebar_modals/SidebarChatModal";
import SidebarSettingsModal from "./sidebar_modals/SidebarSettingsModal";
import SidebarUserSharedModal from "./sidebar_modals/SidebarUserSharedModal";

const Sidebar = () => {
  const [showTagsModal, setShowTagsModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showUserSharedModal, setShowUserSharedModal] = useState(false);

  const handleTagsModalClick = () => {
    setShowTagsModal(!showTagsModal);
    setShowInfoModal(false);
    setShowChatModal(false);
    setShowSettingsModal(false);
    setShowUserSharedModal(false);
  };

  const handleInfoModalClick = () => {
    setShowInfoModal(!showInfoModal);
    setShowTagsModal(false);
    setShowChatModal(false);
    setShowSettingsModal(false);
    setShowUserSharedModal(false);
  };

  const handleChatModalClick = () => {
    setShowChatModal(!showChatModal);
    setShowTagsModal(false);
    setShowInfoModal(false);
    setShowSettingsModal(false);
    setShowUserSharedModal(false);
  };

  const handleSettingsModalClick = () => {
    setShowSettingsModal(!showSettingsModal);
    setShowTagsModal(false);
    setShowInfoModal(false);
    setShowChatModal(false);
    setShowUserSharedModal(false);
  };

  const handleUserSharedClick = () => {
    setShowUserSharedModal(!showUserSharedModal);
    setShowTagsModal(false);
    setShowInfoModal(false);
    setShowChatModal(false);
    setShowSettingsModal(false);
  };

  return (
    <div className="relative">
      {/* Sidebar container */}
      <div className="flex flex-col border border-1 border-[#E1E1E2] bg-white rounded-xl p-2 w-max h-auto">
        <div
          className={`flex p-4 rounded-xl cursor-pointer hover:bg-[#F4F4F5] ${
            showInfoModal ? "bg-[#F4F4F5]" : "bg-[rgba(255,255,255,0)]"
          }
        `}
          onClick={handleInfoModalClick}
        >
          <img
            className="select-none"
            src={sidebarInfoIcon}
            alt="sidebar icon"
            width={32}
            height={32}
          />
        </div>
        <div
          className={`flex p-4 rounded-xl cursor-pointer hover:bg-[#F4F4F5] ${
            showChatModal ? "bg-[#F4F4F5]" : "bg-[rgba(255,255,255,0)]"
          }
        `}
          onClick={handleChatModalClick}
        >
          <img
            className="select-none"
            src={sidebarChatIcon}
            alt="sidebar icon"
            width={32}
            height={32}
          />
        </div>
        <div
          className={`flex p-4 rounded-xl cursor-pointer hover:bg-[#F4F4F5] ${
            showSettingsModal ? "bg-[#F4F4F5]" : "bg-[rgba(255,255,255,0)]"
          }
        `}
          onClick={handleSettingsModalClick}
        >
          <img
            className="select-none"
            src={sidebarSettingsIcon}
            alt="sidebar icon"
            width={32}
            height={32}
          />
        </div>
        <div
          className={`flex p-4 rounded-xl cursor-pointer hover:bg-[#F4F4F5] ${
            showTagsModal ? "bg-[#F4F4F5]" : "bg-[rgba(255,255,255,0)]"
          }
        `}
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
        <div
          className={`flex p-4 rounded-xl cursor-pointer hover:bg-[#F4F4F5] ${
            showUserSharedModal ? "bg-[#F4F4F5]" : "bg-[rgba(255,255,255,0)]"
          }
        `}
          onClick={handleUserSharedClick}
        >
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
        {showInfoModal && <SidebarInfoModal />}
        {showChatModal && <SidebarChatModal />}
        {showSettingsModal && <SidebarSettingsModal />}
        {showUserSharedModal && <SidebarUserSharedModal />}
      </div>
    </div>
  );
};

export default Sidebar;
