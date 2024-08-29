import React, { useState } from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { GoMail } from "react-icons/go";


const Forgot = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = () => {};

  const forgotPassword = () => {};
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <GoMail size={35} color="#999" />
          </div>
          <h2>Forgot Password</h2>

          <form onSubmit={forgotPassword}>
            <input type='email' placeholder='Email' required name='email' value={email} onChange={handleInputChange} />

            <button className="--btn --btn-primary --btn-block" type="submit">Get Reset Email</button>

            <span className={styles.links}>
                <p><Link to='/'>- Home</Link></p>
                <p><Link to='/register'>- Register</Link></p>
            </span>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Forgot;
