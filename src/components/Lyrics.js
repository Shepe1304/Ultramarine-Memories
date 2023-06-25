import React from "react";
import "./Lyrics.css";
import { useState, useEffect } from 'react';

const Lyrics = ({ currentTime }) => {
  const lyrics = [
    {
      timestamp: 0,
      content: "",
    },
    {
      timestamp: 0,
      content: "",
    },
    {
      timestamp: 1,
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
      timestamp: 40,
      content: "Tinged with the color transparent",
    },
    {
      timestamp: 43,
      content: "Our achromatic bodies, dancing to the beat",
    },
    {
      timestamp: 48,
      content: "In the portrait, I pictured us so",
    },
    {
      timestamp: 1 * 60 + 10,
      content: "The ultramarine lurking in my memories",
    },
    {
      timestamp: 1 * 60 + 15,
      content: "Keeps fading for another year",
    },
    {
      timestamp: 1 * 60 + 18,
      content: "At the edge of the sea",
    },
    {
      timestamp: 1 * 60 + 21,
      content: "Your solemn hands, gone vanished once again",
    },
    {
      timestamp: 1 * 60 + 26,
      content: "Flowers are meaningless",
    },
    {
      timestamp: 1 * 60 + 29,
      content: "Sundered so fast, we danced through nothingness",
    },
    {
      timestamp: 1 * 60 + 35,
      content: "Under the moonlight",
    },
    {
      timestamp: 1 * 60 + 38,
      content: "I'm drawing my remaining howls",
    },
    {
      timestamp: 2 * 60,
      content: "For so long, in awe of sun-kissed cheeks",
    },
    {
      timestamp: 2 * 60 + 5,
      content: "Now the waves had come to the shore",
    },
    {
      timestamp: 2 * 60 + 9,
      content: "The gap of ours, a bridge between two lands separate",
    },
    {
      timestamp: 2 * 60 + 14,
      content: "In the portrait, I pictured us so",
    },
    {
      timestamp: 2 * 60 + 18,
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
      timestamp: 2 * 60 + 30,
      content: "Your solemn hands gone vanished forever",
    },
    {
      timestamp: 2 * 60 + 35,
      content: "Colors are of no need",
    },
    {
      timestamp: 2 * 60 + 37,
      content: "On this seabed, only sorrow retained",
    },
    {
      timestamp: 2 * 60 + 43,
      content: "Under the moonlight",
    },
    {
      timestamp: 2 * 60 + 46,
      content: "Wolves started to howl at the night",
    },
    {
      timestamp: 3 * 60 + 38,
      content: "Oh",
    },
    {
      timestamp: 3 * 60 + 50,
      content: "",
    },
    {
      timestamp: 4 * 60,
      content: "",
    },
  ];

  // const Lyrics = () => {

  // const [change, setChange] = useState(0);

  // const timer = setInterval(() => {
  //   setChange(change+1);
  // }, 500)

  var FLyric = document.querySelector("#flyric");
  var CLyric = document.querySelector("#clyric");
  var LLyric = document.querySelector("#llyric");
  // useEffect(() => {
  //   if (!FLyric) FLyric = document.querySelector("#flyric");
  //   // FLyric.forceUpdate();
  //   if (!CLyric) CLyric = document.querySelector("#clyric");
  //   // CLyric.forceUpdate();
  //   if (!LLyric) LLyric = document.querySelector("#llyric");
  //   // LLyric.forceUpdate();
  // }, [change]);

  var fLyric = "",
    cLyric = "",
    lLyric = "";

  const timer = setInterval(() => {
    let currentTimestampId = 0;
    for (let i = lyrics.length - 1; i >= 1; i--) {
      if (currentTime >= lyrics[i].timestamp) {
        currentTimestampId = i;
        break;
      }
    }
    fLyric = lyrics[currentTimestampId - 1].content;
    cLyric = lyrics[currentTimestampId].content;
    lLyric = lyrics[currentTimestampId + 1].content;

    if (!FLyric) FLyric = document.querySelector("#flyric");
    FLyric.textContent=fLyric;
    if (!CLyric) CLyric = document.querySelector("#clyric");
    CLyric.textContent=cLyric;
    if (!LLyric) LLyric = document.querySelector("#llyric");
    LLyric.textContent=lLyric;
  }, 500);

  return (
    <div className="lyrics-container">
      <div className="lyrics">
        <div className="lyric prev-lyric">
          <div className="lyric-cover-prev" id="flyric"></div>
          {/* Lyrics go hereeeeeeeeeeeee boi */}
          {fLyric}
        </div>
        {/* <div className="lyric prev-lyric">Lyrics go here</div> */}
        <div className="lyric current-lyric" id="clyric">
          {/* Lyrics go here */}
          {cLyric}
        </div>
        {/* <div className="lyric next-lyric">Lyrics go here</div> */}
        <div className="lyric next-lyric" id="llyric">
          <div className="lyric-cover-next"></div>
          {/* Lyrics go here */}
          {lLyric}
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
