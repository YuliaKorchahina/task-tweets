import { Link } from 'react-router-dom';
import styles from '../components/user.module.css';
import flower from '../components/images/flower.png'
const NotFound = () => {
  return (
    <>
      <p>Sorry, page not found</p>
      <img src={flower} alt="Not found hage" width={600}/>
      <Link className={styles.btn} to="/">
        To Home page
      </Link>
    </>
  );
};
export default NotFound;
