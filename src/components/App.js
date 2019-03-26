//import Header from './Header';
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
//import PrivateRoute from './PrivateRoute';

/*
import Article from './Article';
import Editor from './Editor';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import Settings from './Settings';
*/

import {CloseService} from './indi/index';

@inject('indiStore')
@withRouter
@observer
export default class App extends React.Component {

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {

      return (
        <div>
          
          
            <Route path="/closeservice" component={CloseService} />
            
          
        </div>
      );
    
  }
}
