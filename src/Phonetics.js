import React from "react";
import "./Phonetics.css";
import symbol from "./images/audio-symbol.png";
// import ReactAudioPlayer from "react-audio-player"; // Variante Audio Player

export default function Phonetics(props) {
  console.log(props.phonetics);

  function playSound() {
    const audio = document.getElementById("audio");
    audio.load();
    audio.play();
  }

  if (props.phonetics.audio) {
    return (
      <div>
        <audio id="audio">
          <source src={props.phonetics.audio} type="audio/mp3" />
        </audio>
        <button onClick={playSound}>
          <img src={symbol} alt="audioSymbol" /> {props.phonetics.text}`
        </button>
      </div>
    );
  } else {
    return null;
  }
}
