import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Tracklist from './Tracklist';
import Track from './Track';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
      <Playlist />
      <Tracklist />
      <Track />
    </div>
  );
}

export default App;
