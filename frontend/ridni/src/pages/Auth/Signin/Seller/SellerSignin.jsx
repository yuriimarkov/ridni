import AuthLayout from "../../../../components/Layout/AuthLayout";
import logotype from "../../../../assets/images/logobussinesWhite.svg";
import SigninForm from "../SigninForm";
import styles from './SellerSignin.module.css';

const SellerSignin = () => {
  const handleRegister = (data) => {
    console.log("Registered:", data);
  };
  return (
    <section className={styles.signin}>
      <AuthLayout logotype={logotype} title={"Register your shop"} link={"/login-seller"} subtitle={'business'}>
        <SigninForm onRegister={handleRegister} navigateLink={'/confirm-seller'} />
      </AuthLayout>
    </section>
  );
};

export default SellerSignin;
