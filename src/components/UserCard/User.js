// import PropTypes from "prop-types";

import { useState, useEffect } from 'react';
import avatar from '../images/bg.png';
import bg from '../images/avatar.png';
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

  const elements = users.map(({ tweets, followers,id }) => (
    <div className={styles.wrapper}>
      <li key={id}>
        <img className={styles.avatar} src={avatar} alt="avatar boy"></img>
      </li>
      <li>
        <img src={bg} alt="img"></img>
      </li>
      <li>{tweets} tweets</li>
      <li>{followers} followers</li>

      <button>FOLLOW</button>
    </div>
  ));
  return <ul className={styles.box}> {elements} </ul>;
};

export default User;
