// import logo from '../../logo.svg';

import Header from '.././header/Header'
import Main from '.././main/Main'
import Footer from '.././footer/Footer'
import styles from './App.module.css';


function App() {
  return (
    <div className={styles.App}>      
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
