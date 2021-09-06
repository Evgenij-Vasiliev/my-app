import styles from './SignUp.module.css'

function SignUp() {

    let formData = {};

    function sendData($event) {
        console.log('send data', formData);
        $event.preventDefault();
    }

    function handleControls($event) {
        formData[$event.target.name] = $event.target.value;
        console.log('change', formData, $event);
    }
    
    return <div className={styles.signUp}>
        <form onSubmit={sendData}>           
            <label>
                Email:
                <input type="email" name="email" placeholder="Вваедите email" onChange={handleControls} />               
            </label>
            <label>
                Password:
                <input type="password" name="password" placeholder="Введите пароль" onChange={handleControls}/>
            </label>  
            <br/>
            <input type="submit" value="Создать" />
        </form>         
    </div>;
}
export default SignUp;