import React from 'react'
import Delay from './components/Delay'
import Hover from './components/Hover'
import List from './components/List'
import Request from './components/Request'
import Input from './components/Input'

function App() {
  return (
    <div>
      <Input />
      <Hover />
      <List />
      <Delay />
      <Request />
    </div>
  );
}

export default App;
