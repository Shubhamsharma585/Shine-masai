import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./home.module.css";
const payload = {
  title: "",
  location: "",
  experience: "",
};

function AdvanceSearch1({ setIsAuth }) {
  const [userData, setUserData] = React.useState(payload);
  const { title, location, experience } = userData;

  let parm = new URLSearchParams();
  let history = useHistory();

  const handleSubmit = () => {
    history.push("/advancesearch?" + parm.toString());
  };

  useEffect(() => {
    for (let key in userData) {
      if (userData[key]) {
        parm.set(key, userData[key]);
      }
    }
  }, [userData, parm]);

  const exp = [
    "Experience",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25+",
  ];
  const handleUserData = (e) => {
    const { value, name } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  console.log(userData);
  return (
    <div>
      <button
        style={{
          float: "right",
          backgroundColor: "transparent",
          border: "none",
          marginRight: "195px",
        }}
        onClick={() => {
          setIsAuth(false);
        }}
      >
        <div className={styles.cross}></div>
      </button>

      <div style={{ display: "flex", marginTop: "25px", marginLeft: "45px" }}>
        <div className={styles.searchInput}>
          <label></label>
          <input
            type="text"
            placeholder="Job title,skills"
            name="title"
            value={title}
            onChange={handleUserData}
          />
          <div
            style={{
              width: "50px",
              padding: "5px",
              textAlign: "center",
              fontSize: "10px",
              color: "#fff",
              backgroundColor: "#fa7185",
              borderRadius: "4px",
              marginTop: "-45px",
              marginLeft: "252px",
            }}
          >
            Required
          </div>
        </div>
        <div className={styles.searchInput} style={{ marginLeft: "15px" }}>
          <label></label>
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={handleUserData}
          />
        </div>
        <div
          className={styles.searchInput}
          style={{ marginLeft: "15px", paddingLeft: "15px" }}
        >
          <select
            className={styles.searchInput}
            style={{ color: "gray" }}
            name="experience"
            value={experience}
            onChange={handleUserData}
          >
            {exp.map((branch) => (
              <option key={branch} value={branch}>
                {branch} yrs
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            width: "109px",
            fontSize: "10px",
            color: "#cecece",
            marginLeft: "15px",
            textAlign: "center",
          }}
        >
          <button
            className={styles.searchInput}
            style={{
              marginBottom: "10px",
              width: "109px",
              textAlign: "center",
              backgroundColor: "#f7a400",
              color: "#fff",
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>{" "}
          Advanced search
        </div>
      </div>
    </div>
  );
}

export default AdvanceSearch1;
