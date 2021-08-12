import React, { Component } from 'react';
import AppData from '../AppData';
import './Tables.scss';

class Tables extends Component {
  state = {
    rows: AppData.tables.rows
  }

  constructor(props) {
    super(props);
    //this.state={rows:AppData.tables.rows};
  }

  rowsGen() {
    let rowsArray = [];
    let rowKeys = [];

    //Add the AppData tables rows array first element keys to the rowKeys array
    rowKeys = Object.keys(AppData.tables.rows[0]);
    //Remove the first element from the array so we only have left the 3 keys name we need
    rowKeys.shift();

    this.state.rows.forEach((el, i) => {
      rowsArray.push(
        <tr key={i}>
          <th scope="row">{el.id}</th>
          {rowKeys.map(k => <td>{el[k]}</td>)}
        </tr>
      );
    });
   
    return rowsArray;
  }

  sorting = (keyName, iconsIndex) => {
    console.log("sorting this.state.iconsIndex value is ", this.state.iconsIndex);
    const asc = !this.state.asc;
    const next = [...this.state.rows].sort((a, b) => {
        const aNumbKey = a[keyName];
        const bNumbKey = b[keyName];
        
        //check if keyName is a number
        if(typeof aNumbKey === 'number') {
          return asc ? aNumbKey - bNumbKey : bNumbKey - aNumbKey;
        }
  
        //if is not a number make them both lowecare and compare them
        return asc ? aNumbKey.toLowerCase().localeCompare(bNumbKey.toLowerCase())
        : bNumbKey.toLowerCase().localeCompare(aNumbKey.toLowerCase());
      }
    );
    this.setState({...this.state, rows:next, asc});

    this.toggleArrow(iconsIndex);

  }

  toggleArrow = (headerJsonObject) => {
    //console.log("toggleArrow was called & iconsIndex: ", iconsIndex);
    if(headerJsonObject.iconIndex === 0) {
     // console.log("toggleArrow icons className: ", AppData.tables.icons[this.state.iconsIndex] + " index: ", this.state.iconsIndex);
     headerJsonObject.iconIndex = 1;
    } else {
      //console.log("toggleArrow icons className: ", AppData.tables.icons[this.state.iconsIndex]);
      headerJsonObject.iconIndex = 0;
    }
  }

  headerGen = () => {
    const header = [];
    let headerIcon = "";
    AppData.tables.header.forEach((el, i) => {
      if(AppData.tables.icons){
        const rowKeys = Object.keys(AppData.tables.rows[0]);
        headerIcon = <i onClick={() => {this.sorting(rowKeys[i], el)}} className={"cmps-" + AppData.tables.icons[el.iconIndex]}></i>;
        // headerIcon = <i onClick={() => this.sorting(rowKeys[i])} className={"cmps-" + el.icons[0]}></i>;
      }

      header.push(
        <th scope="col" className="table-header">{el.label}
          {headerIcon}
        </th>
      );
    });

    return header
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.rows !== this.state.rows;
  }

  render () {
    return (
      <section className="tables-sec">
        <div className="tables-sec-item">
          <table className="table table-hover">
            <thead>
              <tr>{this.headerGen()}</tr>
            </thead>
            <tbody>
              {this.rowsGen()}
            </tbody>
          </table>
        </div>
        {/*share this component id to the rest of the app*/}
        {this.props.emitLoaded(this.props.id)}
      </section>
    )
  }
}

export default Tables;