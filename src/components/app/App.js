// import logo from '../../logo.svg';
import SignIn from '../signIn/SignIn';
import SignUp from '../signUp/SignUp';
import Header from '../header/Header';
import Main from '../main/Main';
import Content from '../content/Content';
import About from '../aboutUs/About';
import Resources from '../resources/Resources';
import Contacts from '../contacts/Contacts';
import Footer from '../footer/Footer';
import styles from './App.module.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Header/>
        <div className={styles.pageWrapper}>
        <Switch>
          <Route path="/signUp"><SignUp/></Route>
          <Route path="/signIn"><SignIn/></Route>
          <Route path="/home"><Content/></Route>
          <Route path="/aboutUs"><About/></Route>
          <Route path="/resources"><Resources/></Route>
          <Route path="/contacts"><Contacts/></Route>
          <Route path="/"><Main/></Route>
        </Switch>
        </div>
        <Footer/>
      </Router>      
      
    </div>
  );
}

export default App;
