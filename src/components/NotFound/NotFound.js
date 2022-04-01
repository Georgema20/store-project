import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>Error: URL not valid; page not found!</h1>
    </div>
  );
};

export default NotFound;
