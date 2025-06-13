import React from "react";

function Playlist() {
  return (
    <div className="Playlist">
      <h2>Your Playlist:</h2>
      <ul>
        <li>Song 1</li>
        <li>Song 2</li>
        <li>Song 3</li>
      </ul>
      <button>Save Playlist to Spotify</button>
    </div>
  );
}
export default Playlist;