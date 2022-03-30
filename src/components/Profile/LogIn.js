import styles from './LogIn.module.css';
import { useRef } from 'react';

const LogIn = (props) => {
  const emailInput = useRef();
  const passwordInput = useRef();
  //API KEY
  //AIzaSyAISNgZbXSdK2uQ4feVYID3aS-mhI8Hryo
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log In</h1>
      <label htmlFor="email"></label>
      <input type="text" id="email" placeholder="Email" ref={emailInput} />
      <label htmlFor="password"></label>
      <input
        type="text"
        id="password"
        placeholder="Password"
        ref={passwordInput}
      />
      <div className={styles.buttonContainer}>
        <div className={styles.button} onClick={props.createAccountFunc}>
          Create An Account
        </div>
        <div
          className={styles.button}
          onClick={() => {
            props.logInFunc(
              emailInput.current.value,
              passwordInput.current.value
            );
          }}
        >
          Log In
        </div>
      </div>
    </div>
  );
};

export default LogIn;
