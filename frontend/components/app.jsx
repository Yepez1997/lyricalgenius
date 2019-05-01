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
import HeaderMainNavContainter from './home_page/header_main_nav_container';
import HeaderInfoNav from './home_page/header_info_nav';
import ArtistsFooterNav from './home_page/artists_footer_nav';
import Modal from './modal/modal';


import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// FIXME: REMOVE LINKS TO LOGIN/SIGN UP WHEN CREATING A MODAL
const App = () => (
    <div>
        <Modal/>
        <header>
            <HeaderMainNavContainter/>
            <HeaderInfoNav/>
            <ArtistsFooterNav/>
        </header>
        <Switch>
        </Switch>
    </div>
);

export default App;
