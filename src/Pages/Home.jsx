import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='Home'>
      <header>
        <h1 className='spoty'><img src="https://i.pinimg.com/originals/45/cc/6c/45cc6c91692a3665d97b570a3272132a.jpg" alt="" />Spotify</h1>
        <nav>
          <ul className='li_img'>
            <li><img src="https://img.icons8.com/fluent-systems-filled/200/FFFFFF/home.png" alt="" /><Link to={'/'}>Home</Link></li>
            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32N6i_mjMes8qXIXw7iKeqhvUN3G7YFHwHff07CgXDEcSA5y9a6evlCfP21SvdLM310o&usqp=CAU" alt="" /><Link to={'/library'}>Library</Link></li>
            <li><img src="https://avatars.githubusercontent.com/u/71128003?s=280&v=4" alt="" className='img_library' />Your Library</li>
            <br />
            <li className='h3'><h2>+</h2>Create Playlist</li>
            <li className='h3'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxV1XbUQC1Z6r_RtJe1aMCKGFg6WkiCV3vOb8Lc6RPwBxCbxyzR-n2nAJcq9_skdS&usqp=CAU" alt="" />Liked Songs</li>
            <li><img src='https://aplicacionesandroid.es/img/2020/01/8deebccf6494e7fe26f66c106831245c.jp' alt="" />Your Episodes</li>
            <br />
            <ul className='fav'>
              <li>FAV</li>
              <li>Daily Mix 1</li>
              <li>Discover Weeky</li>
              <li>Malaliam</li>
              <li>Dance</li>
              <li>EDM</li>
            </ul>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Home
