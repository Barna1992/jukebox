import React, { useState, useEffect } from 'react';
import '../styles/songCreationFormStyle.css';
import { GENRES_API_URL, SONGS_API_URL } from '../constants'


const FormComponent = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genders, setGenders] = useState([]);
  const [selectedGender, setSelectedGender] = useState('');
  const [isValid, setIsValid] = useState(true)
  const [addedItem, setAddedItem] = useState('')


  useEffect(() => {
    // Simulating API call to retrieve genders
    fetch(GENRES_API_URL)
      .then(response => response.json())
      .then(data => setGenders(data))
      .catch(error => console.error('Error retrieving genders:', error));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    if ( !selectedGender || !title ) {
        setIsValid(false)
    }
    else {
        setIsValid(true)
    }
    // Handle form submission here, e.g., make API call to submit the data
    console.log('Submitted Data:', { title, author, gender: selectedGender });
    // Reset form fields

    fetch(SONGS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, author, gender: selectedGender })
    })
      .then(data => {
        // Handle success response here
        setAddedItem(title)
      })
      .catch(error => {
        // Handle error here
        console.error('Error:', error);
      });

    // Reset form fields
    setTitle('');
    setAuthor('');
    setSelectedGender('');

  };

  return (
    <div>
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        Titolo:
        <input
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </label>
      <br />
      <label>
        Autore:
        <input
          type="text"
          value={author}
          onChange={event => setAuthor(event.target.value)}
        />
      </label>
      <br />
      <label>
        Genere:
        <select
          className="select-field"
          value={selectedGender}
          onChange={event => setSelectedGender(event.target.value)}
        >
          <option value="">Seleziona Genere</option>
          {genders.map(gender => (
            <option key={gender.id} value={gender.id}>
              {gender.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Aggiungi Brano</button>
    </form>
    {addedItem && <p className="item-added">
        Aggiunto il brano <strong>{addedItem}</strong> alla libreria
    </p> }
    { !isValid && <p className='error-message'>
        Titolo e genere sono obbligatori!
    </p> }

    </div>
  );
};

export default FormComponent;
