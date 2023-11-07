  import React, { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import logo from "./logo.png";
  import bellIcon from "./bell.png"
  import "./home.css";

  const App = () => {
    const [cards, setCards] = useState([]);
    const [horizontalOffset, setHorizontalOffset] = useState(0);
    const [verticalOffset, setVerticalOffset] = useState(0);

    const createCard = () => {
      const newCard = (
        <div
          className="card"
          style={{
            width: "18rem",
            position: "absolute",
            top: `${300 + verticalOffset}px`,
            left: `${300 + horizontalOffset}px`,
            backgroundColor: "#C2D9FF",
            borderRadius: "20px",
          }}
          key={cards.length}
        >
          <div className="card-body">
            <h5
              className="card-title"
              contentEditable={true}
              style={{ border: "none", outline: "none" }}
            >
              Card title
            </h5>
            <div
              style={{
                maxHeight: "200px",
                overflow: "auto",
                padding: "0px",
                outline: "none"
              }}
            >
              <p
                className="card-text"
                contentEditable={true}
                style={{ border: "none", outline: "none" }}
              >
                Some quick example text to build on the card title and make up the
                bulk of the card's content. This text is editable and will scroll
                if it overflows the maximum height.
              </p>
            </div>
            <button type="button" className="btn btn-info me-2">
              {/* Replace "Due date" button with bell icon */}
              <img src={bellIcon} alt="Bell" style={{ width: "24px", height: "24px" }} />
            </button>
            <button type="button" className="btn btn-info ms-2">
              Priority
            </button>
          </div>
        </div>
      );

      setCards([...cards, newCard]);
      setHorizontalOffset(horizontalOffset + 400);

      if (horizontalOffset >= 1000) {
        setHorizontalOffset(0);
        setVerticalOffset(verticalOffset + 400);
      }
    };

    useEffect(() => {
      // Create the first card when the site loads
      createCard();
    }, []); // The empty dependency array ensures it runs once

    return (
      <div className="background-container" style={{ backgroundColor: "#1b1b1e" }}>
        <div className="app-container">
          <div className="top-navbar">
            <div
              className="logo"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img src={logo} alt="Logo" style={{ maxWidth: "70px" }} />
              <h3
                style={{
                  marginLeft: "10px",
                  fontFamily: "Croissant One",
                  fontSize: "30px",
                }}
              >
                Doer
              </h3>
            </div>
            <div className="welcome-bar" style={{ marginLeft: "50px" }}>
              <div className="welcome-container">
                <div className="welcome-message">Welcome back, user!</div>
              </div>
              <div
                className="btn-group d-flex"
                role="group"
                aria-label="Basic example"
                style={{ marginLeft: 0, textAlign: "left" }}
              >
                <button type="button" className="btn btn-secondary">
                  All tasks
                </button>
                <button type="button" className="btn btn-secondary">
                  Completed
                </button>
                <button type="button" className="btn btn-secondary">
                  Pending
                </button>
                <button type="button" className="btn btn-secondary">
                  In progress
                </button>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <button className="profile-button">
              <img
                src="profile-image.jpg"
                className="profile-image"
              />
              <span className="profile-text">Your Profile</span>
            </button>
            <Link to="/dashboard" className="sidebar-link">
              Dashboard
            </Link>
            <Link to="/calendar" className="sidebar-link">
              Calendar
            </Link>
            <Link to="/settings" className="sidebar-link">
              Settings
            </Link>
            <Link to="/" className="logout">
              Log Out
            </Link>
          </div>
        </div>
        <div className="notecard">
          {cards}
          <button className="add-button" onClick={createCard} style={{ fontSize: "80px", backgroundColor: "#1b1b1e", color: "#5c32f4" }}>
            +
          </button>
        </div>
      </div>
    );
  };

  export default App;
