import { Link, useNavigate } from 'react-router-dom';
import UserContainer from 'components/UserContainer';
import styles from '../components/user.module.css';
import { LdsRing } from 'components/LdsRing';
import { useState } from 'react';

const Tweets = () => {
  const [isFetching, setIsFetching] = useState(false);

  const navigate = useNavigate();
  const goBack = () => navigate('/');

  const handleIsFetching = isFetching => {
    setIsFetching(isFetching);
  };

  return (
    <>
      <button onClick={goBack} className={styles.btn}>
        <Link to="/">Back</Link>
      </button>
      {isFetching && (
        <div className="sole-lodader">
          <LdsRing />
        </div>
      )}
      {<UserContainer handleIsFetching={handleIsFetching} />}
    </>
  );
};

export default Tweets;
