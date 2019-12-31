import React from "react";

import { firstPart, secondPart, thirdPart } from "./contsants";
import "./style.scss";

const BeCounted = () => {
  return (
    <div className="be-counted">
      <div className="first">
        <div>{firstPart}</div>
        <div>
          <b>{secondPart}</b>
        </div>
      </div>
      <div className="second">{thirdPart}</div>
    </div>
  );
};

export default BeCounted;
