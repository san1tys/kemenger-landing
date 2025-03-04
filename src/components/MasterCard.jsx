import React from "react";
import "./MasterCard.css";

const MasterCard = ({ imgURL, label, subtext, backContent, experience }) => {
  return (
    <div className="container sm:w-[312px] sm:min-w-[312px] h-[414px] w-full">
      <div className="card">
        <div className="front bg-white">
          <img
            className="w-full h-[320px] rounded-t-[20px] object-cover object-top"
            src={imgURL}
            alt={label}
          />
          <div className="px-6 pb-8">
            <h3 className="mt-3 font-worksans text-xl leading-normal font-bold text-center">
              {label}
            </h3>
            <p className="mt-[2px] break-words font-inter text-sm leading-normal text-slate-gray text-center">
              {subtext}
            </p>
          </div>
        </div>
        <div className="back">
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>
          <h2 className="text-lg font-worksans font-bold mt-16">{label}</h2>
          <p className="mt-4 font-inter text-slate-gray text-sm max-w-[30ch]">{backContent}</p>
          <p className="text-base font-semibold mt-6 max-w-[25ch]">{experience}</p>
        </div>
      </div>
    </div>
  );
};

export default MasterCard;
