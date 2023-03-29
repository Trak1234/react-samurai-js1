import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";

import UsersContainer from "./components/Users/UsersContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from "./redux/app-reducer";
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(()=> import ('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(()=> import ('./components/Profile/ProfileContainer'))

class App extends React.Component {
       componentDidMount() {
          this.props.initializeApp();
          
       }
       
       render() {
             
              return (
                     
                     <div className='app-wrapper'>
                         <HeaderContainer />
                         <Navbar />
                         <div className='app-wrapper-content'>
                             <Route path='/dialogs'
                                    render={ () => {return <React.Suspense  fallback={<div>Loading</div>}><DialogsContainer /></React.Suspense >  }}/>
         
                             <Route path='/profile/:userId?'
                                    render={ () =>{return <React.Suspense  fallback={<div>Loading</div>}><ProfileContainer /> </React.Suspense >  } }/>
         
                             <Route path='/users'
                                    render={ () => <UsersContainer /> }/>
                             <Route path='/login'
                                    render={ () => <Login /> }/>
         
         
                         </div>
                     </div>
                 )
       }
    

}

let mapStateToProps = (state) => ({
       
       app: state.app.initialized
       
   });

export default compose(
       withRouter,
       connect(mapStateToProps, {initializeApp}))(App);