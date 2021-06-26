import React from "react";
import styles from "./home.module.css";

function GetJob() {
  return (
    <div>
      <h2 style={{ fontSize: "1.9rem", color: "#303E4B", fontWeight: "700" }}>
        Get instant job alerts from top companies
      </h2>
      <p style={{ fontSize: "15px", color: "505E6B" }}>
        Be the first one to apply to jobs
      </p>

      <div>
        <div className={styles.GetJob1}></div>
        <div
          style={{
            float: "right",
            width: "700px",
            height: "402px",
            marginRight: "95px",
          }}
        >
          <div style={{ float: "left", marginTop: "65px" }}>
            <div className={styles.Mobile}>
              91
              <input type="text" placeholder="Mobile" />
            </div>
            <div style={{ float: "left", marginLeft: "15px" }}>
              <button
                style={{
                  width: "109px",
                  height: "45px",
                  borderRadius: "5px",
                  background: "#f7a400",
                  boxShadow: " 0px 4px 4px 0px rgb(0 0 0 / 20%)",
                  color: " #fff",
                  fontWeight: " 400",
                  border: "0 none",
                  fontSize: "16px",
                }}
              >
                Get App
              </button>
            </div>
            <div style={{ clear: "both" }}></div>
            <div
              style={{
                float: "left",
                fontSize: "12px",
                color: "#6D7883",
                marginTop: "35px",
              }}
            >
              <div style={{ float: "left", paddingTop: "5px" }}>
                <span style={{ float: "left", marginRight: "5px" }}>Rated</span>{" "}
                <div className={styles.rate}></div>{" "}
                <div className={styles.rate}></div>{" "}
                <div className={styles.rate}></div>{" "}
                <div className={styles.rate}></div>{" "}
                <div className={styles.halfrate}></div>
              </div>
              <div
                style={{ float: "left", marginLeft: "10px", paddingTop: "5px" }}
              >
                |{" "}
                <span style={{ color: "#303E4B", fontWeight: "bolder" }}>
                  10 million
                </span>{" "}
                downloads
              </div>
            </div>
            <div style={{ clear: "both" }}></div>
            <div style={{ float: "left", marginTop: "45px" }}>
              <div style={{ float: "left" }}>
                <button className={styles.storeButton}>
                  <div className={styles.play}></div>Google Play
                </button>
              </div>
              <div style={{ float: "left", marginLeft: "20px" }}>
                <button className={styles.storeButton}>
                  <div className={styles.store}></div>App Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetJob;
