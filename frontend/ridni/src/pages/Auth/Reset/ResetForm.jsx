import React from "react";
import { useForm } from "react-hook-form";
import styles from "./ResetForm.module.css";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const ResetForm = ({ onRegister, setStep }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    setStep(2)
    console.log(data);
    navigate("/activited");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formInputHolder}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={styles.input}
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {/* {errors.email && <span>Введіть коректний email</span>} */}
      </div>
      <div className={styles.buttonHolder}>
        <Button className="btn formBtn" text="Continue" />
      </div>
    </form>
  );
};

export default ResetForm;
