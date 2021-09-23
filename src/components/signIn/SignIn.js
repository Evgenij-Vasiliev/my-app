import styles from './SignIn.module.css';
import{dbUrl} from '../../config/config'


function SignIn() {

    let formData = {};

    function sendData($event) {
        console.log('send data', formData);
        $event.preventDefault();

        fetch(`http://${dbUrl}/users?email=qqq@ttt.com`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        }); 
    }

    function handleControls($event) {
        formData[$event.target.name] = $event.target.value;        
    }
    
    return <div className={styles.SignIn}>
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
            <input  type="submit" value="Вход" />
        </form>         
    </div>;
}
export default SignIn;