import {Link} from 'react-router-dom';
import styles from '../components/user.module.css'

 const NotFound =() => {
    return (
        <> 
         <p>Sorry, page not found</p>
         <img src="https://cutt.ly/x4imRWt" alt="Not found hage" />
         <Link className={styles.btn} to='/'>To Home page</Link>
        </>   
    )
};
 export default NotFound;