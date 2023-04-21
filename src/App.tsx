import { useState } from "react";
import Header from "./components/common/header";
import classes from "./app.module.css";
import Banner from "./components/common/banner";
import Accordion from "./components/common/aside-accordion";
import ImportantQuestions from "./components/common/important-questions";
import Footer from "./components/common/footer";
import Readings from "./components/common/readings";
import SearchResultsComponent from "./components/common/search/SearchResultsComponent";
import ISearchResults from "./components/common/search/types/interfaces";

const App = () => {
  const [isSearchOptionSelected, setIsSearchOptionSelected] =
    useState<boolean>(false);
  const [chosenResult, setChosenResult] = useState<ISearchResults>({
    title: "",
    content: "",
    id: 0,
  });
  return (
    <div className="app">
      <Header />
      <Banner
        setIsSearchOptionSelected={setIsSearchOptionSelected}
        setChosenResult={setChosenResult}
      />
      <div className={classes.wrapper}>
        <Accordion />
        {isSearchOptionSelected ? (
          <SearchResultsComponent chosenResult={chosenResult} />
        ) : (
          <ImportantQuestions />
        )}
        <Readings />
      </div>
      <Footer />
    </div>
  );
};

export default App;
