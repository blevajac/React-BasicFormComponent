import React, { Component } from 'react';

//components
import FormComponent from './components/controlComponents/FormComponent';
//import Header from './components/infoComponents/Header';

//css
import '../node_modules/spectre.css/dist/spectre.min.css';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="col-md-9 centered">
            <h3>React.js Controlled Form Components</h3>
            <FormComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
