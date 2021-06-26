import React from "react";
import styles from "./home.module.css";

function Resume() {
  return (
    <div>
      <div
        style={{
          color: "#212529",
          width: "100%",
          backgroundColor: "#F5F9FB",
          paddingTop: "35px",
          paddingBottom: "45px",
          marginTop: "480px",
        }}
      >
        <h2>Having trouble writing your resume?</h2>
        <div style={{ marginTop: "65px", width: "680px" }}>
          <div className={styles.resume}>
            <strong
              style={{
                color: "#5566C3",
                fontSize: "16px",
                fontWeight: "600",
                borderLeft: "solid 4px #d9e5f8",
                paddingLeft: "15px",
              }}
            >
              Resume Writing
            </strong>
            <em
              style={{
                marginTop: "10px",
                color: "#6d7883",
                fontSize: "14px",
                fontFamily: "normal",
                marginLeft: "15px",
              }}
            >
              Highlight right skills on resume to get noticed by recruiters and
              hired faster
            </em>
            <div style={{ marginTop: "5px" }}>
              <button className={styles.resumeButton}>Get expert help</button>
              <div className={styles.resumwriting}></div>
            </div>
          </div>
          <div className={styles.resume}>
            <strong
              style={{
                color: "#5566C3",
                fontSize: "16px",
                fontWeight: "600",
                borderLeft: "solid 4px #d9e5f8",
                paddingLeft: "15px",
              }}
            >
              Resume Builder
            </strong>
            <em
              style={{
                color: "#6d7883",
                fontSize: "14px",
                fontFamily: "normal",
                marginTop: "20px",
                marginLeft: "15px",
              }}
            >
              Build impressive resume instantly with ready to use templates
            </em>
            <div style={{ marginTop: "5px" }}>
              <button className={styles.resumeButton}>Build your resume</button>
              <div className={styles.resumwriting1}></div>
            </div>
          </div>
        </div>
        <div>
          <img
            style={{
              float: "right",
              marginTop: "-285px",
              marginRight: "145px",
            }}
            src="https://static1.shine.com/c/s1/images/candidate/new/resume_writing.png"
            alt="resume"
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;
