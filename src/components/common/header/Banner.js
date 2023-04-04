import React from "react";

import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import City from "src/assets/brandImages/City.png";
// import City from "../../../assets/brandImages/City";
import styles from "./Banner.module.css";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(() => ({
  searchBar: {
    height: "56px",
    width: "702px",
    backgroundColor: "white",
    margin: "0px",
    marginTop: "54px",
    marginBottom: "40px",
  },
  button1: {
    height: "44px",
    width: "120px",
    backgroundColor: "#995DFF",
    borderRadius: "2px",
    padding: "10px",
    color: "white",
    textTransform: "capitalize",
  },
  searchIcon: {
    padding: "0px",
    color: "white",
  },
  title: {
    fontSize: "34px",
    fontWeight: "500",
    lineHeight: "29px",
    width: "555px",
    color: "white",
    margin: "0px",
  },
  subtitle: {
    fontSize: "22px",
    fontWeight: "400",
    width: "555px",
    color: "white",
  },
  button: {
    height: "44px",
    width: "136px",
    backgroundColor: "white",
    borderRadius: "2px",
    padding: "10px",
    color: "black",
    textTransform: "capitalize",
    marginBottom: "30px",
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  iconLeft: {
    color: "white",
    paddingRight: "49px",
  },
  iconRight: {
    color: "white",
    paddingLeft: "49px",
  },
  iconWrapper2: {
    display: "flex",
  },
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={styles.wrapper}>
      <TextField
        className={classes.searchBar}
        placeholder="Search all our platform for what you need"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" className={classes.button1}>
                <IconButton>
                  <SearchIcon className={classes.searchIcon} />
                </IconButton>
                Search
              </Button>
            </InputAdornment>
          ),
        }}
      />
      <p className={classes.title}>New Office Opening In San Diego</p>
      <div className={classes.iconWrapper}>
        <div className={classes.iconWrapper2}>
          <ArrowBackIosIcon
            sx={{ fontSize: "55px" }}
            className={classes.iconLeft}
          ></ArrowBackIosIcon>
          <p className={classes.subtitle}>
            Open Enrollment for your 2023/2024 benefits is on the way!
            Enrollment period begins on Monday, May 9 for the July 1, 2023 to
            June 30, 2024 plan year.
          </p>
          <ArrowForwardIosIcon
            sx={{ fontSize: "55px" }}
            className={classes.iconRight}
          ></ArrowForwardIosIcon>
        </div>
        <Button className={classes.button}>Know more</Button>
      </div>
    </div>
  );
}
