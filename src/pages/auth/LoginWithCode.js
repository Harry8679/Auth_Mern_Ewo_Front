import React, { useState } from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { ImUnlocked } from "react-icons/im";


const LoginWithCode = () => {
  const [loginCode, setLoginCode] = useState('');


  const handleInputChange = (e) => {
    setLoginCode(e.target.value);
  };

  const accessCode = () => {};
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <ImUnlocked size={35} color="#999" />
          </div>
          <h2>Enter Access Code</h2>

          <form onSubmit={accessCode}>
            <input type='text' placeholder='Access Code' required name='name' value={loginCode} onChange={handleInputChange} />

            <button className="--btn --btn-primary --btn-block" type="submit">Proceed To Login</button>
            <span className="--flex-center">Check your email for login access code</span>

            <span className={styles.links}>
                <p><Link to='/'>- Home</Link></p>
                <p className="v-link --color-primary"><b>Resend Code</b></p>
            </span>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default LoginWithCode;
