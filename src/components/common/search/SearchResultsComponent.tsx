import ISearchResults from "./types/interfaces";
import Box from "@mui/material/Box";
import classes from "./search.module.css";

type SearchResultsComponentProps = {
  chosenResult: ISearchResults;
};

const SearchResultsComponent = ({
  chosenResult,
}: SearchResultsComponentProps) => {
  return (
    <div className={classes.resultsContainer}>
      <p className={classes.resultTitle}>{chosenResult.title}</p>
      <Box
        sx={{
          width: "100%",
          padding: "24px",
          backgroundColor: "#F2F3F3",
        }}>
        <p className={classes.resultContent}>{chosenResult.content}</p>
      </Box>
    </div>
  );
};

export default SearchResultsComponent;
