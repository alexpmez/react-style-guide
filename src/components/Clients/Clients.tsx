import React from 'react';
import './Clients.scss';
import AppData from '../AppData';
import fido from '../../assets/img/clients/fido/logo.svg';
import fidoBg from '../../assets/img/clients/fido/background-01.jpg';
import gbt from '../../assets/img/clients/gbt/logo.svg';
import gbtBg from '../../assets/img/clients/gbt/background-01.jpg';
import m1 from '../../assets/img/clients/m1/logo.png';
import m1Bg from '../../assets/img/clients/m1/background-01.jpg';
import rogers from '../../assets/img/clients/rogers/logo.svg';
import rogersBg from '../../assets/img/clients/rogers/background-01.jpg';
import td from '../../assets/img/clients/td/logo.svg';
import tdBg from '../../assets/img/clients/td/background-01.jpg';

const clients = props => {
  console.log('client props: ', props.id);

  let clientArray = [];
  const clientSecs = [ 
    { logo: fido, "background-image": fidoBg }, 
    { logo: gbt, "background-image": gbtBg }, 
    { logo: m1, "background-image": m1Bg }, 
    { logo: rogers, "background-image": rogersBg },
    { logo: td, "background-image": tdBg } 
  ];

  const clientGen = () => {
    clientSecs.forEach((el, i) => {
      clientArray.push(
        <li className={"clients " + "client-" + AppData.clients[i]}>
          <h1 className="clients-header">{AppData.clients[i]}</h1>
          <div className="card">
            <div className="card-body">
             
              {/* <div className="col-12"> */}
                <div className="col-6 clients-logo">
                  <img src={el.logo} alt="Orbit" />
                </div>
                <div className="col-6 clients-backg">
                  <img src={el['background-image']} alt="Orbit" />
                </div>
              {/* </div> */}

            </div>
          </div>
        </li>
      );
    });

    return clientArray;
  }

  return (
    <section className="clients-sec">
      <div className="clients-sec-item">
        <ul>
          {clientGen()}
        </ul>
      </div>
      {/*share this component id to the rest of the app*/}
      {props.emitLoaded(props.id)}
    </section>
  )
}

export default clients;