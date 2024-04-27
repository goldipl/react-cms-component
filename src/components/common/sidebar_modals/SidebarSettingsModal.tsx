import { useState } from "react";
import closeIcon from "./../../../assets/icons/sidebar_modal/close-x.svg";

const SidebarSettingsModal = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div
      className={`flex flex-col border border-1 border-[#E1E1E2] bg-white rounded-xl w-max h-auto min-w-[387px] py-2 px-4 pb-5 shadow-md max-w-[387px] ${
        modalVisible ? "flex" : "hidden"
      }`}
    >
      <div className="flex flex-row justify-between items-center h-[58px]">
        <h2 className="font-bold text-2xl">Settings</h2>
        <span className="cursor-pointer" onClick={handleCloseModal}>
          <img src={closeIcon} alt="close-icon" width={32} height={32} />
        </span>
      </div>
      <div>
        <p className="mb-3">Sample Settings Sidebar Modal</p>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quae
          iste et asperiores autem culpa consequatur voluptates enim odio sit
          laudantium, velit alias aperiam consectetur ducimus. Quam odit sequi
          tempore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quae
          iste et asperiores autem culpa consequatur voluptates enim odio sit
          laudantium, velit alias aperiam consectetur ducimus. Quam odit sequi
          tempore.
        </p>
      </div>
    </div>
  );
};

export default SidebarSettingsModal;
