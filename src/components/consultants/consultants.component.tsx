import React from 'react';

import classes from './consultants.module.sass';

import Consultant from './consultant/consultant.component';
import useFetchPhotos from '../../hooks/fetch-photos.hook';

export interface IProps { }

const Consultants = (props: IProps) => {
  const photos = useFetchPhotos();
  return (
    <div className={classes.container}>
      {photos.loading && <div className={classes.loading}>Loading...</div>}
      {!photos.loading && photos.results.map(item => <Consultant src={item.thumbnailUrl} key={item.id} />)}
    </div>
  )
};

export default Consultants;
