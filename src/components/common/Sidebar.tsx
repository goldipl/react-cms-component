import { useState } from "react";
import sidebarInfoIcon from "./../../assets/icons/sidebar/sidebar-info.svg";
import sidebarChatIcon from "./../../assets/icons/sidebar/sidebar-chat.svg";
import sidebarSettingsIcon from "./../../assets/icons/sidebar/sidebar-settings.svg";
import sidebarLabelIcon from "./../../assets/icons/sidebar/sidebar-label.svg";
import sidebarUserSharedIcon from "./../../assets/icons/sidebar/sidebar-user-shared.svg";
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
      <div className="flex flex-row lg:flex-col border border-1 border-[#E1E1E2] bg-white rounded-xl p-2 w-max h-auto shadow-md">
        <div
          className={`flex p-2 lg:p-4 rounded-xl cursor-pointer hover:bg-[#F4F4F5] mb-1 ${
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
          className={`flex p-2 lg:p-4 rounded-xl cursor-pointer hover:bg-[#F4F4F5] mb-1 ${
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
          className={`flex p-2 lg:p-4 rounded-xl cursor-pointer hover:bg-[#F4F4F5]  mb-1 ${
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
          className={`flex p-2 lg:p-4 rounded-xl cursor-pointer hover:bg-[#F4F4F5]  mb-1 ${
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
          className={`flex p-2 lg:p-4 rounded-xl cursor-pointer hover:bg-[#F4F4F5] ${
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
      <div className="flex relative lg:absolute top-2 left-0 lg:left-24 lg:top-0 w-full">
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
