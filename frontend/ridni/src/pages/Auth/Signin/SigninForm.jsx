import React from "react";
import { useForm } from "react-hook-form";
import styles from "./SigninForm.module.css";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const SigninForm = ({ onRegister, navigateLink,}) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    console.log(data);
    navigate(navigateLink);
  };
  
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formInputHolder}>
        <input
          {...register("userName", { required: true })}
          type="text"
          name="userName"
          id="username"
          placeholder="Username"
          className={styles.input}
        />
        {/* {errors.userName && <div className={styles.errorMessage}><span>Opps!</span><span>Passwords should match</span></div>} */}
      </div>
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
      <div className={styles.formInputHolder}>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className={styles.input}
          {...register("password", { required: true, minLength: 6 })}
        />
        {/* {errors.password && (
          <span>Пароль повинен містити щонайменше 6 символів</span>
        )} */}
      </div>
      <div className={styles.formControl}>
        <div className={styles.checkboxHolder}>
          <label htmlFor="rememberMe">Remember Me</label>
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            className={styles.checkbox}
          />
        </div>
        <div className={styles.buttonHolder}>
          <Button className="btn formBtn" text="Continue" />
        </div>
      </div>
    </form>
  );
};

export default SigninForm;
