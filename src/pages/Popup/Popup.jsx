import React, { useEffect, useState } from 'react';

import logo from '../../assets/img/logo.png';
import './Popup.css';
import Vocabularies from './components/Vocabularies';

const Popup = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    chrome.storage.local.get('currentUser', (item) => {
      setCurrentUser(item.currentUser);
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://bilingual.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          To be Bilingual 
        </a>
      </header>

      {
        currentUser && 
          <Vocabularies items={currentUser.vocabularies} currentUser={currentUser} />
      }
    </div>
  );
};

export default Popup;
