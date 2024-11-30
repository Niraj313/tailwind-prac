/** @format */

import React from 'react';

const Revenue = ({ title, orderCount, amount }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-10'>
      <div className='text-xl font-bold'>{title}?</div>
      <div className='flex justify-between text-lg font-semibold'>
        <div>${amount}</div>
        <div>
          {orderCount ? (
            <div>
              {orderCount} order(s) {'>'}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Revenue;
