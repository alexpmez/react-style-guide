import React, { Component } from 'react';
import AppData from '../AppData';
import './Colors.scss';

const Colors = props => {
  const colorCards = [];
  let colorValues = [];
  let changedValues = [];
  //let colorVariable = [];

  //loops through the 3 elements of the rgb-values array, assign them to colorValues array and call rbgGenertor.
  const getColor = (rbgValue, shade) => { 
    for(const elrgb of rbgValue) {
      //if colorValues array doesn't have more than 3 digits assign the 3 elements of rgb-values
      if(colorValues.length < rbgValue.length ) {
        colorValues.push(elrgb);
      } else {
        //delete elemets of colorValues and then assign the 3 elements of rgb-values
        colorValues = [elrgb];
      }
    }

    return rbgGenertor(shade);
  }

  //If the argument is undefined, Gets the values from the colorValues array and returned a concatenated rgb color
  const rbgGenertor = shade => {
    //if an argument was passed, return and call changeShade function
    if(shade !== undefined) {
      return changeShade(shade);
    }

    //if not argument was passed, call rbgConcatenator and pass the name of colorValues array
    return rbgConcatenator(colorValues);
  }

  //According to the value of the passed argument, change the values of the changedValues array
  const changeShade = shade => {
    if(shade === 'lighter') {
      //loop throught colorValues array, subtract 10 to each of it's elements, then assign them to changedValues
      changedValues = colorValues.map(numb => {return numb  - 10});
    } else if(shade === 'darker') {
      //loop throught colorValues array, add 10 to each of it's elements, then assign them to changedValues
      changedValues = colorValues.map(numb => {return numb  + 10});
    }

    //call rbgConcatenator and pass the name of changedValues array
    return rbgConcatenator(changedValues);
  }

  //return the contactenation of the 3 elements of passed array name into an valid rgb color.
  const rbgConcatenator = valuesArray => {
    return "rgb(" + valuesArray[0] + ", " +  valuesArray[1] + ", " + valuesArray[2] + ")";
  }
  
  //loop through the colorArray in the appData (colors array in json)
  for(const el of AppData.colorArray) {
    //assign the color cards to colorCards array
    colorCards.push(<div className="card" key={props['currentId']}>
      <div className="card-body">
        <p className="title">{el.name}</p>
          {/* call getColor and pass the rgb-values array of the current looped element */}
          <div className="color-swatch" style={{backgroundColor: getColor(el['rgb-values'])}}>
          {/* call getColor and pass the rgb-values array of the current looped element and the 'darker' string.*/}
          <div className="left-panel" style={{backgroundColor: getColor(el['rgb-values'], 'darker')}}></div>
          {/* call getColor and pass the rgb-values array of the current looped element and the 'lighter' string.*/}
          <div className="right-panel" style={{backgroundColor: getColor(el['rgb-values'], 'lighter')}}></div>
        </div>
      </div>
      <p className="color-swatch-code">{getColor(el['rgb-values'])}</p>
      <p className="color-variable">{el['color-variable']}</p>
    </div>)
  }

  return (
    <section className="color-sec" >
      <div className="cards">
        <div className="colors-instructions">The following colors should only be implemented by using the existing color's variables, with generic
        names likes $cpms-blue, $cmps-green, $cmps-green-dark. These variables can be found under scss/_variables.scss</div>
        {colorCards}
      </div>
      {/*share this component id to the rest of the app*/}
      {props.emitLoaded(props.id)}
    </section>
  );
}

export default Colors;