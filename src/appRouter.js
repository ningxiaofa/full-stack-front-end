import React from "react";
import {
    Switch,
    Route,
} from 'react-router-dom'

import Home from './pages/home/index'
import About from './pages/about/index'
import Login from './pages/login/index'
import Register from './pages/register/index'
import NotFound from './pages/notFound/index'

export default function AppRouter() {

    return (
        <Switch>
            <Route exact strict path={"/about"} component={About} />
            <Route exact strict path={"/login"} component={Login} />
            <Route exact strict path={"/register"} component={Register} />
            <Route exact strict path={"/"} component={Home} />
            <Route component={NotFound} />
        </Switch>
    )
}