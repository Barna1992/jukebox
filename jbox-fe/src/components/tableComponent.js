import React from 'react';
import '../styles/tableStyle.css';

const TableComponent = ({ songs }) => {
  return (
    <div className="table-container">
      <table className="song-table">
        <thead>
          <tr>
            <th>Titolo</th>
            <th>Artista</th>
          </tr>
        </thead>
        <tbody>
          {songs.map(song => (
            <tr key={song.id}>
              <td>{song?.title?.toUpperCase()}</td>
              <td>{song?.author?.toUpperCase()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
