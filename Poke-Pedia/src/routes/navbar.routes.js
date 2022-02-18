import Navigation from '../components/Header/NavigationBar';
import {NavLink,Route, Switch} from 'react-router-dom';
import React from 'react'
const DrawerRoute = (props) => {
    return (<Switch>
        <Route exact path='/:main/:module' component={Navigation}/>
        <Route exact path='/:main/:module/:submodule' component={Navigation}/>
    </Switch>)
}

const SideBar = (props) => {
    return <DrawerRoute/>
}
export default SideBar;