import React from 'react';

const SelectedCard = ({player}) => {
  console.log(player)
  
  return (
    <div>
      <div className='flex justify-between p-2 border-1 border-orange-400 rounded-sm mt-5'>
        <div className='flex gap-2'>
          <img src='' alt="" />
          <div>
            <h1 className='font-bold'>Sakib al hasan</h1>
            <h4 className='text-sm'>role</h4>
          </div>
          </div>
          <div><p>Delete</p></div>
      </div>
    </div>
  );
};

export default SelectedCard;