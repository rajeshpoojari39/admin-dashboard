import React from "react";

export const EarningsCard = ({ data }) => {
  const { label, money, color, icon } = data;
  return (
    <>
      <div className='col-xl-3 col-md-6 mb-4'>
        <div className={`card border-left-${color} shadow h-100 py-2`}>
          <div className='card-body'>
            <div className='row no-gutters align-items-center'>
              <div className='col mr-2'>
                <div
                  className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}
                >
                  {label}
                </div>
                <div className='h5 mb-0 font-weight-bold text-gray-800'>
                  {money}
                </div>
              </div>
              <div className='col-auto'>
                <i className={`fas fa-${icon} fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
