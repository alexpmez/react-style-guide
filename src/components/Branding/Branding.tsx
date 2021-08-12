import React from 'react';
import './Branding.scss';
import logoVertical from '../../assets/img/orbit-logos/logo-vertical.svg';
import logoWhite from '../../assets/img/orbit-logos/logo-white.svg';
import logo from '../../assets/img/orbit-logos/logo.svg';
import AppData from '../AppData';

const branding = (props:any) => {
  //console.log('branding props: ', props.id);
  let logosArray:Array<any> = [];
  const logoSecs = [logo, logo, logoVertical, logoWhite];

  const logosGen = () => {
    //for each element on logoSecs array 
    logoSecs.forEach((el, i) => {
      logosArray.push(
        <div className="card">
          <div className={"logos-sec " + AppData.branding['orbit-logos'][i]}>
            <img className="card-img-top" src={el} alt="Orbit" />
          </div>
          <div className="card-body">
            <p className="card-text">{AppData.branding['card-text'][AppData.branding['orbit-logos'][i]]}</p>
          </div>
        </div>
      );
    });

    return logosArray;
  }

  return (
    <section className="branding-sec">
      <div className="branding-sec-item">
        {logosGen()}
      </div>
      {/*share this component id to the rest of the app*/}
      {props.emitLoaded(props.id)}
    </section>
  )
}

export default branding;