import React from 'react';
import  AppData from '../AppData';
import './Home.scss';

const home = props => {
  console.log('home props: ', props.id);
  //console.log('AppData.navItems: ', AppData.navItems);
  return(
    <section>
      <div className="home">
        <h1 className="page-title">Orbit UI Style Guide</h1>
      </div>
      {props.emitLoaded(props.id)}
    </section>
  )
}

export default home;