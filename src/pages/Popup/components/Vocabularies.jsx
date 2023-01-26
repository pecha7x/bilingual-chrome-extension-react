import React, { useState } from 'react';

import './Vocabularies.css';

const Vocabularies = ({items, currentUser}) => {
  console.log(currentUser.currentVocabulary)
  const [selectedVocabulary, setSelectedVocabulary] = useState(currentUser.currentVocabulary.id);

  const onChangeHandler = (event) => {
    const vocabulary = items.find(x => x.id === event.target.value);
    const userData = { ...currentUser, currentVocabulary: vocabulary };
    chrome.storage.local.set({ currentUser: userData }, () => {
      setSelectedVocabulary(vocabulary.id);
    });
  };

  return (
    <div className='vocabularies-list'>
      <label htmlFor="vocabulary-select">Choose a vocabulary:</label>
      <select id="vocabulary-select" value={selectedVocabulary} onChange={onChangeHandler}>
        {
          items.map(item => (
            <option key={item.id} value={item.id}>{item.language} - common</option>
          ))
        }
      </select>
    </div>
  );
};

export default Vocabularies;
