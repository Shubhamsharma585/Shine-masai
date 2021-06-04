//Reference article:-- https://www.digitalocean.com/community/tutorials/creating-a-social-follow-component-in-react


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../LogIn/Login.module.css"

import {
    faFacebook,
    faTwitter,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
  return (
    <div>
        
<a href="https://www.linkedin.com/company/shinecom/"
  className={styles.linkedinsocial}>
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>

<a href="https://twitter.com/Shinedotcom?lang=en" 
  className={styles.twittersocial}>
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.facebook.com/shinedotcom/"
  className={styles.facebooksocial}>
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>

   </div>
  );
}