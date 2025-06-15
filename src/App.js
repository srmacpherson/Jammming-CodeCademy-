import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Tracklist from './Tracklist';
import Track from './Track';
import HardCodeArr from './HardCodeArr';

function App() {

  const [tracks, setTracks] = useState(HardCodeArr);
  const [playlistName, setPlaylistName] = useState('My Playlist:');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [exportPlaylist, setExportPlaylist] = useState([]);
  

  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
      <Playlist 
      playlistName={playlistName} setPlaylistName={setPlaylistName} 
      playlistTracks={playlistTracks} setPlaylistTracks={setPlaylistTracks}
      exportPlaylist={exportPlaylist} setExportPlaylist={setExportPlaylist}/>
      <Tracklist tracks={tracks} playlistTracks={playlistTracks}
          setPlaylistTracks={setPlaylistTracks}/>
      <Track />
    </div>
  );
}

export default App;
