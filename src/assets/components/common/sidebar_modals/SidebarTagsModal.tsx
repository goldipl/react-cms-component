import React, { useState } from "react";
import closeIcon from "./../../../icons/sidebar_modal/close-x.svg";

const SidebarTagsModal = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div
      className={`flex flex-col border border-1 border-[#E1E1E2] bg-white rounded-xl w-max h-auto min-w-[387px] p-4 ${
        modalVisible ? "flex" : "hidden"
      }`}
    >
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-bold text-2xl">Tagi</h2>
        <span className="cursor-pointer" onClick={handleCloseModal}>
          <img src={closeIcon} alt="close-icon" width={32} height={32} />
        </span>
      </div>
    </div>
  );
};

export default SidebarTagsModal;
