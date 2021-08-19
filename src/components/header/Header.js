import './Header.css'
import logo from '../../logo.svg';

function Heder() {
    return <div>
        <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <div className="logo"><a href="#"><img src="./1298712_logo_sketch_icon.png" alt="logo"></a></div> */}
        <nav className="menu">
            <ul>
                <li><a href="/">Домашняя</a></li>
                <li><a href="/" >О нас</a></li>
                <li><a href="/">Ресурсы</a></li>
                <li><a href="/">Контакты</a></li>
            </ul>
        </nav>        
    </header>
    </div>
}

export default Heder;