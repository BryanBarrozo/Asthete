import styles from "./LoginPage.module.css";
import loginImg from "../../assets/images/loginImg.jpg"; //Linh Le

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import api from "../../services/api";
import validator from "validator";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Main Function
  const onSubmit = async (data) => {
    try {
      const response = await api.post("/login", data);
      console.log(response.data);
      alert("Login funcionando", response.data)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível conectar ao servidor.");
      }
    }
    //requisitando informaçao de login para ver se usuario existe
  };

  return (
    <main className={styles.container}>
      <img src={loginImg} alt="green plant in brown wooden pot" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.rowContainer}>
          <h1>AESTHETE</h1>
        </div>

        <div className={styles.rowContainer}>
          <h2>Welcome Back</h2>
          <p>Please enter your details to access your curated collection.</p>
        </div>

        <div className={styles.rowContainer}>
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input
            type="email"
            placeholder="name@example.com"
            id="email"
            className={`${styles.inputEmail} ${errors?.email && styles.error}`}
            {...register("email", {
              required: true,
              validate: (value) => validator.isEmail(value),
            })}
          />

          {errors?.email?.type === "required" && (
            <p id={styles.errorMessage}>Email is required</p>
          )}
          {errors?.email?.type === "validate" && (
            <p id={styles.errorMessage}> Email is invalid</p>
          )}
        </div>

        <div className={styles.rowContainer}>
          <div className={styles.labelPassword}>
            <label htmlFor="password">PASSWORD</label>
            <Link to="/forgot-password" className={styles.forgot}>
              Forgot Password?
            </Link>
            {/*ainda não possue link*/}
          </div>
          <input
            type="password"
            placeholder="*********"
            id="password"
            className={`${styles.inputPassword} ${errors?.password && styles.error}`}
            {...register("password", { required: true })}
          />
          {errors?.password?.type === "required" && (
            <p id={styles.errorMessage}>Password is required</p>
          )}
        </div>

        <div className={styles.rowContainer}>
          <button type="submit" className={styles.loginButton}>
            SIGN IN
          </button>
          <div className={styles.divider}>
            <div></div>
            <span>OR</span>
            <div></div>
          </div>
          <button type="button" className={styles.googleButton}>
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </form>
    </main>
  );
}

export default LoginPage;
