// import Link from '../link/Link';
import logo from '../../logo.svg';
import styles from './Header.module.css';

function Logo() {
    return <img src={logo} className={styles["App-logo"]} alt="logo" />
}
export default Logo;