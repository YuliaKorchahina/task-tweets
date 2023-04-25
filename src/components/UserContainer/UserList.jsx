import UserCard from './UserCard';
import styles from './user.module.css';

const UserList = ({ users, handelUpadateUser, isFollowing }) => {
  return (
    <>
      {users.map(el => (
        <li key={el.id} className={styles.card} width={80}>
          <UserCard {...{ ...el, handelUpadateUser, isFollowing }} />
        </li>
      ))}
    </>
  );
};

export default UserList;
