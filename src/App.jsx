import nft from './assets/image-equilibrium.jpg'
import picture from './assets/image-avatar.png'
import ethereumIcon from './assets/icon-ethereum.svg'
import clockIcon from './assets/icon-clock.svg'
import viewIcon from './assets/icon-view.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className='card'>
        <div className='image-container'>
          <img src={nft} alt="nft-image" id='nft-image'/>
          <div className='view-container'>
            <img src={viewIcon} alt="nft-image" id='view-image'/>
          </div>
        </div>
        <h3>Equilibrium #3429</h3>
        <p className='paragraph'>Our Equilibrium collection promotes balance and calm.</p>
        <div className='info'>
          <div className='price-info info-container'>
            <img src={ethereumIcon}/>
            <p>0.041 ETH</p>
          </div>
          <div className='time-info info-container'>
            <img src={clockIcon}/>
            <p>3 days left</p>
          </div>
        </div>
        <div className='created-by'>
          <img src={picture} alt="avatar" id='avatar-image'/>
          <p>Creation of <span>Jules Wyvern</span></p>
        </div>
      </div>
    </div>
  )
}

export default App
