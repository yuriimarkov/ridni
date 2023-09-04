import React from "react";
import { useForm } from "react-hook-form";
import styles from "./ResetForm.module.css";
import Button from "../../../components/Button/Button";

const СonfirmResetForm = ({ onRegister, setStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: "onChange" });

  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const onSubmit = (data) => {
    console.log(data);
  };

  const validateConfirmPassword = (value) => {
    const password = getValues("password");
    return value === password || "Passwords do not match";
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formInputHolder}>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter new password"
          className={styles.input}
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: passwordPattern,
              message:
                "Password must be at least 8 characters long and include lowercase, uppercase, and numbers",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div className={styles.formInputHolder}>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm your new password"
          className={styles.input}
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: validateConfirmPassword,
          })}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>
      <div className={styles.buttonHolder}>
        <Button className="btn formBtn" text="Continue" />
      </div>
    </form>
  );
};

export default СonfirmResetForm;
