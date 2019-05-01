import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { logout } from '../actions/session_actions';
import HeaderMainNav from './home_page/header_main_nav';
import HeaderInfoNav from './home_page/header_info_nav';
import ArtistsFooterNav from './home_page/artists_footer_nav';


import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
    <div>
        <header>
            <HeaderMainNav/>
            <HeaderInfoNav/>
            <Link to="/" className="header-link">
                <h1>Genius</h1>
            </Link>
            <GreetingContainer />
            <ArtistsFooterNav/>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;
