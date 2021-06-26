import axios from "axios";
import React, { useEffect, useState } from "react";
import { JobDescription } from "../JobDescription/JobDescription";

import styles from "../JobDescription/Tabs.module.css";
import SearchBar from "./SearchBar";

function AdvancedComponent() {
  const [datar, setDatar] = useState([]);
  const [isLoading, setIsloading] = React.useState(false);
  const [data1, setData1] = useState({});
  const [data, setData] = useState([]);

  const [dis, setDis] = useState({});

  const parms = new URLSearchParams(window.location.search);

  const handleSubmit = () => {
    const requestParam = {
      method: "get",
      url: `https://json-heroku-shubham.herokuapp.com/jobDetails`,
    };
    axios(requestParam)
      .then((res) => {
        setDatar(res.data);
      })

      .catch((err) => console.log("err"));
  };
  const results = () => {
    const filterData = datar.filter((el) => {
      return (
        el.location === data1.location ||
        el.experience === Number(data1.experience) ||
        el.skills.includes(data1.title)
      );
    });
    setData(filterData);
  };

  console.log(data);

  const getData = (id) => {
    axios
      .get(`https://json-heroku-shubham.herokuapp.com/jobDetails/${id}`)
      .then((res) => {
        setDis(res.data);
      })
      .catch((err) => console.log("err"));
  };

  React.useEffect(() => {
    setDis(data[0]);
  }, [data]);
  React.useEffect(results, [datar]);
  useEffect(() => {
    let obj = {};
    for (var pair of parms.entries()) {
      obj[pair[0]] = pair[1];
    }
    setData1(obj);
    handleSubmit();
  }, []);

  console.log(data1);

  return (
    <div>
      <SearchBar />
      <div style={{ display: "flex" }}>
        {isLoading ? (
          <div className={styles.loadingBox}>
            <img
              src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
              className={styles.img}
              alt=""
            />
          </div>
        ) : (
          <div>
            <div className={styles.right1}>
              {data.map((el) => (
                <div
                  key={el.id}
                  onClick={() => getData(el.id)}
                  className={styles.box}
                  style={{ width: "300px", height: "100px", padding: "5px" }}
                >
                  <div>
                    <div className={styles.pre}></div>
                    <div
                      style={{
                        float: "left",
                        color: "#303E4B",
                        fontSize: "17px",
                        marginLeft: "5px",
                      }}
                    >
                      <h1
                        style={{
                          float: "left",
                          color: "#303E4B",
                          fontSize: "17px",
                        }}
                      >
                        {el.title}
                      </h1>
                    </div>
                    <div style={{ clear: "both" }}></div>
                    <span
                      style={{
                        color: "#505E6B",
                        fontSize: "14px",
                        float: "left",
                        marginLeft: "25px",
                      }}
                    >
                      {el.subTitle}
                    </span>
                    <div style={{ clear: "both" }}></div>
                    <span
                      style={{
                        color: "#505E6B",
                        fontSize: "14px",
                        float: "left",
                        marginLeft: "25px",
                      }}
                    >
                      <div className={styles.point}></div> 0 to {el.experience}
                      Yrs
                    </span>
                    <span
                      style={{
                        color: "#505E6B",
                        fontSize: "14px",
                        float: "left",
                        marginLeft: "25px",
                      }}
                    >
                      <div className={styles.point}></div> {el.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>{dis && <JobDescription dis={dis} />}</div>
      </div>
    </div>
  );
}

export default AdvancedComponent;
