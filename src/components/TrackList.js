import { Button, Typography } from "@mui/material";
import useMusicPlayer from "../hooks/useMusicPlayer";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import HeadsetIcon from "@mui/icons-material/Headset";
const TrackList = () => {
  const {
    trackList,
    currentTrackName,
    playTrack,
    isPlaying,
    currentTrackIndex,
  } = useMusicPlayer();
  console.log(console.log(isPlaying, "isplaying"));
  return (
    <>
      <Typography sx={{ textAlign: "center", color: "blue" }}>
        {currentTrackName}
      </Typography>
      {trackList.map((track, index) => (
        // ( Surprise us with your code here)
        <Button
          key={index}
          sx={{ backgroundColor: "darkgray" }}
          onClick={() => playTrack(index)}
        >
          <div className="song-title">
            {isPlaying && currentTrackIndex === index ? (
              <HeadsetIcon sx={{ mr: 2 }} />
            ) : (
              <PauseCircleIcon sx={{ mr: 2 }} />
            )}
            <p>{track.name}</p>
          </div>
        </Button>
      ))}
    </>
  );
};
export default TrackList;
