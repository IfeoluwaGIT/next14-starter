
// import LoginForm from "@/components/loginForm/loginForm";
// import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import { handleGithubLogin } from "@/app/lib/action"; 

const LoginPage = async () => {


  

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
