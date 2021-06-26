import React from "react";
import styles from "./home.module.css";

function Course() {
  return (
    <div className={styles.course}>
      <div style={{ marginTop: "35px", padding: "125px" }}>
        <div className={styles.courselearning}></div>
        <h2
          style={{
            textAlign: "left",
            marginLeft: "-42px",
            color: "#fff",
            fontWeight: "600",
            fontSize: "30px",
          }}
        >
          Want to make your career future ready?
        </h2>
        <h3
          style={{
            textAlign: "left",
            marginLeft: "-42px",
            color: "#fff",
            fontSize: "20px",
            fontWeight: "500px",
          }}
        >
          Upgrade your skills, give your career a boost
        </h3>

        <button
          className={styles.learnbutton}
          style={{ marginLeft: "-1072px", textAlign: "center" }}
        >
          Explore courses
        </button>
      </div>
    </div>
  );
}

export default Course;
