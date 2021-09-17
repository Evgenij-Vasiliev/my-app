import { useState } from 'react';
import styles from  './Users.module.css';

function Users() {

    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);    

    function getUsers() {

        setLoading(true);

        return fetch('http://localhost:3500/users')
        .then(result => {
            return result.json();
        }).then(data => {
            setUsers(data);
            setLoading(false);
        });   
    }

    function removeUser(userId) {       
        fetch(`http://localhost:3500/users/${userId}`, {
            method: 'DELETE'
        })
        .then(() => {
            return getUsers();           
        });
    };
        // }).then(() => {
        //     let newUsers = users.filter(user => user.id !== userId) ;
        //     setUsers(newUsers);
        // })
    

    if(!users.length && !isLoading) {
        getUsers();     
    }

    let htmlUsers = users.map((user) => {
        return <div key={user.id} className={styles.userRow}>
            <div className={styles.userInfo}>
            {user.id}:  {user.email} {user.password}                
            </div>

            <button className={styles.btn} onClick={() => removeUser(user.id)}>X</button>                
            </div>
            });    

        return <div className={styles.usersAll}><h2>Все пользователи</h2>{htmlUsers}</div>;   
}

export default Users;