import UserCard from './UserCard';
import styles from './user.module.css';

const UserList = ({ users, handelUpadateUser }) => {
  return (
    <>
      {users.map(el => (
        <li key={el.id} className={styles.card} width={80}>
          <UserCard {...{ ...el, handelUpadateUser }} />
        </li>
      ))}
    </>
  );
};

export default UserList;
