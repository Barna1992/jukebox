import React from 'react';
import { FaPlus, FaMusic, FaClipboardList } from 'react-icons/fa';
import { TiThLargeOutline } from 'react-icons/ti';
import '../styles/footer.css';

const Footer = () => {

    const handlePlusClick = () => {
        window.location.href = '/add_songs';
    };

    const handleMusicListClick = () => {
        window.location.href = '/';
    };

    const handleMusicClick = () => {
        window.location.href = '/deejay';
    };

  return (
    <footer className="app-footer">
      <div className="footer-icons">
        <FaPlus className="footer-icon" onClick={handlePlusClick}/>
      </div>
      <div className="footer-icons">
        <TiThLargeOutline className="footer-icon" onClick={handleMusicListClick}/>
      </div>
      <div className="footer-icons">
        <FaMusic className="footer-icon" onClick={handleMusicClick}/>
      </div>
    </footer>
  );
};

export default Footer;