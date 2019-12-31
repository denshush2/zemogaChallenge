import React from "react";

import "./App.scss";
import MainContainer from "./components/mainContainer";
import BeCounted from "./components/beCounted";
import Votes from "./components/votes";
import SubmitName from "./components/submitName";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <MainContainer />
      <div className="main-content">
        <BeCounted />
        <Votes />
      </div>
      <SubmitName />
      <Footer />
    </div>
  );
}

export default App;
