import React from 'react';
import classes from './consultant.module.sass';

export interface IProps {
  src: string
}
const Consultant = (props: IProps) => {
  return (
    <div className={classes.container}>
      <img src={props.src} alt='' />
    </div>
  )
}

export default Consultant;