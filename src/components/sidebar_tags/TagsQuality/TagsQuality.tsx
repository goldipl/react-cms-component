import React, { useState, useEffect } from "react";
import infoIcon from "./../../../assets/icons/sidebar_modal/info.svg";
import { QualityLevels } from "./QualityLevels";

interface TagsQualityProps {
  checkedCount: number;
}

const TagsQuality: React.FC<TagsQualityProps> = ({ checkedCount }) => {
  const [showQuality, setShowQuality] = useState(false);

  let qualityText = "";
  let qualityStatusColor = "";
  let qualityProgressBarColor = "";
  let qualityStatusText = "";

  let checkedCountIndex = checkedCount - 1; // Adjust index for zero-based array
  if (checkedCountIndex < 0) {
    checkedCountIndex = QualityLevels.length - 1; // Set to default for out-of-range values
  } else if (checkedCountIndex >= QualityLevels.length) {
    checkedCountIndex = 4;
  }

  const qualityLevel = QualityLevels[checkedCountIndex];

  qualityText = qualityLevel.text;
  qualityStatusColor = qualityLevel.statusColor;
  qualityProgressBarColor = qualityLevel.progressBarColor;
  qualityStatusText = qualityLevel.statusText;

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
