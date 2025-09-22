 
import './App.css'
import logoImg from '../assets/logo.png'
import dollarImg from '../assets/dollar 1.png'
import AvailablePlayers from './components/availablePlayers'
import { Suspense } from 'react'

const fetchPlayers=async()=>{
  const res=await fetch('../public/players.json')
  return res.json();
  
}


function App() {
  const playersPromise=fetchPlayers();
   
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm w-11/12">
  <div className="navbar-start ml-[80px]">
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
    <button className='flex gap-1 justify-center items-center '><span>60000000</span>
    <span>Coin</span>
    <span><img className='w-[24px] h-[24px]' src={dollarImg} alt="" /></span></button>
  </div>
</div>

<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
}>
<AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
</Suspense>
    </>
  )
}

export default App
