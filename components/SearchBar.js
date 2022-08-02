import React from "react";
import styles from "../components/Searchbar.module.css";
const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input placeholder="Search" />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
