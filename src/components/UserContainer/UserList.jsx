import UserCard from './UserCard';
import styles from '../user.module.css';
import PropTypes from 'prop-types';


const UserList = ({ users, handelUpadateUser }) => {
  return (
    <>
      {users.map(el => (
        <li key={el.id} className={styles.card} width={80}>
          <UserCard userData={el} handelUpadateUser={handelUpadateUser} />
        </li>
      ))}
    </>
  );
};

export default UserList;
UserList.propTypes= {
  handelUpadateUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
}
