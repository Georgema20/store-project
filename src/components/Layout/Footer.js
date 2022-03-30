import styles from './Footer.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.socials}>
          <a href="https://www.google.com/?client=safari" target="_blank">
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          </a>
          <a href="https://www.google.com/?client=safari" target="_blank">
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
          </a>
          <a href="https://www.google.com/?client=safari" target="_blank">
            <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
          </a>
          <a href="https://www.google.com/?client=safari" target="_blank">
            <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
          </a>
        </div>
      </div>
      <div className={styles.diagonal} />
    </div>
  );
};

export default Footer;
