import React from "react";
import styles from "./home.module.css";

function CoolPlaces() {
  const work = [
    {
      img: "https://static2.shine.com/r/m/images/employerbranding/78f6785288bd42f181187b8de9dccafb.png",
      nam: "https://static2.shine.com/r/m/images/employerbranding/a7277bda1c874825b9831cafaf6f759d.png",
    },
    {
      img: "https://static2.shine.com/r/m/images/employerbranding/c250bee50f5b490aac4b63fe281ab79e.png",
      nam: "https://static2.shine.com/r/m/images/employerbranding/4ba34994bc414de7984c38c9cee86ebe.png",
    },
    {
      img: "https://static2.shine.com/r/m/images/employerbranding/608a7830f65e4ac4a70869e145c55c25.png",
      nam: "https://static2.shine.com/r/m/images/employerbranding/449660b6ea5c4aada2e211f4831cc945.png",
    },
    {
      img: "https://static2.shine.com/r/m/images/employerbranding/26c83ce6d9df4733a9bbc06d2e3b8f0e.png",
      nam: "https://static2.shine.com/r/m/images/employerbranding/4dfb695a95c847889217673f9b1c6b32.png",
    },
    {
      img: "https://static2.shine.com/r/m/images/employerbranding/d98a014b326648178fbb08eef46ac70e.png",
      nam: "https://static2.shine.com/r/m/images/employerbranding/6c23dfb3c9224480870c900b8dddf299.png",
    },
  ];
  return (
    <div>
      <h2>Cool places to work</h2>
      <div style={{ display: "flex" }}>
        {work.map((el) => (
          <div key={el.img} className={styles.coolBox}>
            <div>
              <img className={styles.coolBox} src={el.img} alt="company" />
            </div>
            <div>
              {" "}
              <img
                className={styles.coolSmallBox}
                src={el.nam}
                alt="company name"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoolPlaces;
