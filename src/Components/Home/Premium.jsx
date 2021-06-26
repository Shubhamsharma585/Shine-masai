import React from "react";
import styles from "./home.module.css";

function Premium() {
  return (
    <div className={styles.Premium}>
      <div style={{ float: "left", marginTop: "35px" }}>
        <div>
          <div className={styles.crown}>
            <div></div>
          </div>
          <div
            style={{
              color: "#ffb56a",
              fontSize: "30px",
              fontWeight: "600",
              lineHeight: "60px",
              float: "left",
            }}
          >
            Shine Premium
          </div>
        </div>
        <div style={{ clear: "both" }}></div>

        <div
          style={{
            fontSize: "28px",
            fontWeight: "600",
            padding: "10px 0 20px 0",
            textAlign: "left",
          }}
        >
          Fastrack your jon search with our premium services
        </div>
        <div style={{ clear: "both" }}></div>
        <div>
          <div style={{ float: "left", fontsize: "14px", marginRight: "10px" }}>
            <div className={styles.tick}></div>
            <span>Enhanced Profile</span>
          </div>
          <div style={{ float: "left", fontsize: "14px", marginRight: "10px" }}>
            <div className={styles.tick}></div>
            <span>10x higher visibility to recruters</span>
          </div>
          <div style={{ float: "left", fontsize: "14px", marginRight: "10px" }}>
            <div className={styles.tick}></div>
            <span>Insights on other applicants</span>
          </div>
          <div style={{ float: "left", fontsize: "14px", marginRight: "10px" }}>
            <div className={styles.tick}></div>
            <span>Interview Ready</span>
          </div>
        </div>
        <div style={{ clear: "both" }}></div>
        <div style={{ float: "left", marginTop: "25px" }}>
          <button className={styles.PremiumButton}>Get Shine Premium</button>
        </div>
      </div>

      <div className={styles.PremiumRight}></div>
    </div>
  );
}

export default Premium;
