import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "redux/contacts/contactsSlice";
import { getFilter } from "redux/contacts/selectors";

import s from "./Filter.module.css";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.filter}>
      Find
      <input
        type="text"
        value={value}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
        className={s.filter__input}
        placeholder="Enter name..."
      ></input>
    </label>
  );
};

export default Filter;
