import React from "react";
import "./style.css";
import logo from "./logo.png";
function Nav({ onDropdownChange }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid d-flex align-items-center">
        <div>
          <img
            className="brand-name mx-2 my-2 fs-4"
            src={logo}
            alt="company logo"
            height={80}
            width={100}
          />
        </div>
        <div className="live-indicator d-flex align-items-center">
          <div className="red-light"></div>
          <span className="live-text mx-2">Live</span>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select number of cards
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" onClick={() => onDropdownChange(1)}>1 Screen</button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => onDropdownChange(2)}>2 Screens</button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => onDropdownChange(3)}>3 Screens</button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => onDropdownChange(4)}>4 Screens</button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => onDropdownChange(5)}>5 Screens</button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => onDropdownChange(6)}>6 Screens</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;