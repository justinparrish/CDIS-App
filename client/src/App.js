import React from 'react';
import './App.css';
import { Menu, Segment } from 'semantic-ui-react'

const docs = {
  name: 'tenia',
  patient : {
    name: 'maryland'
  }
}


class App extends React.Component {
  state = {
    employee: docs
  }

  render() {
    return (
      <div className='container'>
        <h1>CDIS APP</h1>
      </div>
    );
  }
}

  export default App;
