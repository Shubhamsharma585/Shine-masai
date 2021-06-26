import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Navbar/NavBar.module.css"
import styled from "styled-components"
import { useSelector } from "react-redux";

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

const AfterLoginNav = () => {
    const UserName = useSelector((state) => state.logi.payload?.name)

    const handleLogout = () => {
        window.location.reload()
    }

    return (
        <div className={styles.navAfterContainer}>
            <div className={styles.navContainer_Img}>
                <Link to=""><div className={styles.LogoBox}></div></Link>
            </div>
            <div className={styles.navAfterContainer_Links}>
                <Link to="">
                    <LinkContainer>
                    <div>Search Jobs</div>
                    <LinkItems>
                        <Navtitle><Link to="/jobdescription" className={styles.navtitle1}>Jobs in Top Cities</Link></Navtitle>
                        <Navtitle>Jobs by Skills</Navtitle>
                        <Navtitle>Jobs by Courses</Navtitle>
                        <Navtitle>Jobs by Education</Navtitle>
                        <Navtitle>Jobs by Designation</Navtitle>
                        <Navtitle>Jobs by Companies</Navtitle>
                    </LinkItems>
                    </LinkContainer>
                </Link>
                <Link to="">
                    <div>Jobs for You</div>
                </Link>
                <Link to="">
                    <div>Mailbox</div>
                </Link>
                <Link to="">
                    <LinkContainer>
                    <div>Profile</div>
                    <LinkItems>
                        <Navtitle>Jobs by Skills</Navtitle>
                        <Navtitle>Jobs by Courses</Navtitle>
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
            </div>
            <div className={styles.userButton}>
            <Link to="">
                <LinkContainer>
                <button className={styles.userName}>
                    {`Hi, ${UserName}`}
                </button>
                    <LinkItems> 
                        <Navtitle>Account Settings</Navtitle>
                        <Navtitle onClick={handleLogout}>Sign out</Navtitle>
                    </LinkItems>
                </LinkContainer>
            </Link>
            </div>
        </div>
    )
}

export {AfterLoginNav}