// import PropTypes from "prop-types";

import { useState, useEffect } from 'react';

import { getUser, updateUser } from 'components/shared/api';
import styles from '../user.module.css';
import UserList from './UserList';
import LoadMore from 'components/LoadMore';

const UserContainer = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

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
    const users = await getUser(page);
    setUsers(users);
  };

  const getUsersData = () => {
    try {
      handleSetUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const onClick = () => {
    setPage(page + 1);
    const nextPage = page + 1;
    const handleSetUsersNext = async () => {
      const usersNext = await getUser(nextPage);
    setUsers([...users, ...usersNext]);
  };
  handleSetUsersNext(nextPage);
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
      <LoadMore onClick={onClick} />
    </>
  );
};

export default UserContainer;
