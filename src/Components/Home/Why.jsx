import React from "react";
import styles from "./home.module.css";

function Why() {
  return (
    <div>
      <h2>Why Shine</h2>
      <div style={{ display: "flex" }}>
        <div className={styles.why}>
          <div className={styles.whydiv1}></div>
          <strong>3.4 crores+</strong>
          <br />
          <p>Candidates</p>
        </div>
        <div className={styles.why}>
          <div className={styles.whydiv2}></div>
          <strong>300,000+</strong>
          <br />
          <p>Jobs</p>
        </div>
        <div className={styles.why}>
          <div className={styles.whydiv3}></div>
          <strong>15,000+</strong>
          <br />
          <p>Companies</p>
        </div>
      </div>
    </div>
  );
}

export default Why;
