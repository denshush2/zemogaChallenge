import React from "react";

import "./style.scss";
import { text, button } from "./constants";

const submitName = () => {
  return (
    <div className="submit-name">
      <div className="bg"></div>
      <h2>{text}</h2>
      <button>{button}</button>
    </div>
  );
};

export default submitName;
