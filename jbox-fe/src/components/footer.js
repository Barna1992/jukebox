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

    </footer>
  );
};

export default Footer;