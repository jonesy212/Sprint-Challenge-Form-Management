import React from 'react';

import './App.css';
import UserForm from './components/UserForm'
import axios from 'axios';
import UserCards from './components/UserCards'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: []

    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/restricted/data')
    .then(response => {
        this.setState({
          userData: response.data
        })
    })
    .catch(error => {console.log('there was an error here')})
  }

    render () {
      console.log(this.state.userData)
    return (
      <div className="App">
        <UserForm />
        <UserCards userData= {this.state.userData}/>
      </div>
    );
  }
}

export default App;
