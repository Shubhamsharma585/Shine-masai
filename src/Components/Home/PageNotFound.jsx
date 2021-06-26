import React from "react";
import styles from "./home.module.css";

function PageNotFound() {
  return (
    <div style={{}}>
      <div style={{ background: "#0e0e0e", height: "99vh", margin: "auto" }}>
        <div style={{ margin: "auto", width: "675px" }}>
          <img
            className={styles.found}
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--yV2D4goT--/c_imagga_scale,f_auto,fl_progressive,h_420,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/3jqj2huybwagtla8ogad.gif"
            alt="404"
          />
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
