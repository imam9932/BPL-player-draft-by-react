import React from 'react';
import SelectedCard from '../selectedCard/SelectedCard';

const SelectedPlayers = ({purchasePlayers}) => {
  
  return (
    <>
<div className='w-11/12 mx-auto'>
  {
  purchasePlayers.map(player=>
  <SelectedCard player={player}></SelectedCard>)
}

</div>
</>
        
    
  );
};

export default SelectedPlayers;