import React from 'react';
import styles from './Search.module.scss';
import { IoSearchOutline } from "react-icons/io5";

const Search = ({ value, onChange }) => {
  return (
    <div className={styles.search}>
        <IoSearchOutline size={18} className={styles.icon} />
        <input type='text' placeholder='Search Users' value={value} onChange={onChange} />
    </div>
  )
}

export default Search;