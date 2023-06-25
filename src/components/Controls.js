import React from "react";
// import Lyrics from "./Lyrics";
import "./Lyrics.css";
import songSrc from "../audio/ultramarine-memories.wav";
import "./Controls.css";
import { useState, useEffect } from "react";

const lyrics = [
  {
    timestamp: 0,
    content: "",
  },
  {
    timestamp: 0,
    content: "<Starting...>",
  },
  {
    timestamp: 0.75,
    content: "Stuck in reality",
  },
  {
    timestamp: 9,
    content: "Living in ultramarine memories",
  },
  {
    timestamp: 34,
    content: "In the know, I drew nothingness",
  },
  {
    timestamp: 39.2,
    content: "Tinged with the color transparent",
  },
  {
    timestamp: 42.5,
    content: "Our achromatic bodies, dancing to the beat",
  },
  {
    timestamp: 47.8,
    content: "In the portrait, I pictured us so",
  },
  {
    timestamp: 1 * 60 + 9,
    content: "The ultramarine lurking in my memories",
  },
  {
    timestamp: 1 * 60 + 14,
    content: "Keeps fading for another year",
  },
  {
    timestamp: 1 * 60 + 17,
    content: "At the edge of the sea",
  },
  {
    timestamp: 1 * 60 + 20.8,
    content: "Your solemn hands, gone vanished once again",
  },
  {
    timestamp: 1 * 60 + 25.5,
    content: "Flowers are meaningless",
  },
  {
    timestamp: 1 * 60 + 29,
    content: "Sundered so fast, we danced through nothingness",
  },
  {
    timestamp: 1 * 60 + 34,
    content: "Under the moonlight",
  },
  {
    timestamp: 1 * 60 + 37,
    content: "I'm drawing my remaining howls",
  },
  {
    timestamp: 2 * 60 - 0.2,
    content: "For so long, in awe of sun-kissed cheeks",
  },
  {
    timestamp: 2 * 60 + 4.8,
    content: "Now the waves had come to the shore",
  },
  {
    timestamp: 2 * 60 + 8.5,
    content: "The gap of ours, a bridge between two lands separate",
  },
  {
    timestamp: 2 * 60 + 13.5,
    content: "In the portrait, I pictured us so",
  },
  {
    timestamp: 2 * 60 + 17.5,
    content: "The ultramarine lurking in my memories",
  },
  {
    timestamp: 2 * 60 + 23,
    content: "Stays faded for another year",
  },
  {
    timestamp: 2 * 60 + 26,
    content: "At the edge of the sea",
  },
  {
    timestamp: 2 * 60 + 29.5,
    content: "Your solemn hands gone vanished forever",
  },
  {
    timestamp: 2 * 60 + 34,
    content: "Colors are of no need",
  },
  {
    timestamp: 2 * 60 + 37.2,
    content: "On this seabed, only sorrow retained",
  },
  {
    timestamp: 2 * 60 + 42.8,
    content: "Under the moonlight",
  },
  {
    timestamp: 2 * 60 + 46,
    content: "Wolves started to howl at the night",
  },
  {
    timestamp: 3 * 60 + 37,
    content: "Oh... oh... oh... oh",
  },
  {
    timestamp: 3 * 60 + 50,
    content: "<The end>",
  },
  {
    timestamp: 3 * 60 + 51,
    content: "",
  },
];

