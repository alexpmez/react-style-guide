import React, { Component } from 'react';
import AppData from '../AppData';
import './Buttons.scss';

interface MyProps {

}

interface MyState {
  value: string
}

class Buttons extends Component<MyProps, MyState>{
  state = {
    buttonsSec: [] as Array<any>,
    btnsIcon: {
      btns: [] as Array<any>,
      btnsCode: [] as Array<any>
    },
    btns: {
      btns: [] as Array<any>,
      btnsCode: [] as Array<string> 
    },
    seconSubHeader: null as any,
    cards: [] as Array<any>
  }

  componentDidMount(){
    //To make sure that we can get the element that has been render that is using "ref=", once the component is mounted...
    //replace the current state a new state that has what has been render, so we can force react to update the DOM with the btnsCode array and the latest render code.
    if(this.state.btnsIcon.btnsCode.length === AppData.buttons[0].btns.length && this.state.btns.btnsCode.length === AppData.buttons[1].btns.length) {
      this.setState({...this.state});
    }
  }

  render () {

    //Store the array lengths to make the code more readable
    const arrayLengths = {
      btnsIcons: this.state.btnsIcon.btns.length,
      btns: this.state.btns.btns.length,
      btnsAppData: AppData.buttons[0].btns.length,
      btnsIconAppData: AppData.buttons[1].btns.length,
      btnsIconCode: this.state.btnsIcon.btnsCode.length,
      btnsCode: this.state.btns.btnsCode.length
    }


    //Push the btns code that we are accessing via "ref=" once the page is render
    const pushBtnsCode = (withIcon:boolean, refBtnEl:any) => {
      //if the two buttons codes array and have all their elements exit the function.
      if (arrayLengths.btnsIconCode === arrayLengths.btnsAppData && arrayLengths.btnsCode === arrayLengths.btnsIconAppData) return;
      //Check if the ref button element is not null
      if(refBtnEl !== null) {
        //If this is a button icon object push to the right array the rendered button element
        if(withIcon) {
          this.state.btnsIcon.btnsCode.push(refBtnEl.outerHTML);
        } else {
          this.state.btns.btnsCode.push(refBtnEl.outerHTML);
        }
      }
    }

    //Thi is for the second subheader so we make sure it's only display once
    const getSubHeader = (withIcon:string, el:any) => {
      this.setState({...this.state, seconSubHeader: null});
      if(withIcon) {
      this.setState({...this.state, seconSubHeader: <h3 className="sub-header">{el['sub-header']}</h3>});
      }
    }

    //Push the icons or not icons button elements to the right array
    const getButtons = (withIcon:boolean, appDataButtons:any, buttonsBtns:any, i:number) => {
      if(arrayLengths.btns !== arrayLengths.btnsAppData && arrayLengths.btnsIcons !== arrayLengths.btnsIconAppData) {
        if(withIcon) {
          this.state.btnsIcon.btns.push(<button ref={(refEl) => { pushBtnsCode(withIcon, refEl) }} className={"btn btn-" + buttonsBtns}><i className={"cmps-" + appDataButtons['btns-icons'][i]}></i><span>{appDataButtons['sub-header']}</span></button>);
  
        } else {
          this.state.btns.btns.push(<button  ref={(refEl) => { pushBtnsCode(withIcon, refEl) }}className={"btn btn-" + buttonsBtns}>{buttonsBtns}</button>);
        }
      }
    }

    return (
      <section className="buttons-sec">
        {AppData.buttons.map((el:any) => {
        el.btns.forEach((elBtns:any, i:any) => {
          getButtons(el['with-icon'], el, elBtns, i);
        });
        //get subheader if is the icon section
        getSubHeader(el['with-icon'], el);
        return (
          <div>
          {this.state.seconSubHeader}
          <div className={el['with-icon'] ? 'card card-btn-with-icons-sec' : 'card'}>
            <div className="card-top">
              {el['with-icon'] ? this.state.btnsIcon.btns : this.state.btns.btns}
            </div>
            <div className="card-body">
              {(el['with-icon'] ? this.state.btnsIcon.btnsCode : this.state.btns.btnsCode).map(i => <p>{i}</p>)}
            </div>
          </div>
          </div>)
      })}
        {this.props.emitLoaded(this.props.id)}
      </section>
    );
  }
}

export default Buttons;