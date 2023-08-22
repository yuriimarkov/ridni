import AuthLayout from "../../../components/Layout/AuthLayout";
import logotype from "../../../assets/images/logoColor.svg";
import SigninForm from "../Signin/SigninForm";

const Signin = () => {
  const handleRegister = (data) => {
    console.log("Registered:", data);
  };
  return (
        <AuthLayout logotype={logotype} title={'Sign In'} link={'/login'} >
          <SigninForm onRegister={handleRegister} />
        </AuthLayout>  
  );
};

export default Signin;
