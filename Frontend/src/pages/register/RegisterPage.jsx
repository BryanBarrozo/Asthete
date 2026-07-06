import styles from "./RegisterPage.module.css";
import loginImg from "../../assets/images/loginImg.jpg";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import validator from "validator";
import api from "../../services/api";


function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Main Function
  const onSubmit = async (data) => {
    console.log(data);
    try {
     const response = await api.post("/register", data);

      alert(response.data.message);
    } catch (error) {
      alert("Internal Error");
    }
  };

  return (
    <main className={styles.container}>
      <img src={loginImg} alt="green plant in brown wooden pot" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.rowContainer}>
          <h1>AESTHETE</h1>
        </div>
        <div className={styles.rowContainer}>
          <h2>Join The Circle</h2>
          <p>
            Create an account to access curated collections and exclusive
            archival objects.
          </p>
        </div>

        <div className={styles.rowContainer}>
          <label htmlFor="name">FULL NAME</label>
          <input
            type="text"
            placeholder="Joel Miller"
            id="name"
            className={`${styles.inputName} ${errors?.name && styles.error}`}
            {...register("name", { required: true })}
          />
          {errors?.name?.type === "required" && (
            <p id={styles.errorMessage}>Name is required</p>
          )}
        </div>

        <div className={styles.rowContainer}>
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input
            type="email"
            placeholder="name@example.com"
            id="email"
            className={`${styles.inputEmail} ${errors?.email && styles.error} `}
            {...register("email", {
              required: true,
              validate: (value) => validator.isEmail(value),
            })}
          />
          {errors?.email?.type === "validate" && (
            <p id={styles.errorMessage}>E-mail is invalid.</p>
          )}
          {errors?.email?.type === "required" && (
            <p id={styles.errorMessage}>Email is required</p>
          )}
        </div>

        <div className={styles.rowContainer}>
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            className={`${styles.inputPassword} ${errors?.password && styles.error}`}
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors?.password?.type === "minLength" && (
            <p id={styles.errorMessage}>
              Password requires at least 8 characters
            </p>
          )}
          {errors?.password?.type === "required" && (
            <p id={styles.errorMessage}>Password is required</p>
          )}
        </div>

        <div className={`${styles.rowContainer} ${styles.containerCheck}`}>
          <input
            type="checkbox"
            id="privacyTerms"
            className={styles.inputCheck}
            {...register("privacyTerms", { required: true })}
          />
          <label htmlFor="privacyTerms">
            I agree to the
            <a href="">Privacy Policy</a>
            and
            <a href="">Terms of Service</a>
          </label>
        </div>
        {errors?.privacyTerms?.type === "required" && (
          <p id={styles.errorMessage}>You must agree with the privacy terms.</p>
        )}
        <button type="submit" className={styles.createButton}>
          CREATE ACCOUNT
        </button>

        <span>
          Alredy have an account? <Link to="/login">Sing in</Link>
        </span>
      </form>
    </main>
  );
}

export default RegisterPage;
