import './Main.css'
import Sidebar from './sidebar/Sidebar'
import Content from './content/Content'

function Main() {
    return <div>
        <main className="main">
        <Sidebar/>              
        <Content/>              
    </main>
    </div>        
}

export default Main;



