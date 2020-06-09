import React from 'react';
import { Switch ,Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './utils/firebase.utils';
import { connect } from 'react-redux';
import './App.css';
import Home from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component';
import { setCurrentUser } from './redux/user/user.action';




class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                   setCurrentUser({
                       id: snapshot.id,
                       ...snapshot.data()
                   });
                });
            } else {
                setCurrentUser(userAuth);
            } 
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact 
                            path='/signin'  
                            render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
