import React from 'react';
import AppData from '../AppData';
import './PopupsModals.scss';


const popupsModals = props => {

  const popupsModalsArray = [];
  const popupsModalBtns = [];
  let secondSubHeaderArray = [];

  console.log('popupsModals props: ', props.id);
  
  AppData.popupsModals.forEach(el => {
    popupsModalBtns.push(
      <button type="button" className={"btn btn-" + (el['button-first'].copy === "save changes" ? "primary" : "secondary")}>{el['button-first'].copy}</button>
    );
  });

  const secondSubHeader = (i) => {
    for(const el of AppData.navItems) {
      if(el.id === props.id ){
        if(i === 1 && secondSubHeaderArray.length < 1){
          secondSubHeaderArray.push(<p className="second-sub-header">{el.subheader2}</p>);
        }
      }
    }
    if(secondSubHeaderArray.length === 1){
      return secondSubHeaderArray;
    }
  }

  const modals = () => {
    if(popupsModalsArray.length < AppData.popupsModals.length) {
      AppData.popupsModals.forEach((el, i) => {
        popupsModalsArray.push(
        <div>
          {secondSubHeader(i)}
          <div className="modals" tabIndex="-1" role="dialog">
            <div className={"modal-dialog" + (i === 0 ? "" : "modal-lg")} role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{el.title}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>{el.content}</p>
                </div>
                <div className="modal-footer">
                  {popupsModalBtns}
                </div>
              </div>
            </div>
          </div>
        </div>
        );
      });
    }

    return popupsModalsArray
  }

  return (
    <section className="popups-modals-sec">
      <div className="popups-modals-sec-item">{modals()}</div>
      
      {/*share this component id to the rest of the app*/}
      {props.emitLoaded(props.id)}
    </section>
  );
}

export default popupsModals;