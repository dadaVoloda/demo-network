import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { initializeApp } from './redux/app-reducer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));
const Music = React.lazy(() => import('./components/Music/Music'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <div className={'preloaderOverlay'}><Preloader/></div>
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
            <React.Suspense fallback={<Preloader/>}>
              <Switch>
                <Route path="/profile/:userId?" component={ProfileContainer} />
                <Route path="/dialogs" component={DialogsContainer} />
                <Route path="/users" component={UsersContainer} />
                <Route path="/login" component={LoginPage} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
              </Switch>
            </React.Suspense>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App)
