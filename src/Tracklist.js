import React from 'react';
import Track from './Track';

function Tracklist( {tracks, playlistTracks, setPlaylistTracks} ) {
    return (
        <div>
            <h2>Tracklist:</h2>
            {tracks.map(track => (
                <Track key={track.id} track={track} playlistTracks={playlistTracks}
          setPlaylistTracks={setPlaylistTracks}/>
            ))}
        </div>
    );
}
export default Tracklist;
