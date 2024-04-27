import React, { useState, useEffect } from "react";
import infoIcon from "./../../../assets/icons/sidebar_modal/info.svg";

interface TagsQualityProps {
  checkedCount: number;
}

const TagsQuality: React.FC<TagsQualityProps> = ({ checkedCount }) => {
  const [showQuality, setShowQuality] = useState(false);

  let qualityText = "";
  let qualityStatusColor = "";
  let qualityProgressBarColor = "";
  let qualityStatusText = "";

  if (checkedCount === 1) {
    qualityText = "Źle";
    qualityStatusColor = "text-red-700";
    qualityProgressBarColor = "bg-red-700";
    qualityStatusText =
      "Zbyt mało tagów. Dodaj jeszcze 3 aby poprawić widoczność artykułu";
  } else if (checkedCount === 2) {
    qualityText = "Słabo";
    qualityStatusColor = "text-red-400";
    qualityProgressBarColor = "bg-red-400";
    qualityStatusText =
      "Zbyt mało tagów. Dodaj jeszcze 2 aby poprawić widoczność artykułu";
  } else if (checkedCount === 3) {
    qualityText = "Ok";
    qualityStatusColor = "text-yellow-400";
    qualityProgressBarColor = "bg-yellow-400";
    qualityStatusText =
      "Jest ok. Jak dodasz więcej tagów to widoczność artykułu się poprawi";
  } else if (checkedCount === 4) {
    qualityText = "Dobrze";
    qualityStatusColor = "text-green-600";
    qualityProgressBarColor = "bg-green-600";
    qualityStatusText =
      "Jest dobrze. Jak dodasz 1 tag więcej to widoczność artykułu znacznie się poprawi";
  } else if (checkedCount >= 5) {
    qualityText = "Bardzo Dobrze";
    qualityStatusColor = "text-lime-500";
    qualityProgressBarColor = "bg-lime-500";
    qualityStatusText = "Jest bardzo dobrze. O to chodziło";
  } else {
    qualityText = "Wybierz Tagi";
    qualityStatusColor = "text-gray-600";
    qualityProgressBarColor = "bg-gray-600";
    qualityStatusText = "";
  }

  const handleButtonClick = () => {
    setShowQuality(!showQuality);
  };

  useEffect(() => {
    setShowQuality(false);
  }, [checkedCount]); // Hide quality container when a new checkbox is clicked

  return (
    <>
      {showQuality && qualityText && (
        <div className="flex flex-col my-3 ms-2 border-t-[1px] border-[#E1E1E2] pt-3">
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-start mb-2">
              <span
                className={`flex me-3 font-semibold ${qualityStatusColor} text-lg quality-text`}
              >
                {qualityText}
              </span>
              <div className="flex flex-row items-center justify-start quality-status">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`flex w-[14px] h-[6px] rounded-xl ${
                      index < checkedCount
                        ? qualityProgressBarColor
                        : "bg-[#E1E1E2]"
                    } me-1`}
                  ></span>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center justify-start">
              <img
                className="flex me-2"
                src={infoIcon}
                alt="info"
                width={20}
                height={20}
              />
              <p className="font-semibold text-[#1A1A1AB2] max-w-[300px]">
                {qualityStatusText}
              </p>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={handleButtonClick}
        className="mb-4 text-white bg-[#2463EB] font-semibold text-md w-full rounded-xl h-[44px] hover:brightness-125"
      >
        Zapisz
      </button>
    </>
  );
};

export default TagsQuality;
