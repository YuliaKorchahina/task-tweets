import { Link } from 'react-router-dom';
import UserContainer from 'components/UserContainer';
import styles from '../components/user.module.css';

const Tweets = () => {
  return (
    <>
      <UserContainer />
      <button className={styles.btn}>
        <Link to="/">To Home page</Link>
      </button>
    </>
  );
};

export default Tweets;
