import React from 'react'
import styled from "styled-components"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import styles from "../JobDescription/Tabs.module.css"
import ReactTextCollapse from 'react-text-collapse' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faStar, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBriefcase, faMapMarkerAlt, faUsers, faWallet } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom"


const MainContainer = styled.div`
    width: 99%;
    height: auto;
    padding: 5px;
    /* border: 1px solid black; */
    margin: auto;
`

const CompanyCard = styled.div`
    width: 95%;
    height: auto;
    padding-top: 3%;
    border: 1px solid inherit;
    margin: auto;
    margin-top: 1%;
    background-image: linear-gradient(129deg, #99a1ed 0%, #b18ace 100%);
    border-radius: 10px;
    box-shadow: -8px 8px 16px #dedede,
                8px -8px 16px #ffffff;
`

const JobTitle = styled.strong`
    width: auto;
    height: auto;
    color: white;
    padding: 2%;
    font-size: 25px;
`

const CompanyName = styled.p`
    width: 90%;
    height: auto;
    padding-left: 2%;

`

const JobInfo = styled.div`
    width: auto;
    height: auto;
    padding-left: 2%;
    /* border: 1px solid; */
    display: flex;
`

const ExperienceYr = styled.div`
    width: auto;    
    height: 20px;
    /* border: 1px solid; */
    padding: 2px;
`
const SalaryPerYr = styled.div`
    width: auto;    
    height: 20px;
    /* border: 1px solid; */
    margin-left: 2%;
    padding: 2px;
`

const JobLocation = styled.div`
    width: 400px;    
    height: auto;
    /* border: 1px solid; */
    margin-left: 0.5%;
    padding: 2px;
`

const ButtonBox = styled.div`
    width: auto;
    height: auto;
    padding-left: 2%;
    display: flex;
`

const ApplyBtn = styled.button`
    padding: 10px;
    width: 8%;
    margin-top: 2%;
    margin-bottom: 2%;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    background-color: #FBB13B;
    color: white;
    font-size: 15px;
    font-weight: bold;
`

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
`

const GetNoticed = styled.div`
    width: 100%;
    height: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #F4F8FD;
    color: #7D67D1;
`

const Skills = styled.div`
    width: 96%;    
    height: auto;
    border: 1px solid inherit;
    margin: auto;
    margin-top: 2%;
    border-radius: 10px;
    box-shadow: -8px 8px 16px #dedede,
                8px -8px 16px #ffffff;
`   

const SkillsBody = styled.div`
    width: 96%;    
    height: auto;
    /* border: 1px solid; */
    margin: auto;
    margin-top: 1%;
    padding: 5px;
`

const SkillsDiv = styled.div`
    width: auto;
    max-width: 10%;
    height: auto;
    padding: 5px 2px;
    margin-top: 1%;
    margin-bottom: 1%;
    margin-right: 1%;
    text-align: center;
    border: 1px solid #e0e0e0;
    background-color: #FAFAFA;
    border-radius: 5px;
`

const TakeAsses = styled.button`
    width: auto;
    height: 40px;
    border: 1px solid #a8ceff;
    margin-bottom: 1%;
    text-align: left;
    padding: 5px;
    background-color: #E2F0FB;
    color: #594d85;
    font-weight: bold;
    border-radius: 5px;
    box-shadow:  -7px 7px 14px #9bbeeb;
    cursor: pointer;     
`

const SelectTabs = styled.div`
    width: 96%;    
    height: auto;
    margin: auto;
    border: 1px solid inherit;
    margin-top: 2%;
    margin-bottom: 5%;
    padding-bottom: 50px;
    border-radius: 10px;
    box-shadow: -8px 8px 16px #dedede,
                8px -8px 16px #ffffff;
`

const TabItems = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    margin-top: 2%;
    /* border: 1px solid; */
`

const TabItemsTitle = styled.div`
    width: 30%;
    height: auto;
`
const TabItemsInfo = styled.div`
    width: 60%;
    height: auto;
    margin-left: 2%;
`

const CompanyShortInfo = styled.div`
    width: 80%;
    height: auto;
`

const TEXT_COLLAPSE_OPTIONS = {
    collapse: false,
    collapseText: '... show more',
    expandText: 'show less',
    minHeight: 70,
    maxHeight: 550,
    textStyle: {
      color: 'blue',
      fontSize: '20px'
    }
}

