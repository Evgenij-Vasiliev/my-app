import './Main.css'
import Sidebar from './sidebar/Sidebar'
import Content from './content/Content'

function Main() {
    return (
        <main className="main">
        <Sidebar/>              
        <Content/>              
    </main>
    );        
}

export default Main;



