import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Navbar/NavBar.module.css"
import styled from "styled-components"

const LinkItems = styled.div`
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
    padding: 12px 16px;
    z-index: 1;
    top: 110.5%;
    left: -6.10%;
    color: black;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`

const LinkContainer = styled.div`
    position: relative;
    &:hover ${LinkItems} {
      display: block;
    }
`

const Navtitle = styled.p`
    font-size: 12px;
    &:hover ${LinkItems} {
      display: block;
    }
    &:hover{
        background-color: #f3f3f3;
        cursor: pointer;
        padding: 2px;
    }
`

const NavBar = () => {

    return (
        <div className={styles.navContainer}>
            <div className={styles.navContainer_Img}></div>
            <div className={styles.navContainer_Links}>
                <Link to="">
                    <LinkContainer>
                    <div>Search Jobs</div>
                    <LinkItems>
                        <Navtitle><Link to="/jobdiscription" style={{textDecoration:"none",color:""}}>Jobs in Top Cities</Link></Navtitle>
                        <Navtitle>Jobs by Skills</Navtitle>
                        <Navtitle>Jobs by Courses</Navtitle>
                        <Navtitle>Jobs by Education</Navtitle>
                        <Navtitle>Jobs by Designation</Navtitle>
                        <Navtitle>Jobs by Companies</Navtitle>
                    </LinkItems>
                    </LinkContainer>
                </Link>
                <Link to="">
                    <LinkContainer>
                    <div>Services</div>
                        <div>
                        <LinkItems>
                        <Navtitle>Jobs in Top Cities</Navtitle>
                        <Navtitle>Jobs by Skills</Navtitle>
                        <Navtitle>Jobs by Courses</Navtitle>
                        <Navtitle>Jobs by Education</Navtitle>
                        <Navtitle>Jobs by Designation</Navtitle>
                        <Navtitle>Jobs by Companies</Navtitle>
                        <Navtitle>Jobs in Top Cities</Navtitle>
                        <Navtitle>Jobs by Skills</Navtitle>
                        <Navtitle>Jobs by Courses</Navtitle>
                        <Navtitle>Jobs by Education</Navtitle>
                        <Navtitle>Jobs by Designation</Navtitle>
                        <Navtitle>Jobs by Companies</Navtitle>
                        </LinkItems>
                        </div>
                    </LinkContainer>
                </Link>
                <Link to="">
                    <LinkContainer>
                        <div>Resources</div>
                        <LinkItems>
                        <Navtitle>Blog</Navtitle>
                        <Navtitle>Resume Tips</Navtitle>
                        <Navtitle>Career Help</Navtitle>
                        <Navtitle>Career Prospects</Navtitle>
                        <Navtitle>Jobs Search Guidance</Navtitle>
                        <Navtitle>Interview Tips</Navtitle>
                    </LinkItems>
                    </LinkContainer>
                </Link>
                <Link to="">
                    <div>Recruiter</div>
                </Link>
                <Link to="">
                    <div>Walk-ins</div>
                </Link>
            </div>
            <button className={styles.navContainer_Jalert}>
                <Link to="">Create job alert</Link>
            </button>
            <button className={styles.navContainer_Jalert}>
                Post a job
            </button>
            <div className={styles.navContainer_Contact}>
                <div>080-47105555</div>
                <div>9am - 6pm, Mon to Sat</div>
            </div>
        </div>
    )
}

export default NavBar
