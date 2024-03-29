'use client';

import styles from '@styles/SearchBar.module.css';

const SearchBar = () => {
  return (
    <form className="relative mx-auto w-max">
      <input type="search" className={styles.search_input} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.search_icon}
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </form>
  );
};

export default SearchBar;
