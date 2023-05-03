import React, { useState } from "react";
import Track1 from "./track1.mp3";
import Track2 from "./track2.mp3";
import Track3 from "./track3.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Lifelike",
      file: Track1,
    },
    {
      name: "Smoke",
      file: Track2,
    },
    {
      name: "Easy Life",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};
//console.log(defaultValues.tracks[0].file, 'den tu player context')

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
