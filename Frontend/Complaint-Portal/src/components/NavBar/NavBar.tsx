import { useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const getTitle = () => {
    switch (location.pathname) {
      case "/student":
        return "Complaint Portal";
      case "/worker":
        return "Worker Portal";
      default:
        return "Complaint Portal";
    }
  };

  return (
    <div className="nav-bar">
      <h1>{getTitle()}</h1>
    </div>
  );
};

export default NavBar;
