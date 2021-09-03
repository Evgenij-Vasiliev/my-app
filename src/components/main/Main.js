import styles from './Main.module.css';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';
import Profile from './profile/Profile';
import Cart from './cart/Cart';
import Address from './address/Address';
import Contact from './contact/Contact';
import { Route, Switch, useRouteMatch } from 'react-router';

function Main() {
    const match = useRouteMatch();
    return (
        <main className={styles.main}>
        <Sidebar/>
        <Switch>
            <Route path={match.path + '/profile'}><Profile/></Route>
            <Route path={match.path + '/cart'}><Cart/></Route>
            <Route path={match.path + '/address'}><Address/></Route>
            <Route path={match.path + '/contact'}><Contact/></Route>            
            <Route path={match.path + '/'}><Content/></Route>            
        </Switch>                      
    </main>
    );        
}

export default Main;



