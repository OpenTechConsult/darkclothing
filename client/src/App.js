import React, { useEffect, lazy, Suspense } from 'react';
import { Switch ,Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

//import Home from './pages/home/home.component';
//import ShopPage from './pages/shop/shop.component';
//import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
//import CheckoutPage from "./pages/checkout/checkout.component";
//import Profile from "./pages/profile/profile.component";

import Header from './components/header/header.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.action';
import { GlobalStyle } from './global.styles';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary  from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/home/home.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const Profile = lazy(() => import('./pages/profile/profile.component'));


const App = ({ checkUserSession, currentUser } ) =>  {


    useEffect(() => {
        checkUserSession()
    }, [checkUserSession]);


        return (
            <div>
                <GlobalStyle />
                <Header />
                <Switch>
                    <ErrorBoundary>
                        <Suspense fallback={<Spinner />}>
                            <Route exact path='/' component={HomePage} />
                            <Route path='/shop' component={ShopPage} />
                            <Route exact path='/checkout' component={CheckoutPage} />
                            <Route exact 
                                    ath='/signin'  
                                    render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
                            <Route exact path='/profile' 
                                    render= {() => 
                                        (<Profile name='Yihua' email='yihuazhang@gmail.com' />)} />
                        </Suspense>
                    </ErrorBoundary>
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
