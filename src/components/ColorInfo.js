import React from "react";

const ColorInfo = ({ color }) => {
  const { label, bgcolor, text, colorCode } = color;
  return (
    <div className='col-lg-6 mb-4' key={colorCode}>
      <div className={`card bg-${bgcolor} text-${text} shadow`}>
        <div className='card-body'>
          {label}
          <div className={`text-${text}-50 small`}>{colorCode}</div>
        </div>
      </div>
    </div>
  );
};

export default ColorInfo;
