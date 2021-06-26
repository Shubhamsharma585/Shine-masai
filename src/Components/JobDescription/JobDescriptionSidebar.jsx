import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import { JobDescription } from "./JobDescription";
import styles from "./Tabs.module.css";
import SearchBar from "../Home/SearchBar";

function JobDescriptionSidebar() {
  const [data, setData] = useState([]);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = useState(5);
  const [isLoading, setIsloading] = React.useState(false);
  const [dis, setDis] = useState({});

  const { location } = useParams();

  const handleSearch = () => {
    setIsloading(true);
    const requestParam = {
      method: "get",
      url: `https://json-heroku-shubham.herokuapp.com/jobDetails?location=${location}`,
      params: {
        limit: limit,
        page: page,
      },
    };
    axios(requestParam)
      .then((res) => {
        setData(res.data);

        setIsloading(false);
      })
      .catch((err) => console.log("err"));
  };

  const getData = (id) => {
    axios
      .get(`https://json-heroku-shubham.herokuapp.com/jobDetails/${id}`)
      .then((res) => {
        setDis(res.data);
      })
      .catch((err) => console.log("err"));
  };

  React.useEffect(handleSearch, [page, limit]);
  React.useEffect(() => {
    setDis(data[0]);
  }, [data, location]);

  return (
    <>
      <div>
        <SearchBar />
      </div>
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
          <div className={styles.right}>
            <div>
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
    </>
  );
}

export default JobDescriptionSidebar;
