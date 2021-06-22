import { Route, Switch, useRouteMatch } from "react-router-dom"
import Login from './login/Login';
import Register from './register/Register';
import Header from '../../components/Header';
import { useEffect } from "react";

const AuthContainer = () => {
    let { path } = useRouteMatch();

    return (
        <div className="auth">
            <Header />
            <Switch>
                <Route strict path={`${path}/login`}>
                    <Login />
                </Route >
                <Route strict path={`${path}/register`}>
                    <Register />
                </Route>
            </Switch >
        </div>

    )
}

export default AuthContainer
