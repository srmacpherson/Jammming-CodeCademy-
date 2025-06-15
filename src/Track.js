import React from 'react';
import Tracklist from './Tracklist';

function Track( {track, playlistTracks, setPlaylistTracks} ) {

    const handleAddToPlaylist = () => {
        console.log(track.id)
        console.log(playlistTracks)

        for (let i = 0; i < playlistTracks.length; i++) {
            console.log(playlistTracks[i])
            if (playlistTracks[i].id === track.id) {
                alert(`${track.name} by ${track.artist} is already in the playlist.`);
                return;
            }
        }

        setPlaylistTracks([...playlistTracks, track]);
    }

    if (!track) {
        return null;
    }

  return (
    <div className="Track">
      <h3>{track.name}</h3>
      <p>Artist: {track.artist}</p>
      <p>Album: {track.album}</p>
      <button onClick={handleAddToPlaylist}>Add to Playlist</button>
    </div>
  );
}

export default Track;