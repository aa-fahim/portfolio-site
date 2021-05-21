import React from "react";
import "../../App.css";

function ProductScanner() {
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
        <h1 className="text-header">Product Scanner Mobile App</h1>
        <p className="text-paragraph">
          This project can be viewed by cloning the repo from{" "}
          <a href="https://github.com/aa-fahim/LogEntryApp" target="_blank">
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default ProductScanner;
