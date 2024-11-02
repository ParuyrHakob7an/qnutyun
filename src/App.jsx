import './App.css';
import SpotifyIcon from './Components/SpotifyIcon';
import { useState, useEffect } from 'react';

import SpotIcon from '../src/img/SpotIcon.png'
import Library from './Components/Library';
import Home from './Pages/Home';
const clientId = "";
const clientSecret = "c1c37816c7424d99b1678cda1a0aa35e";

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
       
      {/* <div className="Erku">
      <div>
       
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
          </div> */}
          <Library/>
    <Home/>
         </div>
    
  );
}


export default App;
