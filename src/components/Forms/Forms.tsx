import React, { useState } from 'react';
import AppData from '../AppData';
import './Forms.scss';
//import App from '../../App';

const forms = props => {
  //store state function for each button
  const stateFunc = {
  }

  console.log('forms props: ', props.id);

  const alertGen = (message) => {
    const alerts =[];
    //console.log("AppData.forms: ", AppData.forms);
    for(const el of AppData.forms.alerts) {
      alerts.push(
        <div>
          {/* <h4 className="alert-title">{el.stage}</h4> */}
          <div className={"alert alert-" + (el.class)} role="alert">
            {"This is a " + el.stage + " alert!"}
          </div>
        </div>
      );
    }

    return alerts;

  }

  //Change the current state boolean value for the associated passed string
  const showHideToggle = (message) => {
    //From the stateFunc object, get the function assoiated with the passed argument string
    let currentState = stateFunc[message];

    //change the boolean value of the current state by passing the current state value with using "!"
    if(currentState) {
      return currentState[1](!currentState[0]);
    }
  }

  const buttonGen = (array) => {
    const buttons = [];
    AppData.forms[array].forEach((el) => {
      if(array === 'btns'){
        //Generate the two buttons at the bottom of the page
        buttons.push(<button className={`btn btn-${el['first-message']}`}>{`${el['first-message']} ${el['second-message']}`}</button>);
      } else {
        //Generate the buttons at the top of the page to hide and show form's errors and warning
        buttons.push(<button type="button" onClick={()=> showHideToggle(el)} className={`btn btn-${el}`}>
        {stateFunc[el] && stateFunc[el][0]  ? 'show' : 'hide'}<span> {el}</span>{" Message"}</button>);
      }
    });

    return buttons;
  }

  //assign key value pairs for each message string in the json alert-messages's array
  AppData.forms['alert-messages'].forEach((el) => {
    stateFunc[el] = useState(true);
  });
  

  return (
    <section className="forms-sec">
      <div className="show-hide-buttons">{buttonGen('alert-messages')}</div>
      <div className="forms-sec-item">
        {alertGen()}
        
        <form>
          <div className="form-group">
            <label>Input Label</label>
            <input type="email" className="form-control" placeHolder="Enter email"></input>
            <small className="form-text text-muted">Extra information goes here</small>
          </div>

          <div className="form-group error-message">
            <label>Input Label with Error Message</label>
            <input type="email" className="form-control" placeHolder="Enter email"></input>
            <small className="form-text text-muted"><i className="cmps-circle-close"></i>Extra information goes here</small>
          </div>

            {/* <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeHolder="Password" />
            </div> */}
          <div id="form-group-password" className="form-group">
            <label for="inputEmail3">Label for Dropdown</label>
            
            <select className="form-control" id="select_1">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
              <option>Option 6</option>
              <option>Option 7</option>
              <option>Option 8</option>
              <option>Option 9</option>
              <option>Option 10</option>
            </select>
          </div>
        </form>

        <div className="buttons">{buttonGen('btns')}</div>
      </div>
      {props.emitLoaded(props.id)}
    </section>
  )
}

export default forms;