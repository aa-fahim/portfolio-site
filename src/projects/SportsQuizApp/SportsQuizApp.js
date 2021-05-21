import React from "react";

function SportsQuizApp() {
  return (
    <div className="posts">
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "-80px",
        }}
      >
        <h1 className="text-header">Sports Quiz Mobile App</h1>
        <p style={{ marginTop: "10px" }} className="text-paragraph">
          Currently in dev. Progress can be viewed by cloning the project repo
          from{" "}
          <a href="https://github.com/aa-fahim/SportsQuizApp" target="_blank">
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default SportsQuizApp;
