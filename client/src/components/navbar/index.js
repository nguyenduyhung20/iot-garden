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
import { Link, useNavigate } from "react-router-dom";

function Navbar({ onLogOut }) {
  const navigate = useNavigate();
  //Handle logout
  const handleLogOut = () => {
    onLogOut()
    navigate('/login')
  }

  const obj = [
    {
      heading: "HOME",
      link: "/dashboard",
      icon: faHome,
    },
    {
      heading: "CONTROLL",
      link: "/control",
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
            alt="Logo"
            className={classes["background"]}
          ></img>
        </div>
      </div>

      <ul className={classes["navbar__list"]}>
        {obj.map((item, idx) => (
          <li
            key={`navbar-item-${idx}`}
            className={`${classes["navbar__item"]} 
                     ${classes["navbar__item--actived"]}`}
          >
            <Link to={item.link} className={classes["navbar__item-link"]}>
              <FontAwesomeIcon
                className={classes["navbar__item-icon"]}
                icon={item.icon}
              />
              {item.heading}
            </Link>
          </li>
        ))}
        <li className={classes["end"]}>
          <div className={classes["navbar__item"]} onClick={handleLogOut}>
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

export default Navbar;
