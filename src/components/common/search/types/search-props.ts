import ISearchResults from "./interfaces";

export type SearchProps = {
  setIsSearchOptionSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setChosenResult: React.Dispatch<React.SetStateAction<ISearchResults>>;
};
