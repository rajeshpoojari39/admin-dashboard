import React from "react";

const ProjectsInfoBar = ({ projectInfo }) => {
  const { label, percentage, araiValue, barColor } = projectInfo;

  return (
    <>
      <h4 className='small font-weight-bold'>
        {label} <span className='float-right'>{percentage}</span>
      </h4>
      <div className='progress mb-4'>
        <div
          className={`progress-bar bg-${barColor}`}
          role='progressbar'
          style={{ width: percentage }}
          aria-valuenow={araiValue}
          aria-valuemin='0'
          aria-valuemax='100'
        ></div>
      </div>
    </>
  );
};

export default ProjectsInfoBar;
