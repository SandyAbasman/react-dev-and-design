import { useState } from "react";
import styles from "./InputField.module.css";

function InputField() {
  const [formValue, setFormValue] = useState({
    fullname: " ",
    email: " ",
    lastName: " ",
  });
  const { fullname, email, lastName } = formValue;

  function submitManager(e) {
    e.preventDefault();
    console.log(formValue);
  }

  return (
    <form className={styles.form}>
      <h3 className={styles.h3}>Name: {fullname}</h3>
      <input
        type="text"
        className={styles.input}
        htmlFor="fullname"
        value={fullname}
        onChange={(e) =>
          setFormValue({ ...formValue, fullname: e.target.value })
        }
      />
      <h3 className={styles.h3}>Email: {email}</h3>

      <input
        type="email"
        className={styles.input}
        htmlFor="email"
        value={email}
        onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
      />
      <h3 className={styles.h3}>lastname: {formValue.lastName}</h3>
      <input
        type="text"
        className={styles.input}
        htmlFor="lastname"
        value={lastName}
        onChange={(e) =>
          setFormValue({ ...formValue, lastName: e.target.value })
        }
      />
      <button className={styles.button} onClick={(e) => submitManager(e)}>
        Submit
      </button>
    </form>
  );
}

export default InputField;
