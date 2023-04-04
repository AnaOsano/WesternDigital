import React from "react";
import { makeStyles } from "@material-ui/core";
import Logo from "../../../assets/brandImages/Logo";
import Dropdown from "../../../assets/brandImages/Dropdown";
import AvatarIcon from "../../../assets/brandImages/AvatarIcon";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    display: "flex",
    height: 57,
    justifyContent: "space-between",
    backgroundColor: "black",
    paddingLeft: "30px",
  },
  textStyle: {
    width: "100%",
    height: 57,
    borderRadius: 0,
    display: "flex",
    mardinLeft: "30px",
    alignItems: "center",
    backgroundColor: "black",
    gap: "30px",
  },
  centerContent: {
    display: "flex",
    width: "100%",
  },
  // infoWrapper: {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   width: 904,
  //   [theme.breakpoints.down("md")]: {
  //     minWidth: 360,
  //     paddingRight: 10,
  //   },
  // },
  brandImage: {
    width: 165,
    height: 40,
    objectFit: "cover",
  },
  info: {
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: "40px",
    fontSize: "16px",
    fontWeight: "400",

    textAlign: "center",
  },
  info2: {
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginLeft: "850px",
  },
  logoStyle: {
    marginTop: "5px",
  },
  info3: {
    color: "white",
    margin: "0px",
    alignItems: "center",
    gap: "40px",
    fontSize: "16px",
    fontWeight: "400",

    textAlign: "center",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div className={classes.textStyle}>
        {/* <AvatarIcon></AvatarIcon> */}
        {/* <div className={classes.infoWrapper}> */}
        <div className={classes.logoStyle}>
          <Logo></Logo>
        </div>
        <p className={classes.info3}> | People Knowledge Base</p>
        {/* <div className={classes.info}>
          <p>Jobs & Opportunities</p>
          <p>Articles</p>
          <p>Compensation & Benefits</p>
          <p>FAQ</p>
        </div> */}
        <div className={classes.info2}>
          <AvatarIcon></AvatarIcon>
          <p className={classes.info}>Jane Doe</p>
          <Dropdown></Dropdown>
        </div>
        {/* </div> */}
      </div>
    </header>
  );
}
