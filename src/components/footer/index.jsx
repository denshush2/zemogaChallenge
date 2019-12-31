import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import "./style.scss";

import { footerLinks, followText } from "./constants";
const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="content">
        <ul className="links">
          {footerLinks.map(link => (
            <li key={link.name}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="social">
          <span>{followText}</span>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
