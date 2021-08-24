import './Header.css'
import logo from '../../logo.svg';

function Heder() {
    return <>
        <header className="header">
        <img src={logo} className="App-logo" alt="logo" />        
        <nav className="menu">
            <ul>
                <li><a href="/">Домашняя</a></li>
                <li><a href="/" >О нас</a></li>
                <li><a href="/">Ресурсы</a></li>
                <li><a href="/">Контакты</a></li>
            </ul>
        </nav>        
    </header>
    </>
}

export default Heder;