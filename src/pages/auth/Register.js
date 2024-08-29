import React, { useEffect, useState } from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { FaUserPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoIosCheckmarkCircle } from "react-icons/io";



const Register = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };
  const [formData, setFormData] = useState(initialState);

  const { name, email, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <ImCross size={15} color="red" />
  const checkIcon = <IoIosCheckmarkCircle size={15} color="green" />

  const switchIcon = (condition) => {
    if (condition) {
        return checkIcon;
    }
    return timesIcon;
  }

    // // Check email
    // match: [
    //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //         "Please enter a valid emaial",
    //     ],

    useEffect(() => {
        // Check lower and uppercase
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
            setUCase(true);
        } else {
            setUCase(false);
        }

        // Check For Numbers
        if (password.match(/([0-9])/)) {
            setNum(true);
        } else {
            setNum(false);
        }
        
        // Check For Special char
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
            setSChar(true);
        } else {
            setSChar(false);
        }

        // Check For Special char
        if (password.length > 5) {
            setPassLength(true);
        } else {
            setPassLength(false);
        }

        
    }, [password]);

  const registerUser = () => {};
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <FaUserPlus size={35} color="#999" />
          </div>
          <h2>Register</h2>
          <div className="--flex-center">
            <button className="--btn --btn-google">Login With Google</button>
          </div>
          <br />
          <p className="--text-center --fw-bold">or</p>

          <form onSubmit={registerUser}>
            <input type='text' placeholder='Name' required name='name' value={name} onChange={handleInputChange} />
            <input type='email' placeholder='Email' required name='email' value={email} onChange={handleInputChange} />
            <PasswordInput placeholder='Password' name='password' value={password} onChange={handleInputChange} />
            <PasswordInput placeholder='Confirm Password' name='password2' value={password2} onChange={handleInputChange} />

            {/* Password Strength */}
            <Card cardClass={styles.group}>
                <ul className="form-list">
                    <li>
                        <span className={styles.indicator}>
                            {/* {uCase ? checkIcon : timesIcon} */} {switchIcon(uCase)} &nbsp; Lowercase & Uppercase
                        </span>
                    </li>
                    <li>
                        <span className={styles.indicator}>
                            {switchIcon(num)} &nbsp; Number (0-9)
                        </span>
                    </li>
                    <li>
                        <span className={styles.indicator}>
                            {switchIcon(sChar)} &nbsp; special Character(!@#$%^&*)
                        </span>
                    </li>
                    <li>
                        <span className={styles.indicator}>
                            {switchIcon(passLength)} &nbsp; At least 6 Characters
                        </span>
                    </li>
                </ul>
            </Card>

            <button className="--btn --btn-primary --btn-block" type="submit">Register</button>
          </form>
          <Link to='/forgot'>Forgot Password</Link>
          <span className={styles.register}>
            <Link to='/'>Home</Link>
            <p>&nbsp; Do you have an account ? &nbsp;</p>
            <Link to='/login'>Login</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Register;
