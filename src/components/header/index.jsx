import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import "./style.scss";

const Header = () => {
  const [title, setTitle] = useState("Rule of Thumb.");
  const [menu, setMenu] = useState([
    { id: 1, name: "Past Trials", path: "#" },
    { id: 2, name: "How it Works", path: "#" },
    { id: 3, name: "Log in/Sign Up", path: "#" }
  ]);
  return (
    <>
      <header>
        <span className="title">{title}</span>
        <nav>
          <ul>
            {menu.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
            <li>
              <FontAwesomeIcon size="1x" icon={faSearchengin} />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
