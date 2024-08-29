import React, { useState } from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { MdOutlineWifiPassword } from "react-icons/md";
import PasswordInput from "../../components/passwordInput/PasswordInput";


const Reset = () => {
  const initialState = {
    password: '',
    password2: '',
  }
  const [formData, setFormData] = useState(initialState);

  const { password, password2 } = formData;

  const handleInputChange = () => {};

  const forgotPassword = () => {};
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <MdOutlineWifiPassword size={35} color="#999" />
          </div>
          <h2>Reset Password</h2>

          <form onSubmit={forgotPassword}>
          <PasswordInput placeholder='New Password' name='password' value={password} onChange={handleInputChange} />
          <PasswordInput placeholder='Confirm Password' name='password2' value={password2} onChange={handleInputChange} />

            <button className="--btn --btn-primary --btn-block" type="submit">Reset Password</button>

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

export default Reset;
