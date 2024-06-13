'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './_styles/search-bar.module.scss'

const SearchBar = () => {
  const [isSearchBarShown, setIsSearchBarShown] = useState(false)

  const toggleSearchBar = () => {
    setIsSearchBarShown((prevState) => !prevState)
  }
  const searchIconStyle = isSearchBarShown
    ? `${styles.logo} ${styles.isActive}`
    : styles.logo

  return (
    <div className={styles.searchBarContainer}>
      <button onClick={toggleSearchBar}>
        <div className={searchIconStyle} />
      </button>
      {isSearchBarShown && (
        <section className={styles.searchBarSection}>
          <div className={styles.searchWrapper}>
            <Image
              className={styles.searchInputIcon}
              src="/icons/icon-search.svg"
              alt="search icon"
              width={18}
              height={19}
            />
            <input
              type="text"
              placeholder="請輸入關鍵字"
              className={styles.searchInput}
            />
          </div>
          <div className={styles.modalOverlay} />
        </section>
      )}
    </div>
  )
}

export default SearchBar
