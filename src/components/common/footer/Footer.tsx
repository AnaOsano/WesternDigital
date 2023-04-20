import classes from "./footer.module.css";

// export default function Footer() {
//   const classes = useStyles();

//   return (
//     <header className={classes.root}>
//       <Paper className={classes.textStyle}>
// <div className={classes.pStyle}>
//   <p>Shopping</p>
//   <p>My account</p>
//   <p>Sign up for email</p>
//   <p>Product portfolio</p>
//   <p>Shopping FAQ</p>

// </div>
//       </Paper>
//     </header>
//   );
// }

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
