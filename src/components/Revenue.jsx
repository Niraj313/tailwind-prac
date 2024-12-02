/** @format */

import React from 'react';

const Revenue = ({ title, orderCount, amount }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-4'>
      <div className='font-medium text-xl text-gray-700'>{title}?</div>
      <div className='flex justify-between  pt-2'>
        <div className='font-semibold text-3xl font-"oswald'>${amount}</div>
        <div>
          {orderCount ?
            <div className='flex cursor-pointer underline font-medium flex-col justify-center'>
              <div className='flex'>
                <div className='text-blue-700'>
                  {orderCount} order(s)
                </div>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6 text-blue-700'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m8.25 4.5 7.5 7.5-7.5 7.5'
                    />
                  </svg>
                </div>
              </div>
            </div>
          : null}
        </div>
      </div>
    </div>
  );
};

export default Revenue;