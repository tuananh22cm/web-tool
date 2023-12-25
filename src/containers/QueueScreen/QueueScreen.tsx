import React from "react";

const QueueScreen = () => {
  return (
    <div className="container">
      <h1>Queue Screen</h1>
      <div>
        <p> we are In progress ................</p>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default QueueScreen;
