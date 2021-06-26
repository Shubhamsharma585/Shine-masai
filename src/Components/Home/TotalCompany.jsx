import React from "react";
import styles from "./home.module.css";

function TotalCompany() {
  const image = [
    "https://static2.shine.com/r/m/images/employerbranding/ab28f0af876f42cb96302faaea9e1671.png",
    "https://static2.shine.com/r/m/images/employerbranding/8ec12c71c03445248ec99942e16a812c.png",
    "https://static2.shine.com/r/m/images/employerbranding/5bce8f621d0946ad809145aac70fc3ae.png",
    "https://static2.shine.com/r/m/images/employerbranding/8b3d3868f9444657ad239ed43eb423b8.png",
    "https://static2.shine.com/r/m/images/employerbranding/c9e56f9bb48e4989853bf49e7b67dae3.png",
    "https://static2.shine.com/r/m/images/employerbranding/3312a542609b462fad0ba4ae351d5730.jpg",
    "https://static2.shine.com/r/m/images/employerbranding/9f53b7d4345d41ac9b657b726b6b3349.png",
    "https://static2.shine.com/r/m/images/employerbranding/da1f7501c8f740498dbb4b28fde081c2.png",
    "https://static2.shine.com/r/m/images/employerbranding/f85756b6a88e4997beaf87c6f1bb5cfd.png",
    "https://static2.shine.com/r/m/images/employerbranding/f548e2c309c24db1a8b9d4ff9d97b02e.png",
    "https://static2.shine.com/r/m/images/employerbranding/0d05cc5f036a4643ae5fa0a29a974326.png",
    "https://static2.shine.com/r/m/images/employerbranding/c969fd8c9049479ebf9133033e77df03.png",
    "https://static2.shine.com/r/m/images/employerbranding/6cf7d2611de84b7585d75db2f40e81b8.png",
    "https://static2.shine.com/r/m/images/employerbranding/b48b41afcd524c0b8a9e596cd945ad89.png",
    "https://static2.shine.com/r/m/images/employerbranding/3d1475db6ef84d5d98cbda15f16d4c5d.png",
  ];
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Top companies hiring now</h2>
      <div style={{ margin: "auto", marginBottom: "25px" }}>
        {image.map((el) => (
          <div key={el} className={styles.topBox}>
            <img src={el} alt="Companies logo" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TotalCompany;
