// import PropTypes from "prop-types";

import { useState, useEffect } from 'react';
import { getUser, updateUser } from 'components/shared/api';
import styles from '../user.module.css';
import UserList from './UserList';
import LoadMore from 'components/LoadMore';

const UserContainer = ({ handleIsFetching }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const prepareFollowers = (followers, isFollow) => {
    const newFollowers = isFollow
      ? Number(followers) - 1
      : Number(followers) + 1;
    return newFollowers.toString();
  };

  const handelUpadateUser = async (id, { followers, isFollow }, callback) => {
    handleIsFetching(true);
    await updateUser(id, prepareFollowers(followers, isFollow), !isFollow).then(
      userData => {
        callback(userData);
      }
    );
    handleIsFetching(false);
  };

  const handleSetUsers = async () => {
    handleIsFetching(true);
    const users = await getUser(page);
    setUsers(users);
    handleIsFetching(false);
  };

  const getUsersData = () => {
    try {
      handleSetUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const hanleLoadMore = () => {
    setPage(page + 1);
    const nextPage = page + 1;
    const handleSetUsersNext = async () => {
      handleIsFetching(true);
      const usersNext = await getUser(nextPage);
      setUsers([...users, ...usersNext]);
      handleIsFetching(false);
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
        <UserList users={users} handelUpadateUser={handelUpadateUser} />
      </ul>
      <LoadMore onClick={hanleLoadMore} users={users} />{' '}
    </>
  );
};

export default UserContainer;
