import React from 'react';
import './App.css';
import { Menu, Segment } from 'semantic-ui-react'

function App() {
  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item 
          name='home'
        />
      </Menu>
    </div>
  );
}

export default App;
