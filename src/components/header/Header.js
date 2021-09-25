import logo from '../../logo.svg';
import Link from '../link/Link';
import styles from'./Header.module.css';
import ProfileButtonRegistration from'./ProfileButtonRegistration';
import ProfileButtonAuthorization from'./ProfileButtonAuthorization';



const linksHeader = [
    ['/home', 'Домашняя'],
    ['/aboutUs', 'О нас'],
    ['/resources', 'Ресурсы'],
    ['/contacts', 'Контакты']
];

function Header() {
    let linkHtml = linksHeader.map((value) => {
        return <li key={value[0]}>
        <Link url={value[0]} label={value[1]}/>
        </li>
    })
    return <>
        <header className={styles.header}>
            <a className={styles.logo} href="/">
            <img src={logo} className={styles["App-logo"]} alt="logo" />
            </a>
        <nav className={styles.menu}>
            <ul>
                {linkHtml}
            </ul>
        </nav>
        <ProfileButtonRegistration/>
        <ProfileButtonAuthorization/>       
    </header>
    </>
}

export default Header;