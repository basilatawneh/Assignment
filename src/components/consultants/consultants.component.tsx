import React from 'react';

import classes from './consultants.module.sass';

import Consultant from './consultant/consultant.component';
import useConsultants from '../../hooks/consultants.hook';

export interface IProps { }

const Consultants = (props: IProps) => {
  const photos = useConsultants();
  return (
    <div className={classes.container}>
      {photos.loading && <div className={classes.loading}>Loading...</div>}
      {!photos.loading && photos.results.map(item => <Consultant src={item.thumbnailUrl} key={item.id} />)}
    </div>
  )
};

export default Consultants;
