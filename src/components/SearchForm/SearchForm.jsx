import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/services/filterSlice";
import { selectFilter } from "../../redux/services/selectors";

const SearchForm = () => {
  const { filter } = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <form style={{ position: "relative" }}>
      <MagnifyingGlassIcon
        style={{
          width: "19px",
          color: "#8A8A8A",
          position: "absolute",
          top: "9px",
          left: "11px",
        }}
      />
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        style={{
          width: "196px",
          height: "36px",
          background: "#EAEAEA",
          borderRadius: "19.5px",
          border: "none",
          paddingLeft: "34px",
        }}
      ></input>
    </form>
  );
};
export default SearchForm;
