import { Button } from "@mui/material";
import React from "react";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import useMusicPlayer from "../hooks/useMusicPlayer";

const Controller = () => {
  const {
    togglePlay,
    isPlaying,
    playNextTrack,
    playPreviousTrack,
    currentTrackName,
  } = useMusicPlayer();
  return (
    <div>
      <Button
        variant="text"
        size="large"
        onClick={() => {
          if (currentTrackName) playPreviousTrack();
        }}
      >
        <SkipPreviousIcon fontSize="large" />
      </Button>
      <Button
        variant="text"
        size="large"
        onClick={() => {
          if (currentTrackName) togglePlay();
        }}
      >
        {isPlaying ? (
          <PauseCircleIcon sx={{ fontSize: 60 }} />
        ) : (
          <PlayCircleIcon sx={{ fontSize: 60 }} />
        )}
      </Button>
      <Button
        variant="text"
        size="large"
        onClick={() => {
          if (currentTrackName) playNextTrack();
        }}
      >
        <SkipNextIcon fontSize="large" />
      </Button>
    </div>
  );
};

export default Controller;
