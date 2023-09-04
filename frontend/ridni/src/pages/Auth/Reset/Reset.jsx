import AuthLayout from "../../../components/Layout/AuthLayout";
import logotype from "../../../assets/images/logoColor.svg";
import ResetForm from "./ResetForm";
import СonfirmResetForm from "./СonfirmResetForm";
import { useState } from "react";

const Reset = () => {
  const [step, setStep] = useState(1);
  return (
    <AuthLayout logotype={logotype} title={"Reset password"}>
      {step === 1 && <ResetForm setStep={setStep} />}
      {step === 2 && <СonfirmResetForm setStep={setStep} />}
    </AuthLayout>
  );
};

export default Reset;
