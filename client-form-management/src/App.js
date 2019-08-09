import React from 'react';

import './App.css';
import  UserForm from './components/UserForm'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: []
      
      
    }
  }

    render () {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }
}

export default App;
