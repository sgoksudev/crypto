import React, { useContext } from "react";
import "./Navbar.css"; // Ensure Navbar.css exists in the correct path
import logo from "../assets/logo.png"; // Verify logo.png exists in the assets folder
import arrow_icon from "../assets/arrow_icon.png"; // Verify arrow_icon.png exists in the assets folder
import { CoinContext } from "../context/CoinContext"; // Ensure CoinContext is correctly exported from its file
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
        <button>
          Sign up
          <img src={arrow_icon} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
