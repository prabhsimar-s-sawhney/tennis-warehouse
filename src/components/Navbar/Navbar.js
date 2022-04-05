import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/products'>Products</Link>
        <Search />
      </div>
    </>
  )
}

export default Navbar;