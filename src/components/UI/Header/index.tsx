import React from "react";
import logo from "../../../assets/logo.svg";
import classes from "./index.module.css";

const Header: React.FC = () => {
  return (
    <header className={classes.appHeader}>
      <img src={logo} className={classes.appLogo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className={classes.appLink}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default Header;
