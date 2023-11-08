import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./logo1.png";
import "./home.css";

const App = () => {
  const [cards, setCards] = useState([]);
  const [horizontalOffset, setHorizontalOffset] = useState(0);
  const [verticalOffset, setVerticalOffset] = useState(0);

  const createCard = () => {
    const addTask = (textarea) => {
      const taskList = document.querySelector(`#card-${cards.length} .task-list`);
      const newTask = document.createElement("li");
      newTask.innerHTML = `
        <input type="checkbox" class="circle-checkbox" />
        <textarea
          class="task-input"
          placeholder="New Task"
        ></textarea>
      `;
      newTask.className = "task-item"; // Add a class for styling

      taskList.appendChild(newTask);
      autoExpand(newTask.querySelector("textarea")); // Pass the textarea element to autoExpand
    };

    const autoExpand = (element) => {
      element.style.height = "auto";
      element.style.height = element.scrollHeight + "px";
    };

    const cardId = cards.length;

    const newCardWithButton = (
      <div
        className="card"
        style={{
          width: "24rem",
          height: "24rem",
          position: "absolute",
          top: `${300 + verticalOffset}px`,
          left: `${300 + horizontalOffset}px`,
          backgroundColor: "#8E8FFA",
          borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
        key={cardId}
        id={`card-${cardId}`}
      >
        <h5
          className="card-title"
          contentEditable={true}
          style={{
            border: "none",
            outline: "none",
            padding: "0.5rem",
          }}
        >
          Card title
        </h5>
        <div className="card-body" style={{ flex: 1, overflowY: "auto" }}>
          <ul className="task-list">
            <li>
              <input type="checkbox" className="circle-checkbox" />
              <textarea
                className="task-input"
                placeholder="Task 1"
              ></textarea>
            </li>
            <li>
              <input type="checkbox" className="circle-checkbox" />
              <textarea
                className="task-input"
                placeholder="Task 2"
              ></textarea>
            </li>
            <li>
              <input type="checkbox" className="circle-checkbox" />
              <textarea
                className="task-input"
                placeholder="Task 3"
              ></textarea>
            </li>
          </ul>
        </div>
        <button className="add-task-button" onClick={() => addTask(newCardWithButton)}>
          Add task
        </button>
      </div>
    );

    setCards([...cards, newCardWithButton]);
    setHorizontalOffset(horizontalOffset + 500);

    if (horizontalOffset >= 1000) {
      setHorizontalOffset(0);
      setVerticalOffset(verticalOffset + 500);
    }
  };

  useEffect(() => {
    createCard();
  }, []);

  return (
    <div className="background-container" style={{ backgroundColor: "#1b1b1e" }}>
      <div className="app-container">
        <div className="top-navbar">
          <div className="logo" style={{ display: "flex", alignItems: "center" }}>
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
            <img src="profile-image.jpg" className="profile-image" />
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
      <div className="notecard" style={{ overflow: "auto", height: "100%" }}>
        {cards}
        <button
          className="add-button"
          onClick={createCard}
          style={{ fontSize: "80px", backgroundColor: "#1b1b1e", color: "#5c32f4" }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;