import React, { useState } from 'react';
import './PasswordInput.scss';
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

const PasswordInput = ({ placeholder, value, onChange, name, onPaste }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }
  return (
    <div className='password'>
        <input type={showPassword ? 'text': 'password'} placeholder={placeholder} required name={name} value={value} onChange={onChange} onPaste={onPaste} />
        <div className="icon" onClick={togglePassword}>
            {showPassword ? (<IoEyeOff size={20} />) : (<IoEye size={20} />)}
        </div>
    </div>
  )
}

export default PasswordInput;