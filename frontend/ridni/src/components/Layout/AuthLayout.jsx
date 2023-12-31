import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthLayout.module.css";

const AuthLayout = ({ children, logotype, title, link, subtitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoHolder}>
        <div className={styles.imagesHolder}>
          <img src={logotype} alt="logo" />
        </div>
        {subtitle && <span className={styles.logoSubtitle}>{subtitle}</span>}
      </div>
      <div className={styles.formHolder}>
        <div className={styles.formHeading}>
          <h1 className={styles.title}>{title}</h1>
          {link && (
            <span className={styles.subtitle}>
              Haven’t account?{" "}
              <NavLink className={styles.link} to={link}>
                Sign up
              </NavLink>
            </span>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
