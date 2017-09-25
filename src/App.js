import React, { Component } from 'react';

//components
import FormComponent from './components/controlComponents/FormComponent';
import Header from './components/infoComponents/Header';

//css
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="columns">
            <div className="col-md-9 centered">
              <h3>React.js Controlled Form Components</h3>
              <FormContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
