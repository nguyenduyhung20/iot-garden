import classes from "./navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import image from "./LOGO.png";
import {
  faArrowRightFromBracket,
  faUser,
  faHome,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

//import { Link } from "react-router-dom";

export default function () {
  const obj = [
    {
      heading: "HOME",
      link: "/dashboard",
      icon: faHome,
    },
    {
      heading: "CONTROLL",
      link: "/upload",
      icon: faMobile,
    },
    {
      heading: "CUSTOMER",
      link: "/users",
      icon: faUser,
    },
  ];

  return (
    <div className={classes["navbar"]}>
      <div className={classes["navbar__avt"]}>
        <div className={classes["avt"]}>
          <img
            src={image}
            alt="Ảnh nền"
            className={classes["background"]}
          ></img>
        </div>
      </div>

      <ul className={classes["navbar__list"]}>
        {obj.map((item, idx) => (
          <li
            key={idx}
            className={`${classes["navbar__item"]} 
                     ${classes["navbar__item--actived"]}`}
          >
            <div to={item.link} className={classes["navbar__item-link"]}>
              <FontAwesomeIcon
                className={classes["navbar__item-icon"]}
                icon={item.icon}
              />
              {item.heading}
            </div>
          </li>
        ))}
        <li className={classes["end"]}>
          <div className={classes["navbar__item"]}>
            <FontAwesomeIcon
              className={classes["navbar__item-icon"]}
              icon={faArrowRightFromBracket}
            />
            LOG OUT
          </div>
        </li>
      </ul>
    </div>
  );
}
