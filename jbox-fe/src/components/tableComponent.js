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
              <td onClick={handleResetDedicaClick}>{song?.title?.toUpperCase()}</td>
              <td onClick={handleResetDedicaClick}>{song?.author?.toUpperCase()}</td>
              <td>
                {dedicaIndex === index ? (
                  <form className="dedica-form" onSubmit={(event) => handleSendMessage(event, song.id)}>
                    <input
                      type="text"
                      className="dedica-input"
                      placeholder="Inserisci il tuo nome"
                      value={name}
                      onChange={handleNameChange}
                    />
                    <textarea
                      rows="3"
                      className="dedica-textarea"
                      placeholder="Scrivi qui la tua dedica"
                      value={message}
                      onChange={handleTextareaChange}
                    ></textarea>
                    <button className="dedica-submit" type="submit">Invia</button>
                  </form>
                ) : (
                  <button
                    className="dedica-button"
                    onClick={() => handleDedicaClick(index)}
                  >
                    DEDICA <FaHeart />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
