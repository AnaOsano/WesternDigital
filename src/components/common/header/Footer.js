// import React from "react";
// import { makeStyles, Paper } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     display: "flex",
//     height: 450,
//     justifyContent: "space-between",
//   },
//   textStyle: {
//     width: "1440px",
//     lineHeight: "90px",
//     height: 450,
//     borderRadius: 0,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "black",
//   },

//   infoWrapper: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     [theme.breakpoints.down("md")]: {
//       minWidth: 360,
//       paddingRight: 10,
//     },
//   },
//   brandImage: {
//     width: 165,
//     height: 40,
//     objectFit: "cover",
//   },
//   info: {
//     color: "white",
//     display: "flex",
//     alignItems: "center",
//     gap: "40px",
//     fontSize: "16px",
//     fontWeight: "400",

//     textAlign: "center",
//   },
//   info2: {
//     color: "white",
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//   },
//   pStyle:{
// color:"white",
//   },
// }));

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
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    width: "1440px",
    lineHeight: "90px",
    height: 450,
    borderRadius: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    marginTop: "1051px",
  },
  row: { color: "white" },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
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
