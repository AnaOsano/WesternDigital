import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div>
            <p>All rights reserved © 2023 &copy; {new Date().getFullYear()}</p>
          </div>
          <div>
            <ul>
              <div>
                <p>Privacy Policy</p>
              </div>
              <div>
                <p>Terms and Conditions</p>
              </div>
              <div>
                <p>Contact</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
