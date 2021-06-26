import React from "react";
import { Link } from "react-router-dom";

function JobList({ heading, list }) {
  return (
    <div>
      <div
        style={{
          width: "829px",
          margin: "10px 0px",
          backgroundColor: "#fff",
          border: "solid 1px #e7e7e7",
          padding: "10px",
          paddingBottom: "10px",
        }}
      >
        <div>
          <h1
            style={{
              color: "#375076",
              fontSize: "16px",
              fontFamily: "Roboto,Arial,Times,serif",
            }}
          >
            {heading}
          </h1>
        </div>
        <div>
          {list.map((li) => (
            <div style={{ float: "left", width: "33%", height: "18px" }}>
              {" "}
              <Link
                style={{
                  textDecoration: "none",
                  color: "#5364C4",
                  fontSize: "12px",
                  fontFamily: "Roboto,Arial,Times,serif",
                }}
                to={`/jobdescription/jobsearch/${li}`}
              >
                Jobs in {li}
              </Link>
            </div>
          ))}
          <div style={{ clear: "both" }}></div>
        </div>
      </div>
    </div>
  );
}

export default JobList;
