import React from 'react';
import '../styles/songsListStyle.css';
import TableComponent from './tableDeejayComponent'
import { SONGS_API_URL } from '../constants'


const Deejay = () => {
  const [songs, setSongs] = React.useState([]);

  React.useEffect(() => {
    fetch(SONGS_API_URL)
      .then(response => response.json())
      .then(data => setSongs(data))
      .catch(error => console.error('Error retrieving songs:', error));
  }, []);  

  return (
    <div className="home">
      <h1>Lista Brani</h1>
      {songs.length > 0 && <TableComponent songs={songs} />}
    </div>
  );
};

export default Deejay;