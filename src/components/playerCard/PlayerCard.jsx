import React, { useState } from 'react';
import playersIcon from '../../../assets/user 1.png'
import countryFlag from '../../../assets/report 1.png'


const PlayerCard = ({playerData,setAvailableBalance,availableBalance,purchasePlayers,setPurchasePlayers}) => {

  const [isSelected,setIsSelected]=useState(false);

  const handleSelected=(playerData)=>{
    if(availableBalance<playerData.price){
      alert('Your coins are under the limit');
      return;
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance-playerData.price)
    setPurchasePlayers([...purchasePlayers,playerData])
    
  }
  return (
    <div>
       <div className="card bg-base-100 shadow-sm p-4 w-sm">
  <figure>
    <img className='w-full h-[200px] rounded-sm'
      src={playerData.image_url}
      alt="Shoes" />
  </figure>
  <div className="card-body border-1 border-orange-400 rounded-sm mt-3">
<div className='flex items-center gap-2'>
  <img className='w-[24px] h-[24px]' src={playersIcon} alt="players Icon" />
  <h2 className='text-xl font-bold'>{playerData.name}</h2>
</div>
 <div className='country-div flex justify-between border-b-1 border-red-100 py-1'>
  <div className='flex gap-2 justify-center items-center'>
    <img className='w-[20px] h-[20px]' src={countryFlag} alt="country flag" />
    <p className='font-semibold'>{playerData.country}</p>
  </div>
  <button className='bg-amber-100 text-black p-1 rounded-sm px-2'>{playerData.role}</button>
 </div>
 
<div className='ratingDiv flex justify-between'>
  <p className='font-semibold'>Rating :-</p>
<button className=''>  {playerData.rating}
</button></div>
 <div className='category flex justify-between'>
  <p className='font-semibold'>Category :-</p>
<button>
    {playerData.role}
</button> 
</div>
 <div className='price flex justify-between'>
  <p className='font-semibold'>price : ${playerData.price}</p>
  <button disabled={isSelected} onClick={()=>{
   handleSelected(playerData)}} className='bg-amber-100 text-black p-1 rounded-sm px-2 hover:bg-amber-300'>{isSelected===true?"Selected":"Choose Player"}</button>
 </div>
  </div>
</div>
    </div>
  );
};

export default PlayerCard;