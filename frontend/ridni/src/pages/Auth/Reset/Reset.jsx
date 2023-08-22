import AuthLayout from "../../../components/Layout/AuthLayout";
import logotype from "../../../assets/images/logoColor.svg";
import ResetForm from "./ResetForm";

const Reset = () => {
  return (
    <AuthLayout logotype={logotype} title={"Reset password"}>
      <ResetForm />
    </AuthLayout>
  );
};

export default Reset;
