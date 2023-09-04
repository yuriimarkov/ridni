import AuthLayout from "../../../../components/Layout/AuthLayout";
import logotype from "../../../../assets/images/logoColor.svg";
import SigninForm from "../SigninForm";
import styles from './UserSignin.module.css';

const UserSignin = () => {
  const handleRegister = (data) => {
    console.log("Registered:", data);
  };
  return (
    <section className={styles.signin}>
      <AuthLayout logotype={logotype} title={"Sign In"} link={"/login-seller"}>
        <SigninForm onRegister={handleRegister} navigateLink={'/confirm'} />
      </AuthLayout>
    </section>
  );
};

export default UserSignin;
