import React from "react";
import "./style.scss";
import { cards } from "./constants";
import VoteCard from "../votesCard";

const Votes = () => {
  return (
    <div className="votes">
      <h1 className="votes-title">Votes</h1>
      <div className="votes-cards">
        {cards.map(card => (
          <VoteCard key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
};
export default Votes;
