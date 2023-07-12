import React, { useState, useEffect } from 'react';
import { GENRES_API_URL, SONGS_API_URL } from '../constants'
import TableComponent from './tableComponent'
import '../styles/songsListStyle.css';

const Home = () => {
  const [genres, setGenres] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Simulating API call to retrieve genres
    fetch(GENRES_API_URL)
      .then(response => response.json())
      .then(data => setGenres(data))
      .catch(error => console.error('Error retrieving genres:', error));
  }, []);
  
   
  const filterSongs = (value) => {
    let url = value ? `${SONGS_API_URL}?music_genres=${value}` : `${SONGS_API_URL}`
    fetch(url)
    .then(response => response.json())
    .then(data => setSongs(data))
    .catch(error => console.error('Error retrieving songs:', error));
  }

  return (
    <div className="home">
      <h1>Canzoni disponibili</h1>
      <div className="genre-buttons">
        {genres.map(genre => (
          <button key={genre.id} className="genre-button" onClick={() =>filterSongs(genre.id)} >
            {genre.name}
          </button>
        ))}
        <button key='all' className='genre-button' onClick={() =>filterSongs(null)}>Tutte</button>
      </div>
      {songs.length > 0 && <TableComponent songs={songs} />}
    </div>
  );
};

export default Home;
