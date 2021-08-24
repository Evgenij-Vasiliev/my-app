import styles from'./Header.module.css'
import logo from '../../logo.svg';

function Heder() {
    return <>
        <header className={styles.header}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />        
        <nav className={styles.menu}>
            <ul>
                <li><a href="/">Домашняя</a></li>
                <li><a href="/" >О нас</a></li>
                <li><a href="/">Ресурсы</a></li>
                <li><a href="/">Контакты</a></li>
            </ul>
        </nav>        
    </header>
    </>
}

export default Heder;