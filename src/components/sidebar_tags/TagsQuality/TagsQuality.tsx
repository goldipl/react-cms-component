import infoIcon from "./../../../assets/icons/sidebar_modal/info.svg";

const TagsQuality = () => {
  return (
    <div className="flex flex-col my-3 ms-2">
      <div className="flex flex-row items-center justify-start mb-2">
        <span className="flex me-3 font-semibold text-red-600 text-lg">
          Słabo
        </span>
        <div className="flex flex-row items-center justify-start">
          <span className="flex w-[14px] h-[6px] rounded-xl bg-red-400 me-1"></span>
          <span className="flex w-[14px] h-[6px] rounded-xl bg-red-400 me-1"></span>
          <span className="flex w-[14px] h-[6px] rounded-xl bg-[#E1E1E2] me-1"></span>
          <span className="flex w-[14px] h-[6px] rounded-xl bg-[#E1E1E2] me-1"></span>
          <span className="flex w-[14px] h-[6px] rounded-xl bg-[#E1E1E2] me-1"></span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start">
        <img
          className="me-2"
          src={infoIcon}
          alt="info"
          width={20}
          height={20}
        />
        <p className="text-[#1A1A1AB2] font-semibold w-[300px]">
          Zbyt mało tagów. Dodaj jeszcze 2 aby poprawić widoczność artykułu
        </p>
      </div>
    </div>
  );
};

export default TagsQuality;