const Controls = () => {
  const songTime = 4 * 60 + 55;
  var song = document.querySelector(".song");
  var isPlaying = false;
  var progbar = document.querySelector(".progbar");
  var FLyric = document.querySelector("#flyric");
  var CLyric = document.querySelector("#clyric");
  var LLyric = document.querySelector("#llyric");
  var volumebar = document.querySelector(".volume");
  var lastVolume;

  var fLyric = "",
    cLyric = "",
    lLyric = "";

  const [playPause, setPlayPause] = useState("play");
  const [volumeState, setVolumeState] = useState("high");

  useEffect(() => {
    if (!progbar) progbar = document.querySelector(".progbar");
    progbar.value = 0;
    if (!volumebar) volumebar = document.querySelector(".volume");
    volumebar.value = 80;
    lastVolume = volumebar.value;
  }, []);

  const timer = setInterval(() => {
    if (isPlaying) {
      progbar.value = song.currentTime;

      let currentTimestampId = 0;
      for (let i = lyrics.length - 2; i >= 1; i--) {
        if (song.currentTime >= lyrics[i].timestamp) {
          currentTimestampId = i;
          break;
        }
      }

      fLyric = lyrics[currentTimestampId - 1].content;
      cLyric = lyrics[currentTimestampId].content;
      lLyric = lyrics[currentTimestampId + 1].content;

      if (!FLyric) FLyric = document.querySelector("#flyric");
      FLyric.textContent = fLyric;
      if (!CLyric) CLyric = document.querySelector("#clyric");
      CLyric.textContent = cLyric;
      if (!LLyric) LLyric = document.querySelector("#llyric");
      LLyric.textContent = lLyric;
    }
  }, 500);

  const updateProgress = () => {
    if (!song) song = document.querySelector(".song");
    if (!isPlaying) {
      song.play();
      isPlaying = true;
    }
    song.currentTime = progbar.value;
    setPlayPause("pause");
  };

  const PlayPause = () => {
    if (!song) song = document.querySelector(".song");
    if (!progbar) progbar = document.querySelector(".progbar");
    if (playPause === "play") {
      //play
      setPlayPause("pause");
      song.play();
      isPlaying = true;
    } else if (playPause === "pause") {
      //pause
      setPlayPause("play");
      song.pause();
      isPlaying = false;
    }
  };

  const Backward = () => {
    if (!isPlaying) {
      alert("The song is not played yet. Please play the song first <3");
    }
    else song.currentTime -= 10;
  };

  const Forward = () => {
    if (!isPlaying) {
      alert("The song is not played yet. Please play the song first <3");
    }
    else song.currentTime += 10;
  };

  const updateVolume = () => {
    if (!song) song = document.querySelector(".song");
    if (!volumebar) volumebar = document.querySelector(".volume");
    song.volume = volumebar.value / 100;
    if (volumebar.value == 0) {
      setVolumeState("off");
    } else if (volumebar.value < 50) {
      setVolumeState("low");
    } else {
      setVolumeState("high");
    }
  };

  const Mute = () => {
    if (volumeState === "off") {
      volumebar.value = lastVolume;
      if (volumebar.value < 50) {
        setVolumeState("low");
      } else {
        setVolumeState("high");
      }
    } else {
      lastVolume = volumebar.value;
      volumebar.value = 0;
      setVolumeState("off");
    }
  };

  return (
    <>
      {/* <Lyrics currentTime={currentTime} /> */}
      <div className="lyrics-container">
        <div className="lyrics">
          <div className="lyric prev-lyric">
            <div className="lyric-cover-prev"></div>
            <div id="flyric">{fLyric}</div>
          </div>
          <div className="lyric current-lyric" id="clyric">
            {cLyric}
          </div>
          <div className="lyric next-lyric">
            <div className="lyric-cover-next"></div>
            <div id="llyric">{lLyric}</div>
          </div>
        </div>
      </div>
      <div className="song-player">
        <audio className="song" src={songSrc}></audio>
        <div className="big-container">
          <div className="progbar-container">
            <input
              className="progbar"
              type="range"
              max={songTime}
              onInput={updateProgress}
            />
          </div>
          <div className="controls">
            <div className="icon-container" onClick={Backward}>
              <i className="fa-solid fa-backward"></i>
            </div>
            <div className="icon-container-mid" onClick={PlayPause}>
              <i id="playPause" className={`fa-solid fa-${playPause}`}></i>
            </div>
            <div className="icon-container" onClick={Forward}>
              <i className="fa-solid fa-forward"></i>
            </div>
          </div>
          <div className="volume-bigcontainer">
            <div className="volume-container">
              <i
                className={`fa-solid fa-volume-${volumeState}`}
                onClick={Mute}
              ></i>{" "}
              {/* volume-low, volume-off */}
              <input
                className="volume"
                type="range"
                max={100}
                min={0}
                onInput={updateVolume}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Controls;
