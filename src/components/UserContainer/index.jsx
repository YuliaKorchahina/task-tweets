// import PropTypes from "prop-types";

import { useState, useEffect } from 'react';

import { getUser, updateUser } from 'components/shared/api';
import styles from './user.module.css';
import UserList from './UserList';

const UserContainer = () => {
  const [users, setUsers] = useState([]);

  const handelUpadateUser = async (id, followers) => {
    const newFollowers = Number(followers) + 1;
    updateUser(id, newFollowers.toString()).then(async () => {
      handleSetUsers();
    });
  };

  const handleSetUsers = async () => {
    const users = await getUser();
    setUsers(users);
  };

  const getUsersData = () => {
    try {
      handleSetUsers();
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

  return (
    <ul className={styles.box}>
      {/* <UserList {...{ users, handelUpadateUser }} /> */}
      <UserList users={users} handelUpadateUser={handelUpadateUser} />
    </ul>
  );
};

export default UserContainer;
