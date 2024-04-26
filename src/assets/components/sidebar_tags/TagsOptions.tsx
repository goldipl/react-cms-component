import aiGreyIcon from "./../../icons/sidebar_modal/ai-grey.svg";
import aiPurpleIcon from "./../../icons/sidebar_modal/ai-purple.svg";
import purpleLabelIcon from "./../../icons/sidebar_modal/label-purple.svg";

const TagsOptions = () => {
  return (
    <div className="flex flex-col justify-start items-start border-t-[1px] border-b-[1px] border-[#E1E1E2] py-2">
      <div className="flex flex-row justify-start items-center cursor-not-allowed my-2 mx-2">
        <div className="flex me-3">
          <img src={aiGreyIcon} alt="img" width={24} height={24} />
        </div>
        <div className="flex">
          <span className="text-md font-medium text-[#1A1A1A5C]">CMS AI</span>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center cursor-pointer my-2 mx-2">
        <div className="flex me-3">
          <img src={aiPurpleIcon} alt="img" width={24} height={24} />
        </div>
        <div className="flex">
          <span className="text-lg font-medium text-[#1A1A1A] hover:text-[#A855F7]">
            Analizuj tekst
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center cursor-pointer my-2 mx-2">
        <div className="flex me-3">
          <img src={purpleLabelIcon} alt="img" width={24} height={24} />
        </div>
        <div className="flex">
          <span className="text-lg font-medium text-[#1A1A1A] hover:text-[#A855F7]">
            Najbardziej popularne tagi
          </span>
        </div>
      </div>
    </div>
  );
};

export default TagsOptions;
