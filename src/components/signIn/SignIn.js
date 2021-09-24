import styles from './SignIn.module.css';
import{dbUrl} from '../../config/config'
import { useState } from 'react/cjs/react.development';


function SignIn() {
    const [successMessage, setSuccessMessage] = useState();

    let formData = {};

    function sendData($event) {
        console.log('send data', formData);
        fetch(`${dbUrl}/users?email=rrr@ttt.com&password=nnnn`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.length > 0) {
                setSuccessMessage(`Ваш id:${data[0].id}`);
            }
        });
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