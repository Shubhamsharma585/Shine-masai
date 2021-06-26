import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdvanceSearch from "./AdvanceSearch";
import CoolPlaces from "./CoolPlaces";
import Course from "./Course";
import Footer from "./Footer";
import GetJob from "./GetJob";
import styles from "./home.module.css";
import Premium from "./Premium";
import Resume from "./Resume";
import TotalCompany from "./TotalCompany";
import Why from "./Why";

function Home() {
  const [isAuth, setIsAuth] = useState(false);
  const newAuth = useSelector((state) => state.logi.isauth);

  return (
    <div className={styles.home}>
      <div className={styles.a1background}>
        {isAuth ? (
          <AdvanceSearch setIsAuth={setIsAuth} />
        ) : (
          <>
            <div>
              <h1 className={styles.ah1}>Growth on your mind?</h1>
              <h2 className={styles.ah2}>Explore 300,000+ jobs</h2>
              <button
                onClick={() => {
                  setIsAuth(true);
                }}
                className={styles.searchButton}
              >
                Job title,skills <div style={{ marginLeft: "550px" }}></div>
              </button>
            </div>
            {!newAuth && (
              <div className={styles.a2background}>
                <Link style={{ textDecoration: "none" }} to="/registration">
                  <button className={styles.regButton}>
                    Register for free
                  </button>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/myshine/login">
                  {" "}
                  <div className={styles.signinp}>
                    <p>Sign in</p>
                  </div>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
      <CoolPlaces />
      <TotalCompany />
      <div style={{ marginTop: "45px", marginBottom: "35px" }}>
        <button
          style={{
            fontSize: "400",
            color: "#5364c4",
            border: "1px solid #5364c4 ",
            textAlign: "center",
            borderRadius: "4px",
            boxShadow: "0px 4px 4px 0px rgb(0 0 0 / 20%)",
            width: "235px",
            height: "30px",
            backgroundColor: "#fff",
            marginTop: "35px",
          }}
        >
          View all top Companies
        </button>
      </div>

      <div>
        <img
          style={{ width: "970px", height: "250px", marginBottom: "80px" }}
          src="https://static1.shine.com/c/s1/images/candidate/new/ad_banner_new.png"
          alt="company banner"
        />
      </div>

      <Why />

      <Premium />

      <GetJob />

      <Resume />

      <Course />

      <Footer />
    </div>
  );
}

export default Home;
