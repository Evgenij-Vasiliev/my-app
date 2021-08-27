import styles from './Sidebar.module.css'
import Link from '../../link/Link'

const links = [
    ['/', 'Мой профиль'],
    ['/', 'Мои покупки'],
    ['/', 'Мои адреса'],
    ['./contact', 'Мой контакты'],
];

function Sidebar() {
    let linkHtml = links.map((value) => {
        return <li>
            <Link url={value[0]} label={value[1]}/>        
            </li>
    })
    return (        
        <aside className={styles.aside}>
            <ul>
                {linkHtml}                
            </ul>
        </aside>        
    );        
}

export default Sidebar;

