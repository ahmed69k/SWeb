import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1><strong>khalil</strong> </h1>
    <h3><strong>Name: </strong> Ahmed Assem</h3>
    <h3><strong>Email: </strong> <a href="mailto:ahmedassem04@gmail.com">ahmedassem04@gmail.com</a></h3>
    <div className='links'> 
    <a href="https://open.spotify.com/artist/3BO8fFeujKgPZHPts7kYOc?si=Jtzs0Te4TlGlT9rV7wiEAQ">
    <img
        src="https://www.logo.wine/a/logo/Spotify/Spotify-Icon-Logo.wine.svg"
        alt="Spotify Logo"
        style={{ width: '100px', height: '100px' }}
      />
    </a>
        <a href="https://soundcloud.com/khalil_ahmed">
    <img
        src="https://cdn.freebiesupply.com/logos/large/2x/soundcloud-icon-1-logo-png-transparent.png"
        alt="Spotify Logo"
        style={{ height:50, marginTop:30 }}
      />
    </a>
    <a href="https://instagram.com/the4hm3d_">
    <img
        src="https://static.vecteezy.com/system/resources/thumbnails/018/930/415/small/instagram-logo-instagram-icon-transparent-free-png.png"
        alt="Spotify Logo"
        style={{ height:100}}
      />
    </a>
    </div>
    
    </>
  )
}

export default App
