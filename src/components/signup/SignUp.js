import styles from './SignUp.module.css'

function SignUp() {
    function sendData() {

    }
    
    return <div className={styles.signUp}>
        <form onSubmit={sendData}>
            <input type="submit" value="Создать" />
        </form>         
    </div>;
}
export default SignUp;