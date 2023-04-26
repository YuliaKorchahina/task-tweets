import { useState } from 'react';
import styles from '../user.module.css';
import symbols from '../images/symbols.png';
import logo from '../images/logo.png';
import PropTypes from 'prop-types';
import { formatThousand } from 'utils/format';

const UserCard = ({ userData, handelUpadateUser }) => {
  const [user, setUser] = useState({ ...userData });
  const { tweets, followers, avatar, id, isFollow } = user;
  const btnText = isFollow => {
    return isFollow === true ? 'following' : 'follow';
  };
  const handleSetUser = user => {
    setUser(user);
  };

  return (
    <>
      <img src={logo} className={styles.logo} alt="logo"></img>
      <div className={styles.wrapper}>
        <img src={symbols} className={styles.symbols} alt="symbols"></img>
        <div className={styles.decor}></div>
        <img src={avatar} className={styles.avatar} alt=""></img>
        <p className={styles.textTweets}>{tweets} tweets</p>
        <p className={styles.textFollowers}>
          {formatThousand(followers)} followers
        </p>
        <button
          type="submit"
          id={id}
          onClick={() =>
            handelUpadateUser(id, { followers, isFollow }, handleSetUser)
          }
          style={{ backgroundColor: isFollow === true ? '#5CD3A8' : '#EBD8FF' }}
          className={styles.btn}
        >
          <span className={styles.btnContent}>{btnText(isFollow)}</span>
        </button>
      </div>
    </>
  );
};

export default UserCard;

UserCard.propTypes = {
  userData: PropTypes.object,
  handelUpadateUser: PropTypes.func.isRequired,
};
