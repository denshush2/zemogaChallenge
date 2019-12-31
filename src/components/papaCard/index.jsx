import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";

import {
  anchorText as AnchorText,
  papaName as PapaName,
  questionText,
  subTitle as SubTitle,
  text
} from "./constants";
import "./style.scss";
import PapaLikes from "../papaLikes";

const PapaCard = () => {
  const [subTitle, setSubTitle] = useState(SubTitle);
  const [papaName, setPapaName] = useState(PapaName);
  const [question, setQuestion] = useState(questionText);
  const [anchorText, setAnchorText] = useState(AnchorText);
  const [mainText, setMainText] = useState(text);

  return (
    <div className="papa-card">
      <div className="content">
        <span>{subTitle}</span>
        <h1>{papaName}?</h1>
        <p>{mainText}</p>
        <a href="#">
          <FontAwesomeIcon icon={faWikipediaW} /> {anchorText}
        </a>
        <div className="question">
          <span>
            <b>{question}?</b>
          </span>
        </div>
      </div>
      <PapaLikes />
    </div>
  );
};

export default PapaCard;
