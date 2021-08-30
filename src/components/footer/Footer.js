import Link from '../link/Link';
import styles from './Footer.module.css'

const lincsFooter = [
    ['/', 'Текст1'],
    ['/', 'Текст2'],
    ['/', 'Текст3'],
    ['/', 'Текст4'],
    ['/', 'Текст5'],
    ['/', 'Текст6']
]
function Footer() {
    let linkHtml = lincsFooter.map((value) => {
        return <div className={styles.text} key={value[0]}>
        <Link url={value[0]} label={value[1]}/>        
        </div>   
        
    })
    return (
        <footer className={styles.footer}>            
            {linkHtml}       
        </footer> 
    );
}

export default Footer;