import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import * as ROUTES from "./constants/routes";
import AccountPage from "./pages/Account";
import AdminPage from "./pages/Admin";
import HomePage from "./pages/Home";
import LandingPage from "./pages/Landing";
import Navigation from "./components/Navigation";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import {withAuthentication} from "./components/Session";
import "./App.css";

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <hr />
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                {/*<Route*/}
                {/*    path={ROUTES.PASSWORD_FORGET}*/}
                {/*    component={PasswordForgetPage}*/}
                {/*/>*/}
                <Route path={ROUTES.HOME} component={HomePage} />
                <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                <Route path={ROUTES.ADMIN} component={AdminPage} />
            </div>
        </Router>
    );
}

export default withAuthentication(App);
