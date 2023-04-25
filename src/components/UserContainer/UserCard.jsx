// import { useState, useEffect } from 'react';
import styles from './user.module.css';
import symbols from '../images/symbols.png';
import logo from '../images/logo.png';

const UserCard = ({
  tweets,
  followers,
  avatar,
  id,
  handelUpadateUser,
  isFollow,
}) => {
  return (
    <>
      <img src={logo} className={styles.logo} alt="logo"></img>
      <div className={styles.wrapper}>
        <img src={symbols} className={styles.symbols} alt="symbols"></img>
        <div className={styles.decor}></div>
        <img src={avatar} className={styles.avatar} alt=""></img>
        <p className={styles.textTweets}>{tweets} tweets</p>
        <p className={styles.textFollowers}>{followers} followers</p>
        <button
          type="submit"
          id={id}
          onClick={() => handelUpadateUser(id, followers, isFollow)}
          style={{ backgroundColor: isFollow === true ? 'green' : '#EBD8FF' }}
          className={styles.btn}
        >
          follow
        </button>
      </div>
    </>
  );
};

export default UserCard;
