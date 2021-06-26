import React from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "../JobDescription/Tabs.module.css";
import ReactTextCollapse from "react-text-collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcase,
  faMapMarkerAlt,
  faUsers,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const MainContainer = styled.div`
  min-width: 1000px;
  height: auto;
  padding: 5px;
  /* border: 1px solid black; */
  margin: auto;
`;

const CompanyCard = styled.div`
  width: 95%;
  height: auto;
  padding-top: 3%;
  border: 1px solid inherit;
  margin: auto;
  margin-top: 1%;
  background-image: linear-gradient(129deg, #99a1ed 0%, #b18ace 100%);
  border-radius: 10px;
  box-shadow: -8px 8px 16px #dedede, 8px -8px 16px #ffffff;
`;

const JobTitle = styled.strong`
  width: auto;
  height: auto;
  color: white;
  padding: 2%;
  font-size: 25px;
`;

const CompanyName = styled.p`
  width: 90%;
  height: auto;
  padding-left: 2%;
  color: white;
`;

const JobInfo = styled.div`
  width: auto;
  height: auto;
  padding-left: 2%;
  /* border: 1px solid; */
  display: flex;
`;

const ExperienceYr = styled.div`
  width: auto;
  height: 20px;
  /* border: 1px solid; */
  padding: 2px;
`;
const SalaryPerYr = styled.div`
  width: auto;
  height: 20px;
  /* border: 1px solid; */
  margin-left: 2%;
  padding: 2px;
`;

const JobLocation = styled.div`
  width: 400px;
  height: auto;
  /* border: 1px solid; */
  margin-left: 0.5%;
  padding: 2px;
`;

const ButtonBox = styled.div`
  width: auto;
  height: auto;
  padding-left: 2%;
  display: flex;
`;

const ApplyBtn = styled.button`
  padding: 10px;
  width: 8%;
  margin-top: 2%;
  margin-bottom: 2%;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: #fbb13b;
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

const StarBtn = styled.button`
  padding: 10px;
  width: 5%;
  margin-top: 2%;
  margin-left: 1.5%;
  margin-bottom: 2%;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;

const GetNoticed = styled.div`
  width: 100%;
  height: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #f4f8fd;
  color: #7d67d1;
`;

const Skills = styled.div`
  width: 96%;
  height: auto;
  border: 1px solid inherit;
  margin: auto;
  margin-top: 2%;
  border-radius: 10px;
  box-shadow: -8px 8px 16px #dedede, 8px -8px 16px #ffffff;
`;

const SkillsBody = styled.div`
  width: 96%;
  height: auto;
  /* border: 1px solid; */
  margin: auto;
  margin-top: 1%;
  padding: 5px;
`;

const SkillsDiv = styled.div`
  width: auto;
  padding: 5px;
  height: auto;
  padding: 5px 2px;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-right: 1%;
  font-size: 14px;
  text-align: center;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;
  border-radius: 5px;
`;

const TakeAsses = styled.button`
  width: auto;
  height: 40px;
  border: 1px solid #a8ceff;
  margin-bottom: 1%;
  text-align: left;
  padding: 5px;
  background-color: #e2f0fb;
  color: #594d85;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: -7px 7px 14px #9bbeeb;
  cursor: pointer;
`;

const SelectTabs = styled.div`
  width: 96%;
  height: auto;
  margin: auto;
  border: 1px solid inherit;
  margin-top: 2%;
  margin-bottom: 5%;
  padding-bottom: 50px;
  border-radius: 10px;
  box-shadow: -8px 8px 16px #dedede, 8px -8px 16px #ffffff;
`;

const TabItems = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  margin-top: 2%;
  /* border: 1px solid; */
`;

const TabItemsTitle = styled.div`
  width: 30%;
  height: auto;
`;
const TabItemsInfo = styled.div`
  width: 60%;
  height: auto;
  margin-left: 2%;
`;

const CompanyShortInfo = styled.div`
  width: 80%;
  height: auto;
