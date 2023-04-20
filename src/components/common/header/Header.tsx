import Logo from "../../../assets/brandImages/Logo";
import Dropdown from "../../../assets/brandImages/Dropdown";
import AvatarIcon from "../../../assets/brandImages/AvatarIcon";
import classes from "./header.module.css";

const Header = () => {
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
};

export default Header;
