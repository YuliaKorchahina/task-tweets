import { Link, useNavigate } from 'react-router-dom';
import UserContainer from 'components/UserContainer';
import styles from '../components/user.module.css';

const Tweets = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <>
      <button onClick={goBack} className={styles.btn}>
        <Link to="/">Back</Link>
      </button>
      <UserContainer />
    </>
  );
};

export default Tweets;

