import React, { useState, useEffect } from "react";
import Header from "../components/common/header/Header";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 57px)",
    display: "flex",
    flex: 1,
    gap: 20,
    width: "100vw",
    maxWidth: 900,
    padding: "0 40px",
    background: theme.palette.background.main,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: "center",
    marginBottom: 20,
    [theme.breakpoints.down("lg")]: {
      height: "100%",
    },
    [theme.breakpoints.down("md")]: {
      padding: 20,
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 900,
    },
  },
  sideNav: {
    width: "31.12%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  content: {
    width: "66.66%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

function Layout() {
  const setMobileDevice = useState(false);

  function mobileDevices() {
    if (window.innerWidth < 600) {
      setMobileDevice(true);
    } else {
      setMobileDevice(false);
    }
  }

  useEffect(() => {
    mobileDevices();
    window.addEventListener("resize", mobileDevices);
    return () => {
      window.removeEventListener("resize", mobileDevices);
    };
    // eslint-disable-next-line
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.appWrapper}>
      <Header />
    </div>
  );
}

export default Layout;
