import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
        <div className={styles.text}><a href="/">Текст1</a></div>        
        <div className={styles.text}><a href="/">Текст2</a></div>        
        <div className={styles.text}><a href="/">Текст3</a></div>        
        <div className={styles.text}><a href="/">Текст4</a></div>        
        <div className={styles.text}><a href="/">Текст5</a></div>        
        <div className={styles.text}><a href="/">Текст6</a></div>        
    </footer> 
    );
}

export default Footer;