const JobDescription = ({dis}) => {

    const isAuth = useSelector((state)=> state.logi.isauth)

    const handleGetUser = () => {
        !isAuth ? alert("Login") : console.log("data")
    }

    return (
        <div className={styles.right} style={{height:"80vh",position:'sticky',top:"0",overflow:"auto",overflow:"scroll"}}>
        <MainContainer >
            <CompanyCard>
                <JobTitle>
                    {dis.title}
                </JobTitle>
                <CompanyName>
                    {dis.subTitle}
                </CompanyName>
                <JobInfo>
                    <ExperienceYr>
                        <FontAwesomeIcon style={{color:"white", marginRight: 10}} icon={faBriefcase} />
                        <span>0 to {dis.Experience} yrs</span>
                    </ExperienceYr>
                    <SalaryPerYr>
                        <FontAwesomeIcon style={{color:"white", marginRight: 10}} icon={faWallet} />
                        <span>Rs 10 - 12 Lakhs/Yr</span>
                    </SalaryPerYr>
                    <FontAwesomeIcon style={{color:"white",marginLeft: 10, marginRight: 10}} icon={faMapMarkerAlt} />
                    <JobLocation>
                        <span>{dis.location}
                        </span>
                    </JobLocation>
                </JobInfo>
                <ButtonBox>
                    <ApplyBtn onClick={handleGetUser}>Apply</ApplyBtn>
                    <StarBtn><FontAwesomeIcon icon={faStar} /></StarBtn>      
                </ButtonBox>
                <GetNoticed>
                    <FontAwesomeIcon style={{color:"purple",marginLeft: 20, marginRight: 10}} icon={faUsers} />
                    Get your job application noticed
                </GetNoticed>
            </CompanyCard>
            <Skills>
                <SkillsBody>
                    <h4>Key skills</h4>
                    <SkillsDiv>{dis.skills}</SkillsDiv>
                    <TakeAsses>
                        <FontAwesomeIcon style={{color:"purple",marginLeft: 10, marginRight: 10}} icon={faClipboard} />
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a elit volutpat, tristique purus ut, facilisis magna. In sed lorem bibendum, ultrices ipsum id, placerat est. Fusce justo ex, pharetra in faucibus nec, convallis at nunc. Donec non ullamcorper erat. Duis a pulvinar odio, ut commodo magna. Quisque tellus ligula, aliquam id orci sit amet, elementum lacinia lectus. Cras vel sodales magna, et imperdiet ipsum. Morbi venenatis scelerisque feugiat.

Morbi vehicula tempus metus a ullamcorper. Nam venenatis metus vitae neque vestibulum pellentesque. Vivamus in pretium est. Vivamus a pellentesque mi, fringilla finibus urna. Aliquam quam urna, lacinia at lobortis nec, convallis in purus. Curabitur feugiat risus tristique nulla convallis, ac viverra eros vestibulum. Mauris vitae leo vitae augue vehicula sodales a at nulla. Nam id malesuada tellus. Cras nec fermentum leo. Nullam maximus placerat justo, non efficitur urna imperdiet vitae. Aliquam nibh est, consectetur eget dolor at, porta pharetra dolor. Pellentesque ut congue justo, nec venenatis libero. Nunc ac tellus aliquam, volutpat nisi nec, tincidunt sapien. Phasellus pretium orci sit amet purus fringilla, sed viverra nunc porta. Donec eleifend cursus scelerisque. Aenean facilisis leo at mi ornare congue.

In et velit sed dolor vehicula dapibus. Cras nec magna sit amet neque pretium tincidunt non in magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa nibh, tempus quis erat in, blandit blandit felis. Cras suscipit urna quis orci pharetra tristique non vel dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus tincidunt feugiat mauris, vel auctor eros ultrices sodales.

Phasellus semper eget libero sollicitudin laoreet. Integer sit amet lectus sit amet dolor interdum mattis. Nulla posuere tortor at dictum vestibulum. Nunc semper dui turpis, a pharetra mauris venenatis quis. Aliquam nibh nibh, aliquam efficitur sagittis ac, tristique sit amet odio. Duis rutrum malesuada fringilla. Aenean vitae ante sapien. Quisque eget auctor enim, sit amet mattis dolor. Mauris et dui lacus. Cras tellus ante, volutpat id lobortis eget, sodales in elit.

Vestibulum facilisis massa rutrum libero ornare pretium. Ut dui tortor, elementum eu lacinia eu, tincidunt et dui. Morbi in metus ligula. Praesent quis justo eu leo pellentesque volutpat id nec nibh. Nulla tincidunt est odio, vitae cursus nisi placerat non. Nam quis sem finibus, lacinia est posuere, scelerisque magna. Nam dapibus auctor nulla, at pellentesque sem consequat non. Cras pellentesque magna id ante dictum vehicula id eget ante. Curabitur eget justo a tortor pharetra consequat. Nam molestie tristique mauris, non eleifend nunc hendrerit eu. Suspendisse potenti. Quisque quis metus hendrerit enim maximus semper ut at nisi.</p>
                        </ReactTextCollapse>
                    </TabPanel>
                    <TabPanel>
                        <CompanyShortInfo>
                        <TabItems>
                            <TabItemsTitle>
                                <strong>Company Name</strong>
                            </TabItemsTitle>
                            <TabItemsInfo>
                                <span>{dis.subTitle}</span>
                            </TabItemsInfo>
                        </TabItems>
                        <TabItems>
                            <TabItemsTitle>
                                <strong>Company Description</strong>
                            </TabItemsTitle>
                            <TabItemsInfo>
                                <span>{dis.jobDescription}</span>
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
                                <span>{dis.Telephone}</span>
                            </TabItemsInfo>
                        </TabItems>
                        </CompanyShortInfo>
                    </TabPanel>
                </Tabs>
            </SelectTabs>

        </MainContainer>
        </div>
    )
}

export {JobDescription}