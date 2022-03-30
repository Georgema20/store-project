import styles from './LogIn.module.css';
import { useRef } from 'react';

const CreateAccount = (props) => {
  const emailInput = useRef();
  const passwordInput = useRef();
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  //API KEY
  //AIzaSyAISNgZbXSdK2uQ4feVYID3aS-mhI8Hryo
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Account</h1>
      <div className={styles.nameContainer}>
        <label htmlFor="fName"></label>
        <input
          className={styles.nameInput}
          type="text"
          id="fName"
          placeholder="First Name"
          ref={firstNameInput}
        />
        <label htmlFor="lName"></label>
        <input
          type="text"
          id="lName"
          className={styles.nameInput}
          placeholder="Last Name"
          ref={lastNameInput}
        />
      </div>
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
        <div className={styles.button} onClick={props.cancelFunc}>
          Cancel
        </div>
        <div
          className={styles.button}
          onClick={() => {
            props.createAccountFunc(
              firstNameInput.current.value,
              lastNameInput.current.value,
              emailInput.current.value,
              passwordInput.current.value
            );
          }}
        >
          Create Account
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
