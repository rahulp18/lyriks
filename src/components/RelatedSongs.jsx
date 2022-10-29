import React from "react";
import SongBar from "./SongBar";
const RelatedSongs = ({
  data,
  artistId,

  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  console.log(data);
  return (
    <div className="mt-6 flex-col">
      {data?.map((song, i) => (
        <SongBar
          key={`${artistId}-${song.key}-${i}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  );
};

export default RelatedSongs;
