 
import './App.css'
import logoImg from '../assets/logo.png'
import dollarImg from '../assets/dollar 1.png'
import AvailablePlayers from './components/availablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { Suspense, useState } from 'react'

const fetchPlayers=async()=>{
  const res=await fetch('../public/players.json')
  return res.json();
  
}
 const playersPromise=fetchPlayers();


function App() {
 

  const [toggle,setToggle]=useState(true);
  const [availableBalance,setAvailableBalance]=useState(6000000000);

  const [purchasePlayers,setPurchasePlayers]=useState([]);
  
   
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
  <div className="navbar-start">
    <img src={logoImg} alt="logo" />
  </div>
  <div className="navbar-center lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
       <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className='flex gap-1 justify-center items-center bg-amber-100 text-black p-1 rounded-sm px-2 hover:bg-amber-300' ><span>{availableBalance}</span>
    <span>Coin</span>
    <span><img className='w-[24px] h-[24px]' src={dollarImg} alt="" /></span></button>
  </div>
</div>
<div className='availablePlayers w-11/12 mx-auto flex justify-between'>
  <h1>Available Players</h1>
  <div className='flex'>
    <button onClick={()=>setToggle(true)} className={`bg-amber-100 text-black p-1 rounded-l-sm px-2 ${toggle===true?'bg-amber-300':''}`}>Available</button>
    <button onClick={()=>setToggle(false)} className={`bg-amber-100 text-black p-1 rounded-r-sm px-2 ${toggle===true?'':'bg-amber-300'}`}>Selected <span>(0)</span></button>
  </div>

</div>

{
  toggle===true?
<Suspense fallback={<span className="loading loading-spinner loading-xl flex justify-center items-center"></span>
}>
<AvailablePlayers
 playersPromise={playersPromise}
setAvailableBalance={setAvailableBalance}
availableBalance={availableBalance}
purchasePlayers={purchasePlayers}
setPurchasePlayers={setPurchasePlayers}
></AvailablePlayers>
</Suspense>:<SelectedPlayers purchasePlayers={purchasePlayers}
setPurchasePlayers={setPurchasePlayers}></SelectedPlayers>
}

    </>
  )
}

export default App
