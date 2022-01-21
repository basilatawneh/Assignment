import React from 'react';
import classes from './App.module.sass';
import Button from './components/button/button.component';
import Consultants from './components/consultants/consultants.component'
import Header from './components/header/header.component';

function App() {
  const header = 'Professional, licensed, immigration consultants who you can trust'
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Header header={header} />
        <Consultants />
        <div className={classes.description}>
          Tap into the world's largest network of licensed, accredited, and experienced immigration consultants who can help you with ...
        </div>
        <Button label={'Check Proper Programs'} />
      </div>
    </div>
  );
}

export default App;
