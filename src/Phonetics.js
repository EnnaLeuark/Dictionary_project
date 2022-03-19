import React from "react";

import "./Phonetics.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  console.log(props.phonetics);

  return (
    <div>
      <p>
        {/* <img src={symbol} alt="audioSymbol" /> */}
        {props.phonetics.text}`
        <br />
        <ReactAudioPlayer
          src="https://api.dictionaryapi.dev/media/pronunciations/en/sunset-us.mp3"
          autoPlay
          controls
        />{" "}
      </p>
    </div>
  );
}
