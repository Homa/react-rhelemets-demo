import React from 'react';
import './App.css';
import CardsBand from './components/CardsBand';
import AddCard from './components/AddCard';
import AddIconPanel from './components/AddIconPanel';

const App = () => {
  return (
    <div className="App">
      <CardsBand></CardsBand>
      <AddCard></AddCard>
      <AddIconPanel></AddIconPanel>
    </div>
  );
}

export default App;
