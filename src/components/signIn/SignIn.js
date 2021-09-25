import styles from './SignIn.module.css';
import{dbUrl} from '../../config/config'
import { useState } from 'react';


function SignIn() {
    const [successMessage, setSuccessMessage] = useState();

    let formData = {};

    function sendData($event) {
        console.log('send data', formData);
        fetch(`${dbUrl}/users?email=${formData.email}&password=${formData.password}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const id = data?.[0]?.id;
            if(id) {
                setSuccessMessage(`Ваш id:${data[0].id}`);
            }else{
                setSuccessMessage('Вам на регистрацию');
            }
        })
        .catch(error => {
            console.log('request error', error);
            throw error;
        })
        .finally(() => {

        })
        $event.preventDefault();
    }

    function handleControls($event) {
        formData[$event.target.name] = $event.target.value;
    }

    return (<>
        {successMessage}
        <div className={styles.SignIn}>
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
            <input  type="submit" value="Вход"/>
        </form>
    </div>;
    </>);
}
export default SignIn;