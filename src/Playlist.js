import React from "react";

function Playlist( {playlistName, setPlaylistName, playlistTracks, setPlaylistTracks, exportPlaylist, setExportPlaylist} ) {

    const handlePlaylistName = (e) => {
        setPlaylistName(e.target.value)
    }

    const handleRemoveTrack = (track) => {
        for (let i = 0; i < playlistTracks.length; i++) {
            console.log(playlistTracks[i].id)
            console.log(track.id)
            if (playlistTracks[i].id === track.id) {
                const trackToRemove = playlistTracks[i];
                setPlaylistTracks(playlistTracks.filter(t => t.id !== trackToRemove.id));
                alert(`${trackToRemove.name} by ${trackToRemove.artist} has been removed from the playlist.`);
                return; 
            }
        }
    }

    const handleExportPlaylist = () => {
        for (let i = 0; i < playlistTracks.length; i++) {
            exportPlaylist.push(playlistTracks[i].uri);
        }
        setExportPlaylist(exportPlaylist);
        alert(`Playlist "${playlistName}" has been exported!`);
        console.log(exportPlaylist);
        // Here you would typically call a function to save the playlist to Spotify
        setPlaylistTracks([]); // Clear the playlist after export
        setPlaylistName('My Playlist:'); // Reset playlist name
        setExportPlaylist([]); // Clear the export array
    }

  return (
    <div className="Playlist">
        <label>Custom name: </label>
        <input type='text' onChange={handlePlaylistName}/>
      <h2>{playlistName}</h2>
      <ul>
        {playlistTracks.map(track => (
     <div key={track.id}>
          <li>{track.name} by {track.artist}</li>
          <button onClick={() => handleRemoveTrack(track)}>Remove</button>
      </div>
     ))}
      </ul>
      <button onClick={handleExportPlaylist}>Save Playlist to Spotify</button>
    </div>
  );
}
export default Playlist;