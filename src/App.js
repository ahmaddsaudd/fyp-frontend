import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import './App.css'; // Assuming you have the CSS in App.css
import './components/style.css';
import Home from "./components/Home";

function App() {
  const [cardCount, setCardCount] = useState(0);

  const handleDropdownChange = (value) => {
    setCardCount(value);
  }
  return (
    <div className="container-fluid bg-primary min-vh-100">
      <Nav onDropdownChange={handleDropdownChange}/>
      <div className="row mt-5 pt-5"> {/* Adjust the margin and padding as needed */}
        <div className="col-2 bg-white vh-100 sidebar-container">
          <Sidebar />
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <Home cardCount={cardCount}/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
