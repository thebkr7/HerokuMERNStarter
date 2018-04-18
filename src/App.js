import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import Welcome from './components/welcome.js';

import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


class App extends Component {

            // <li><Link to='/welcome'>WELComeee</Link></li>

  render() {

        // <Welcome />
// <figure class="image is-24x24" >
//                 <img src="https://image.ibb.co/cpC6mn/Keylogo.png" />
//               </figure>
    return (
      <div>
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <div className='is-vertical-center' >
              

              <div className='name'>
                app&nbsp;name
              </div>

            </div>
          </div>
        </nav>

        <Switch>
          <Route path='/welcome' component={Welcome}/>
        </Switch>

        <br/>
        <br/>
        <br/>
        
        <Welcome />

      </div>
    );
  }
}

export default App;
