import AuthLayout from "../../../../components/Layout/AuthLayout";
import logotype from "../../../../assets/images/logoColor.svg";
import LoginForm from "../LoginForm";
import styles from "./UserLogin.module.css";

const UserLogin = () => {
  return (
    <section className={styles.userLogin}>
      <AuthLayout
        logotype={logotype}
        title={"Log In"}
        link={"/signin"}
      >
        <LoginForm />
      </AuthLayout>
    </section>
  );
};

export default UserLogin;
