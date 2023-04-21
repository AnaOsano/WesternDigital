import { Button } from "@material-ui/core";
import Read1 from "../../../assets/brandImages/Read1";
import Read2 from "../../../assets/brandImages/Read2";
import Read3 from "../../../assets/brandImages/Read3";
import classes from "./readings.module.css";

const Readings = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.info}>Popular reads that may interest you</p>
      <div className={classes.imagesContainer}>
        <Read1></Read1>
        <Read2></Read2>
        <Read3></Read3>
        <Read3></Read3>
        <Button variant="outlined" className={classes.button}>
          View More
        </Button>
      </div>
    </div>
  );
};

export default Readings;
