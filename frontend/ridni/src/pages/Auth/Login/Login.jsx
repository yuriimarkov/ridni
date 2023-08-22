import AuthLayout from "./../../../components/Layout/AuthLayout";
import logotype from "../../../assets/images/logoColor.svg";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
        <AuthLayout logotype={logotype} title={'Log In'} link={'/signin'} >
          <LoginForm />
        </AuthLayout>  
  );
};

export default Login;
