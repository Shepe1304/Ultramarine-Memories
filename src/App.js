import NameBar from "./components/NameBar";
import Hero from "./components/Hero";
// import Lyrics from "./components/Lyrics";
import Controls from "./components/Controls";
// import { useState, useEffect } from 'react';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NameBar />
      <Hero />
      {/* <Lyrics /> */}
      <Controls />
      <Footer />
    </div>
  );
}

export default App;
