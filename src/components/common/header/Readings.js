import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import Read1 from "../../../assets/brandImages/Read1";
import Read2 from "../../../assets/brandImages/Read2";
import Read3 from "../../../assets/brandImages/Read3";

const useStyles = makeStyles(() => ({
  wrapper: {
    width: "270px",
    backgroudColor: "gray",
    marginLeft: "85px",
  },
  info: {
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "0px",
  },
  button: {
    height: "44px",
    fontWeight: "500",
    width: "136px",
    backgroundColor: "white",
    borderRadius: "2px",
    padding: "10px",
    color: "black",
    textTransform: "capitalize",
    borderColor: "black",
  },
}));

export default function Readings() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <p className={classes.info}>Popular reads that may interest you</p>
      <Read1></Read1>
      <Read2></Read2>
      <Read3></Read3>
      <Read3></Read3>
      <Button variant="outlined" className={classes.button}>
        View More
      </Button>
    </div>
  );
}
