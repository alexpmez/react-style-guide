import React from 'react';
import AppData from '../AppData';
import './Headers.scss';

const headers = props => {
  //console.log('headers ids: ', props['currentId']);
  const headerData = data => {
    //Loop through navItems
    for(const el of AppData.navItems) {
      //if navItems id the props id matched and is not home return the name or subheaver value of the current element
      if(el.id === props['currentId'] && el.name !== 'home') {
        return el[data];
      }
    }
  }

  return (
    <section className="header-sec">
      <div className="header">
        <h1>{headerData('name')}</h1>
        <p className="headers-line"></p>
      </div>
      <h3 className="sub-header">{headerData('subheader')}</h3>
    </section>
  )
}

export default headers;