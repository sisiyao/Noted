export const SearchConstants = {
  EXIT_SEARCH: "EXIT_SEARCH",
  ENTER_SEARCH: "ENTER_SEARCH"
};

export const exitSearch = () => ({
  type: SearchConstants.EXIT_SEARCH
});

export const enterSearch = () => ({
  type: SearchConstants.ENTER_SEARCH
});
