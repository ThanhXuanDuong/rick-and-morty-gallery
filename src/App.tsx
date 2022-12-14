import React from 'react';
import './App.css';
import CharacterGallery from "./CharacterGallery";
import useCharacters from "./hooks/useCharacters";


function App() {
  const characters=useCharacters();
  return (
      <CharacterGallery characters={characters}/>
  );
}

export default App;
