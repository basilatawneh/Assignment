import React from 'react';

import classes from './button.module.sass';

export interface IProps {
  label: string;
}

const Button = (props: IProps) => {
  return (
    <div className={classes.container}>
      <button>{props.label}</button>
    </div>
  )
}

export default Button;