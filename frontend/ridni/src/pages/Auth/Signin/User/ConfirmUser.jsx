import { NavLink } from "react-router-dom";
import styles from "./ConfirmUser.module.css";
import AuthLayout from "../../../../components/Layout/AuthLayout";
import logotype from "../../../../assets/images/logoColor.svg";

const ConfirmUser = () => {
  return (
    <section className={styles.confirm}>
      <AuthLayout title={"Account activation"} logotype={logotype}>
        <div className={styles.content}>
          <div className={styles.textHolder}>
            <p>Check your email to see if you receive an email with a confirmation link </p>
          </div>
          <div className={styles.contacts}>
            <span className={styles.text}>Have troubles? Let us know!</span>
            <NavLink
              to="@emailto:ridnisupport@gmail.com"
              className={styles.link}
            >
              ridnisupport@gmail.com
            </NavLink>
          </div>
        </div>
      </AuthLayout>
    </section>
  );
};

export default ConfirmUser;
