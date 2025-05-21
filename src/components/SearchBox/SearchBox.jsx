import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const searchFieldId = useId();
  const dispatch = useDispatch();
  const nameValue = useSelector(selectNameFilter);

  const handleSearsh = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <>
      <label className={css.label} htmlFor={searchFieldId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        name="search"
        value={nameValue}
        onChange={handleSearsh}
      ></input>
    </>
  );
};

export default SearchBox;
