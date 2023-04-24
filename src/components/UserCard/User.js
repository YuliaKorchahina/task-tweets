// import PropTypes from "prop-types";

import { useState, useEffect } from 'react';
import symbols from '../images/symbols.png';
import logo from '../images/logo.png';
import { getUser } from 'components/shared/api';
import styles from './user.module.css';

const User = () => {
  const [users, setUsers] = useState([]);
  const [follow, setFollow] = useState([]);
  // const [idCard, setId] = useState([]);

  const getUsersData = async () => {
    try {
      const resp = await getUser();
      setUsers(resp);
      setFollow(resp.map(({ followers }) => Number(followers)));
      // setId(resp.map(({ id }) => Number(id)));
     
      
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
   console.log(follow);

  const hendelFollow = (event, id, follow) => {
    console.log(follow);
  // const cardId= event.currentTarget.id;
//  console.log( event.currentTarget.elemets.follow);
  // const newFollow = follow + 1;
  
  };

  const elements = users.map(({ tweets, followers, id, avatar }) => (
    <li key={id} className={styles.card} width={80}>
      <img src={logo} className={styles.logo} alt="logo"></img>
      <div className={styles.wrapper}>
        <img src={symbols} className={styles.symbols} alt="symbols"></img>
        <div className={styles.decor}></div>
        <img src={avatar} className={styles.avatar} alt=""></img>
        <p className={styles.textTweets}>{tweets} tweets</p>
        <p className={styles.textFollowers}>{followers} followers</p>
        <button id={id} onClick={(event)=>hendelFollow(event, id,followers)} className={styles.btn}>
          follow
        </button>
      </div>
    </li>
  ));
  return <ul className={styles.box}>{elements}</ul>;
};

export default User;
