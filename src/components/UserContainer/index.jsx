// import PropTypes from "prop-types";

import { useState, useEffect } from 'react';

import { getUser, updateUser } from 'components/shared/api';
import styles from '../user.module.css';
import UserList from './UserList';
import LoadMore from 'components/LoadMore';

const UserContainer = () => {
  const [users, setUsers] = useState([]);

  const prepareFollowers = (followers, isFollow) => {
    const newFollowers = isFollow
      ? Number(followers) - 1
      : Number(followers) + 1;
    return newFollowers.toString();
  };

  const handelUpadateUser = async (id, followers, isFollow) => {
    updateUser(id, prepareFollowers(followers, isFollow), !isFollow).then(
      async () => {
        handleSetUsers();
      }
    );
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
    <>
      <ul className={styles.box}>
        {/* <UserList {...{ users, handelUpadateUser }} /> */}
        <UserList
          users={users}
          handelUpadateUser={handelUpadateUser}
          // isFollowing={isFollowing}
        />
      </ul>
     {users.length === 3 &&<LoadMore />}
    </>
  );
};

export default UserContainer;
