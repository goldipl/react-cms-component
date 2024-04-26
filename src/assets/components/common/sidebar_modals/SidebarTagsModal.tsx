import { useState } from "react";
import closeIcon from "./../../../icons/sidebar_modal/close-x.svg";
import Searchbar from "../../sidebar_tags/Searchbar";
import TagsOptions from "../../sidebar_tags/TagsOptions";
import TagsQuality from "../../sidebar_tags/TagsQuality";

const SidebarTagsModal = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div
      className={`flex flex-col border border-1 border-[#E1E1E2] bg-white rounded-xl w-max h-auto min-w-[387px] py-2 px-4 ${
        modalVisible ? "flex" : "hidden"
      }`}
    >
      <div className="flex flex-row justify-between items-center h-[58px]">
        <h2 className="font-bold text-2xl">Tagi</h2>
        <span className="cursor-pointer" onClick={handleCloseModal}>
          <img src={closeIcon} alt="close-icon" width={32} height={32} />
        </span>
      </div>
      <Searchbar />
      <TagsOptions />
      <TagsQuality />
    </div>
  );
};

export default SidebarTagsModal;
