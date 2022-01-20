import React from 'react';
import classes from './App.module.sass';
import Consultants from './components/consultants/consultants.component'
import Header from './components/header/header.component';

function App() {
  const header = 'Professional, licensed, immigration consultants who you can trust'
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Header header={header} />
        <Consultants />
      </div>
    </div>
  );
}

export default App;
