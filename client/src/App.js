import React, { useEffect } from 'react';
import { Switch ,Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import './App.scss';

import Home from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from "./pages/checkout/checkout.component";
import Profile from "./pages/profile/profile.component";

import Header from './components/header/header.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.action';



const App = ({ checkUserSession, currentUser } ) =>  {


    useEffect(() => {
        checkUserSession()
    }, [checkUserSession]);


        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route exact 
                            path='/signin'  
                            render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
                    <Route exact path='/profile' 
                            render= {() => 
                                    (<Profile name='Yihua' email='yihuazhang@gmail.com' />)} />
                </Switch>
            </div>
        );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
