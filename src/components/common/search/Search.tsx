import { FormEvent, SyntheticEvent, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import classes from "./search.module.css";
import { SearchProps } from "./types/search-props";
import ISearchResults from "./types/interfaces";
import ErrorBoundary from "../../../error-boundary/ErrorBoundary";

const Search = ({
  setIsSearchOptionSelected,
  setChosenResult,
}: SearchProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isSearchMade, setIsSearchMade] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<ISearchResults[]>([]);

  const handleSearch = async (e: FormEvent, value: string) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    try {
      const response = await fetch(
        `http://localhost/v1/search?query=${value}&skip=0&limit=10`
      );

      const jsonResults = await response.json();
      setIsSearchMade(true);
      setSearchResults(jsonResults.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e: SyntheticEvent, result: ISearchResults) => {
    e.preventDefault();
    setChosenResult(result);
    setIsSearchOptionSelected(true);
    setIsSearchMade(false);
  };

  return (
    <form autoComplete="off" onSubmit={(e) => handleSearch(e, inputValue)}>
      <div className={classes.searchContainer}>
        <TextField
          className={classes.searchBar}
          placeholder="Search all our platform for what you need"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button id={classes.button1} variant="contained" type="submit">
                  <SearchIcon className={classes.searchIcon} />
                  Search
                </Button>
              </InputAdornment>
            ),
          }}
          onFocus={() => setIsSearchMade(false)}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />

        <div className={classes.dropdown}>
          {searchResults.length > 0 && isSearchMade
            ? searchResults.map((result) => (
                <button
                  onClick={(e) => handleClick(e, result)}
                  key={result.id}
                  className={classes.dropdownOption}>
                  {result.title}
                </button>
              ))
            : null}
          {searchResults.length === 0 && isSearchMade && inputValue ? (
            <div className={classes.dropdownOption}>No results</div>
          ) : null}
        </div>
      </div>
    </form>
  );
};

export default Search;
