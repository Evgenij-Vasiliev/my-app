import styles from './Sidebar.module.css'


function Sidebar() {
    return (        
        <aside className={styles.aside}>
            <ul>
                <li><a href="/">Мой профиль</a></li>
                <li><a href="/" >Мои покупки</a></li>
                <li><a href="/">Мои адреса</a></li>
                <li><a href="./contact.html">Мои контакты</a></li>
            </ul>
        </aside>        
    );        
}

export default Sidebar;

