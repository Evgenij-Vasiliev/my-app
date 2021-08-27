import styles from './Main.module.css'
import Sidebar from './sidebar/Sidebar'
import Content from './content/Content'

function Main() {
    return (
        <main className={styles.main}>
        <Sidebar/>              
        <Content/>              
    </main>
    );        
}

export default Main;



