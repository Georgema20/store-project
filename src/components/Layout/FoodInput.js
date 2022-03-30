import styles from './FoodInput.module.css';

const FoodInput = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sentence}>Today, I'm in the mood for</h2>
      <label htmlFor="food" />
      <select
        id="food"
        name="food"
        className={styles.input}
        onChange={props.changeHandler}
      >
        <option className={styles.option} value="everything">
          Everything
        </option>
        <option className={styles.option} value="bowls">
          Bowls
        </option>
        <option className={styles.option} value="dumplings">
          Dumplings
        </option>
        <option className={styles.option} value="soups">
          Soups
        </option>
        <option className={styles.option} value="beverages">
          Beverages
        </option>
      </select>
    </div>
  );
};

export default FoodInput;
