import { NavLink } from "react-router-dom";
import Button from "../../../components/Button/Button";
import styles from "./LoginForm.module.css";


const LoginForm = () => {
  return (
          <form className={styles.form}>
            <div className={styles.formInputHolder}>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Username"
                className={styles.input}
              />
            </div>
            <div className={`${styles.formInputHolder} ${styles.reset}`}>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Password"
                className={styles.input}
              />
              <NavLink to='/reset' className={styles.resetLink}>Forgot password?</NavLink>
            </div>
            <div className={styles.formControl}>
              <div className={styles.checkboxHolder}>
                <label className={styles.label} htmlFor="rememberMe">Remember Me</label>
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  className={styles.checkbox}
                />
              </div>
              <div className={styles.buttonHolder}>
                <Button className="btn formBtn" text="Continue" />
              </div>
            </div>
          </form>
  );
};

export default LoginForm;
