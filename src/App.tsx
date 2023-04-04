import React from "react";
import Header from "./components/common/header/Header";
import "./App.css";
import Banner from "./components/common/header/Banner";
import Accordion from "./components/common/header/Accordion";
import ImportantQuestions from "./components/common/header/ImportantQuestions";
import Footer from "./components/common/header/Footer";
import Readings from "./components/common/header/Readings";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Header />

      <Banner />
      <div className={classes.wrapper}>
        <Accordion />
        <ImportantQuestions />
        <Readings />
      </div>
      <Footer />
    </div>
  );
}

export default App;
