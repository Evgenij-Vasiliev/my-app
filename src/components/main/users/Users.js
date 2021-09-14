import { useState } from 'react';
import styles from  './Users.module.css'



function Users() {
    return <>
    <div className={styles.usersAll}><h2>Все пользователи</h2></div>
    <div>
        const [users, setUsers] = useState([]);
        fetch('http://localhost:3500/users')
        .then(result => {
            return result.json();
        }).then(data => {
            setUsers(data);
        });

        let htmlUsers = users.map((user) => {
            return <div key={user.id}>{user.id}:  {user.email} {user.password}</div>
        });

        return <div className={styles.usersAll}>
            {htmlUsers}

        <form onSubmit={sendData}>           
            <label>
                Email:
                <input  type="email" name="email" placeholder="Вваедите email" onChange={handleControls} />               
            </label>
            <label>
                Password:
                <input type="password" name="password" placeholder="Введите пароль" onChange={handleControls}/>
            </label>  
            <br/>
            <input type="submit" value="Создать" />
        </form>
    
    </div>
    </>
}

export default Users;