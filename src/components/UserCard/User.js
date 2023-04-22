// import PropTypes from "prop-types";

import { useState, useEffect } from 'react';
import symbols from '../images/symbols.png';
import logo from '../images/logo.png';
import avatar from '../images/avatar.png';
import { getUser } from 'components/shared/api';
import styles from './user.module.css';

const User = () => {
  const [users, setUsers] = useState([]);

  const getUsersData = async () => {
    try {
      const resp = await getUser();
      setUsers(resp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      getUsersData();
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const elements = users.map(({ tweets, followers, id }) => (
    <li key={id} className={styles.card} width={80}>
      <img src={logo} className={styles.logo} alt="logo"></img>
      <div className={styles.wrapper}>
        <img src={symbols} className={styles.symbols} alt="symbols"></img>
        <img src={avatar} className={styles.avatar} alt=""></img>
        <p>{tweets} tweets</p>
        <p>{followers} followers</p>
        <button>FOLLOW</button>
      </div>
    </li>
  ));
  return <ul className={styles.box}>{elements}</ul>;
};

export default User;
