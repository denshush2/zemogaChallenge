import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

const PapaLikes = () => {
  return (
    <div className="papa-likes">
      <div className="like">
        <FontAwesomeIcon icon={faThumbsUp} />
      </div>
      <div className="dislike">
        <FontAwesomeIcon flip="horizontal" icon={faThumbsDown} />
      </div>
    </div>
  );
};

export default PapaLikes;
