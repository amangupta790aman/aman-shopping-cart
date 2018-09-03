import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Confirm from './confirm';
import Welcome from './welcome';
import Choose from './choose';

import Signup from './signup';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (

<Router>
  <div>                    
          <Navbar/>
               <Route path='/' component={Welcome} exact />
            <Route path='/choose' component={Choose} exact/>
            <Route path='/confirm' component={Confirm} exact/>
         
            <Route path='/signup' component={Signup} exact/>
            <Route path='/Navbar' component={Navbar} exact/>
           </div>
     </Router>
        
    
    );
  }
}

export default App;

