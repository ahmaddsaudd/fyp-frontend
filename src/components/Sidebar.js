import React from "react";

import "../App.css";
import './style.css';

function Sidebar() {
  return (
    <div className="bg-white sidebar p-2">
      
  
      <div className="list-group list-group-flush">
        <div className="form-check form-switch custom-switch">
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            <span>Button#01</span>
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
        <hr className="text-dark" />
        <div className="form-check form-switch custom-switch">
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            <span>Button#02</span>
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
        <hr className="text-dark" />
        <div className="form-check form-switch custom-switch">
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            <span>Button#03</span>
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
        <hr className="text-dark" />
        <div className="form-check form-switch custom-switch">
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            <span>Button#04</span>
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
