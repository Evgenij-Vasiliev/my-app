import { useState } from 'react';
import styles from './Sidebar.module.css'
import Link from '../../link/Link'

const links = [
    ['/profile', 'Мой профиль'],
    ['/cart', 'Мои покупки'],
    ['/address', 'Мои адреса'],
    ['/contact', 'Мой контакты'],
];


function Sidebar() {
    let [newArray, setnewArray] = useState([]);

    let linkHtml = links.concat(newArray).map((value) => {
        return <li key={value[0]}>
            <Link url={value[0]} label={value[1]}/>        
            </li>
    });

    function addNewLink() {
        let combineArray = newArray.concat([['/exit','Выход']]);
        setnewArray(combineArray);                
    }
    return (        
        <aside className={styles.aside}>
            <ul>
                {linkHtml}                
            </ul>
            <button onClick={addNewLink}>Go</button>
        </aside>        
    );        
}

export default Sidebar;

