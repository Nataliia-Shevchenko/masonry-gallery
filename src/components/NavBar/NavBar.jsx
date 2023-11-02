import SearchForm from "../SearchForm/SearchForm";
import {
  BellIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const NavBar = () => {
  return (
    <div
      style={{
        // width:"100%",
        position: "sticky",
        display: "flex",
        justifyContent: "end",
        gap: "35px",
        marginBottom: "18px",
       paddingRight: "35px",
        paddingTop: "24px",
        paddingBottom: "11px",
        boxShadow: "0px 4px 8px 0px rgba(103, 102, 102, 0.25)",
      }}
    >
      <SearchForm />
      <HomeIcon style={{ width: "24px", color: "#8A8A8A" }} />
      <BellIcon style={{ width: "24px", color: "#8A8A8A" }} />
      <UserCircleIcon style={{ width: "24px", color: "#8A8A8A" }} />
    </div>
  );
};

export default NavBar;
