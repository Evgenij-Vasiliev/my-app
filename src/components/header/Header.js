import logo from '../../logo.svg';
import Link from '../link/Link'
import styles from'./Header.module.css'
import ProfileButton from'./ProfileButton'


const linksHeader = [
    ['/home', 'Домашняя'],
    ['/aboutUs', 'О нас'],
    ['/resources', 'Ресурсы'],
    ['/contacts', 'Контакты']
];

function Heder() {
    let linkHtml = linksHeader.map((value) => {
        return <li key={value[0]}>
        <Link url={value[0]} label={value[1]}/>        
        </li>
    })
    return <>
        <header className={styles.header}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />        
        <nav className={styles.menu}>
            <ul>
                {linkHtml}                
            </ul>
        </nav> 
        <ProfileButton/>       
    </header>
    </>
}

export default Heder;