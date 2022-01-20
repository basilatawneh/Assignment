import React from 'react';

import classes from './header.module.sass';

export interface IProps {
  header: string;
}

const Header = (props: IProps) => {
  return (
    <div className={classes.container}>
      {props.header}
    </div>
  )
}

export default Header;