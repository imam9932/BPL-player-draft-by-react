import React, { use } from 'react';

import PlayerCard from './playerCard/PlayerCard';

const AvailablePlayers = ({playersPromise,setAvailableBalance,availableBalance,purchasePlayers,setPurchasePlayers}) => {
  const playersData=use(playersPromise);
  

    
    

  
  return (
    <div className='w-11/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-3'>
       {
        playersData.map(playerData=><PlayerCard setAvailableBalance={setAvailableBalance}
        availableBalance={availableBalance}
        playerData={playerData}
        purchasePlayers={purchasePlayers}
        setPurchasePlayers={setPurchasePlayers}></PlayerCard>
        )
       }
    </div>
  );
};

export default AvailablePlayers;