`;

const TEXT_COLLAPSE_OPTIONS = {
  collapse: false,
  collapseText: "... show more",
  expandText: "show less",
  minHeight: 70,
  maxHeight: 550,
  textStyle: {
    color: "blue",
    fontSize: "20px",
  },
};

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const JobDescription = ({ dis }) => {
  //Modal UI
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openRed, setOpenRed] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenRed = () => {
    setOpenRed(true);
  };

  const handleCloseRed = () => {
    setOpenRed(false);
  };

  const userData = useSelector((state) => state.logi.payload);
  const isAuth = useSelector((state) => state.logi.isauth);

  const handleGetUser = () => {
    if (!isAuth) {
      handleOpenRed();
    } else {
      postUser();
    }
  };

  const postUser = () => {
    axios
      .post("https://json-heroku-shubham.herokuapp.com/applications", {
        name: userData.name,
        call: false,
        interview_status: "red",
        gender: userData.personal.gender,
        dob: userData.personal.dob,
        email: userData.personal.email,
        phone: userData.personal.mobile,
        applied_company: dis.subtitle,
        applied_position: dis.title,
        location: userData.personal.location,
        experience: userData.worksummary.experience,
        qualification: userData.education.title,
        skills: userData.skills,
        comments: [],
      })
      .then(handleOpen());
  };

  return (
    <MainContainer>
      <CompanyCard>
        <JobTitle>{dis.title}</JobTitle>
        <CompanyName>{dis.subtitle}</CompanyName>
        <JobInfo>
          <ExperienceYr>
            <FontAwesomeIcon
              style={{ color: "white", marginRight: 10 }}
              icon={faBriefcase}
            />
            <span style={{ color: "white" }}>0 to {dis.experience} yrs</span>
          </ExperienceYr>
          <SalaryPerYr>
            <FontAwesomeIcon
              style={{ color: "white", marginRight: 10 }}
              icon={faWallet}
            />
            <span style={{ color: "white" }}>Rs {dis.salary} Lakhs/Yr</span>
          </SalaryPerYr>
          <FontAwesomeIcon
            style={{ color: "white", marginLeft: 10, marginRight: 10 }}
            icon={faMapMarkerAlt}
          />
          <JobLocation>
            <span style={{ color: "white" }}>{dis.location}</span>
          </JobLocation>
        </JobInfo>
        <ButtonBox>
          <ApplyBtn onClick={handleGetUser}>Apply</ApplyBtn>
          <StarBtn>
            <FontAwesomeIcon icon={faStar} />
          </StarBtn>
        </ButtonBox>
        <GetNoticed>
          <FontAwesomeIcon
            style={{ color: "purple", marginLeft: 20, marginRight: 10 }}
            icon={faUsers}
          />
          Get your job application noticed
        </GetNoticed>
      </CompanyCard>
      <Skills>
        <SkillsBody>
          <h4>Key skills</h4>

          <div style={{ display: "flex", flexDirection: "Wrap" }}>
            {dis.skills?.map((el) => (
              <SkillsDiv>{el}</SkillsDiv>
            ))}
          </div>

          <TakeAsses>
            <FontAwesomeIcon
              style={{ color: "purple", marginLeft: 10, marginRight: 10 }}
              icon={faClipboard}
            />
            Take Assessments to stand out to recruiters
          </TakeAsses>
        </SkillsBody>
      </Skills>

      <SelectTabs>
        <Tabs className={styles.tabs}>
          <TabList>
            <Tab>Job detail</Tab>
            <Tab>About company</Tab>
          </TabList>
          <TabPanel>
            <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
              <p>{dis.description}</p>
            </ReactTextCollapse>
          </TabPanel>
          <TabPanel>
            <CompanyShortInfo>
              <TabItems>
                <TabItemsTitle>
                  <strong>Company Name</strong>
                </TabItemsTitle>
                <TabItemsInfo>
                  <span>{dis.subtitle}</span>
                </TabItemsInfo>
              </TabItems>
              <TabItems>
                <TabItemsTitle>
                  <strong>Position Description</strong>
                </TabItemsTitle>
                <TabItemsInfo>
                  <span>{dis.title}</span>
                </TabItemsInfo>
              </TabItems>
              <TabItems>
                <TabItemsTitle>
                  <strong>Email</strong>
                </TabItemsTitle>
                <TabItemsInfo>
                  <span>{dis.email}</span>
                </TabItemsInfo>
              </TabItems>
              <TabItems>
                <TabItemsTitle>
                  <strong>Telephone</strong>
                </TabItemsTitle>
                <TabItemsInfo>
                  <span>{dis.telephone}</span>
                </TabItemsInfo>
              </TabItems>
            </CompanyShortInfo>
          </TabPanel>
        </Tabs>
      </SelectTabs>
      <div>
        <div onClick={handleOpen}></div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <p id="transition-modal-description">Applied Successfully..</p>
            </div>
          </Fade>
        </Modal>
      </div>
      <div>
        <div onClick={handleOpenRed}></div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openRed}
          onClose={handleCloseRed}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openRed}>
            <div className={classes.paper}>
              <p id="transition-modal-description">
                Please <Link to="/myshine/login">login</Link> to continue
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
    </MainContainer>
  );
};

export { JobDescription };
