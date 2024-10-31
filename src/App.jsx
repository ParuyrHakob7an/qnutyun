import './App.css';
import SpotifyIcon from './Components/SpotifyIcon';
import { useState, useEffect } from 'react';

import SpotIcon from '../src/img/SpotIcon.png'
const clientId = "";
const clientSecret = "";

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  // const [artistID, setArtistID] = useState('');

  useEffect(() => {
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
      },
      body: 'grant_type=client_credentials',
    };
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then((resp) => resp.json())
      .then((resp) => setAccessToken(resp.access_token));
  }, []);


  async function search() {
    const artistParameters = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    };
    const artistID = await fetch(
      `https://api.spotify.com/v1/search?q=${value}&type=artist`,
      artistParameters
    )
      .then((resp) => resp.json())
      .then((resp) => {
        return resp.artists.items[0].id
      });
    await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/albums?offset=0&limit=50&include_groups=album,single,compilation,appears_on`,
      artistParameters
    )
      .then((resp) => resp.json())
      .then((data) => setData(data));
      // .then((data) => console.log(data));
  }
  return (
    <div className="App">
       <div className="Home">
        <header>
          <h1 className='spoty'><img src="https://i.pinimg.com/originals/45/cc/6c/45cc6c91692a3665d97b570a3272132a.jpg" alt="" />Spotify</h1>
          <nav>
            <ul className='li_img'>
              <li><a href="#" className='liii'><img src="https://img.icons8.com/fluent-systems-filled/200/FFFFFF/home.png" alt="" />Home</a></li>
              <li><a href="#" className='liii'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32N6i_mjMes8qXIXw7iKeqhvUN3G7YFHwHff07CgXDEcSA5y9a6evlCfP21SvdLM310o&usqp=CAU" alt="" />Search</a></li>
              <li><a href="#" className='liii'> <img src="https://avatars.githubusercontent.com/u/71128003?s=280&v=4" alt="" className='img_library' />Your Library</a></li>
              <br />
              <li className='h3'><h2>+</h2>Create Playlist</li>
              <li className='h3'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxV1XbUQC1Z6r_RtJe1aMCKGFg6WkiCV3vOb8Lc6RPwBxCbxyzR-n2nAJcq9_skdS&usqp=CAU" alt="" />Liked Songs</li>
              <li><img src='https://aplicacionesandroid.es/img/2020/01/8deebccf6494e7fe26f66c106831245c.jp' alt="" />Your Episodes</li>
              <br/>
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
      <div className="Erku">
      <div>
        <h2>Your top genres</h2>
        <div>

        </div>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='Setinput' placeholder='Artists, songs, or production' />
      <button onClick={() => {
        search()
      }}className='Search'>Search</button>
      <div className="Spotify">
      <div className="Spotify_card">
      {data.items?.map((e) => (
        e.images.length > 0 && (
          <SpotifyIcon
          key={e.id}
          imageUrl={e.images[0].url}
          name={e.name}
          />
        )
      ))}
      </div>  
      </div>
          </div>
         </div>
    
  );
}


export default App;
