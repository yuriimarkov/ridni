import AuthLayout from "../../../../components/Layout/AuthLayout";
import logotype from "../../../../assets/images/logobussinesWhite.svg";
import LoginForm from "../LoginForm";
import styles from "./SellerLogin.module.css";

const SellerLogin = () => {
  return (
    <section className={styles.userLogin}>
      <AuthLayout
        logotype={logotype}
        title={"Log In"}
        link={"/signin-business"}
        subtitle={"business"}
      >
        <LoginForm />
      </AuthLayout>
    </section>
  );
};

export default SellerLogin;
