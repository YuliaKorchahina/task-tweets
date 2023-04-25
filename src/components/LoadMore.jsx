import styles from '../components/user.module.css'
import PropTypes from 'prop-types';


export const LoadMore = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={styles.btn}>
      <span className="button-label">Load more</span>
    </button>
  );
};

// LoadMore.propTypes= {
//   onClick: PropTypes.func.isRequired
// }
export default LoadMore;