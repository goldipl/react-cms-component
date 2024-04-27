import { useState } from "react";
import closeIcon from "./../../../assets/icons/sidebar_modal/close-x.svg";

const SidebarUserSharedModal = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div
      className={`flex flex-col border border-1 border-[#E1E1E2] bg-white rounded-xl w-max h-auto min-w-[387px] py-2 px-4 pb-5 shadow-md ${
        modalVisible ? "flex" : "hidden"
      }`}
    >
      <div className="flex flex-row justify-between items-center h-[58px]">
        <h2 className="font-bold text-2xl">User Shared</h2>
        <span className="cursor-pointer" onClick={handleCloseModal}>
          <img src={closeIcon} alt="close-icon" width={32} height={32} />
        </span>
      </div>
      <div>
        <p>Sample User Shared Sidebar Modal</p>
      </div>
    </div>
  );
};

export default SidebarUserSharedModal;
