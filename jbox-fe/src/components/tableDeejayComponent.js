import React from 'react';
import '../styles/tableStyle.css';
import { FaHeart } from 'react-icons/fa';
import { DEDICATIONS_API_URL } from '../constants'

const TableComponent = ({ songs }) => {
  const [dedicaIndex, setDedicaIndex] = React.useState(-1);
  const [message, setMessage] = React.useState('');
  const [name, setName] = React.useState('');

  const handleDedicaClick = (index) => {
    setDedicaIndex(index);
  };

  const handleResetDedicaClick = (index) => {
    setDedicaIndex(-1);
  };

  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSendMessage = (event, songId) => {
    event.preventDefault();
    fetch(DEDICATIONS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ song: songId, description: message, nickname: name })
    })
      .then(data => {
        // Handle success response here
        console.log('SEND')
      })
      .catch(error => {
        // Handle error here
        console.error('Error:', error);
      });
    setDedicaIndex(-1);
    setMessage('');
    setName('');
  };

  return (
    <div className="table-container">
      <table className="song-table">
        <thead>
          <tr>
            <th>Titolo</th>
            <th>Artista</th>
            <th>Dedica</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={song.id}>
              <td>{song?.title?.toUpperCase()}</td>
              <td>{song?.author?.toUpperCase()}</td>
              <td>
                {song?.dedications?.map( dedica => (<div className='dedica-div'><span className='span-dedica'>{dedica.description}</span><span className='span-author'>{dedica.author}</span></div>))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
