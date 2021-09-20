import { useState } from 'react';
import styles from  './Users.module.css';

function Users() {

    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);    
    const [isFirst, setFirst] = useState(true);    
    const [errorMessage, setErrorMessage] = useState();    

    function getUsers() {

        setUsers([]);
        setLoading(true);
        setErrorMessage();

        return fetch('http://localhost:4000/users')
        .then(result => {
            return result.json();
        })
        .then(data => {
            setUsers(data);
            setLoading(false);
        })
        .catch(error => {
            console.log('request error', error);
            setErrorMessage('Обновите пользователей заново');

            throw error;
        })
        .finally(() => {
            setLoading(false);
        })   
    }

    function removeUser(userId) {       
        fetch(`http://localhost:4000/users/${userId}`, {
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
    

    if(isFirst) {
        setFirst(false);
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

        let htmlButton;
        
        if(!isLoading) {
            htmlButton = <button onClick={getUsers}>Обновить</button>;
        }

        if(errorMessage) {
            htmlButton = <button onClick={getUsers}>Повторить</button>;
        }

        return <div className={styles.usersAll}>
            <div>{htmlButton}</div>
            <div>{errorMessage}</div>
            <h2>Все пользователи</h2>
            {htmlUsers}
            </div>;   
}

export default Users;