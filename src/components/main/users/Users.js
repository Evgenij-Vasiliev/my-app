import { useState } from 'react';
import styles from  './Users.module.css';

function Users() {

    const [users, setUsers] = useState([]);

    if(!users.length) {
        fetch('http://localhost:3500/users')
        .then(result => {
            return result.json();
        }).then(data => {
            setUsers(data);
        });        
    }

    let htmlUsers = users.map((user) => {
        return <div key={user.id} className={styles.userRow}>
            <div className={styles.userInfo}>
            {user.id}:  {user.email} {user.password}                
            </div>         

            <button className={styles.btn}>X</button>                
        </div>
    });    

    return <div className={styles.usersAll}><h2>Все пользователи</h2>{htmlUsers}</div>;   
}

export default Users;