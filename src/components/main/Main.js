import styles from './Main.module.css';
import Sidebar from './sidebar/Sidebar';
import Profile from './profile/Profile';
import Cart from './cart/Cart';
import Address from './address/Address';
import Contact from './contact/Contact';
import Users from './users/Users';
import Clock from './clock/Clock';
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
            <Route path={match.path + '/users'}><Users/></Route>           
            <Route path={match.path + '/'}><Clock/></Route>
        </Switch>
    </main>
    );
}

export default Main;



