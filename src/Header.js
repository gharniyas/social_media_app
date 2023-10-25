import { useContext } from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import DataContext from "./context/DataContext";

const Header = ({ title }) => {
  const { width } = useContext(DataContext);

  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? (
        <FaLaptop />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaMobileAlt />
      )}
    </header>
  );
};

export default Header;
