import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

const VotesCard = values => {
  const mediaMatch = window.matchMedia("(min-width: 1200px)");
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  const style = {
    card: isRowBased => ({
      flex: isRowBased && "1 0 40%",
      width: "400px",
      height: "400px",

      // alignItems:"baseline",
      backgroundImage: `url(${values.card.url})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      color: "white",
      textShadow: "1px 1px 2px black",
      marginTop: "40px",
      marginRight: "20px"
    }),
    name: {
      fontWeight: "inherit"
    },
    like: {
      width: "20px",
      backgroundColor: "white"
    },
    iconLike: {
      padding: "5px",
      marginTop: "5px",
      marginRight: "5px",
      backgroundColor: "#00796b"
    },
    iconDislike: {
      padding: "5px",
      marginTop: "5px",
      marginRight: "5px",
      backgroundColor: "#fbc02d"
    },
    iconSection: {
      alignSelf: "center",
      float: "left"
    },
    info: {
      marginBottom: "10px"
    },
    content: {
      alignSelf: "flex-end",
      marginBottom: "40px"
    },
    buttonVote: {
      textShadow: "1px 1px 2px black",
      padding: "10px",
      color: "white",
      backgroundColor: "transparent"
    },
    likeThumb: {
      padding: "5px",
      backgroundColor: "#00796b",
      border: "2px solid white",
      marginRight: "5px"
    },
    dislikeThumb: {
      backgroundColor: "#fbc02d",
      padding: "5px",
      marginRight: "5px"
    },
    cardContend: {
      display: "flex",
      height: "90%"
    },
    likePercentage: {
      width: "100%",
      display: "flex",
      height: "10%"
    },
    cardLineLikes: {
      width: `${values.card.likes}%`,
      fontSize: "1.1em",
      backgroundColor: "#00796b",
      opacity: 0.9
    },
    cardLineDislikes: {
      textAlign: "right",
      width: `${100 - values.card.likes}%`,
      fontSize: "1.1em",
      backgroundColor: "#fbc02d",
      opacity: 0.9
    }
  };
  return (
    <div style={style.card(matches)}>
      <div style={style.cardContend}>
        <div style={style.iconSection}>
          <span
            style={values.card.isLiked ? style.iconLike : style.iconDislike}
          >
            {values.card.isLiked ? (
              <FontAwesomeIcon icon={faThumbsUp} />
            ) : (
              <FontAwesomeIcon flip="horizontal" icon={faThumbsDown} />
            )}
          </span>
        </div>

        <div style={style.content}>
          <h1 style={style.name}>{values.card.title}</h1>
          <span>
            <b>1 mounth ago </b>
            {values.card.subTitleSubject}
          </span>
          <p style={style.info}>{values.card.info}</p>
          <span></span>
          {values.card.hasLikes && (
            <>
              <span style={style.likeThumb}>
                <FontAwesomeIcon icon={faThumbsUp} />
              </span>
              <span style={style.dislikeThumb}>
                <FontAwesomeIcon flip="horizontal" icon={faThumbsDown} />
              </span>
            </>
          )}
          <button style={style.buttonVote}>{values.card.buttonText}</button>
        </div>
      </div>
      <div style={style.likePercentage}>
        <span style={style.cardLineLikes}>
          <FontAwesomeIcon size="2x" icon={faThumbsUp} /> {values.card.likes}%
        </span>
        <span style={style.cardLineDislikes}>
          {100 - values.card.likes}%
          <FontAwesomeIcon size="2x" flip="horizontal" icon={faThumbsDown} />
        </span>
      </div>
    </div>
  );
};

export default VotesCard;
