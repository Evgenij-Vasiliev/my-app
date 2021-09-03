// import logo from '../../logo.svg';

import Header from '.././header/Header';
import Main from '.././main/Main';
import About from '../about/About';
import Resources from '../resources/Resources';
import Contacts from '../contacts/Contacts';
import Footer from '.././footer/Footer';
import styles from './App.module.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Header/>
        <Switch>                    
          <Route path="/home"><Main/></Route>
          <Route path="/aboutUs"><About/></Route>          
          <Route path="/resources"><Resources/></Route>
          <Route path="/contacts"><Contacts/></Route>
          <Route path="/"><Main/></Route>
        </Switch>        
        <Footer/>
      </Router>      
      
    </div>
  );
}

export default App;
