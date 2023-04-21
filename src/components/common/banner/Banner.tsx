import { Button } from "@material-ui/core";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import classes from "./banner.module.css";
import Search from "../search/Search";
import { Dispatch } from "react";
import ISearchResults from "../search/types/interfaces";

type BannerProps = {
  setIsSearchOptionSelected: Dispatch<React.SetStateAction<boolean>>;
  setChosenResult: Dispatch<React.SetStateAction<ISearchResults>>;
};

const Banner: React.FC<BannerProps> = ({
  setIsSearchOptionSelected,
  setChosenResult,
}): JSX.Element => {
  return (
    <div className={classes.wrapper}>
      <Search
        setIsSearchOptionSelected={setIsSearchOptionSelected}
        setChosenResult={setChosenResult}
      />
      <p className={classes.title}>New Office Opening In San Diego</p>
      <div className={classes.iconWrapper}>
        <div className={classes.iconWrapper2}>
          <ArrowBackIosIcon
            sx={{ fontSize: "55px" }}
            id={classes.iconLeft}></ArrowBackIosIcon>
          <p className={classes.subtitle}>
            Find out all the details of our new office and our expansion plans
            for the next years.
          </p>
          <ArrowForwardIosIcon
            sx={{ fontSize: "55px" }}
            id={classes.iconRight}></ArrowForwardIosIcon>
        </div>
        <Button id={classes.button}>Know more</Button>
      </div>
    </div>
  );
};

export default Banner;
