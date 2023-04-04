import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import SearchImg from "../../../assets/brandImages/SearchImg";

const useStyles = makeStyles(() => ({
  searchBar: {
    height: "56px",
    width: "702px",
    backgroundColor: "white",
    margin: "0px",
    position: "absolute",
    zIndex: 2,
  },
  wrapper: {
    height: "122px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
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
}));

export default function Search() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <SearchImg></SearchImg>
      <TextField
        className={classes.searchBar}
        placeholder="Search all our platform for what you need"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" className={classes.button}>
                <IconButton>
                  <SearchIcon className={classes.searchIcon} />
                </IconButton>
                Search
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
