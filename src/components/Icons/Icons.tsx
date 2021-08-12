import React from 'react';
import AppData from '../AppData';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo, faFolder, faFileAlt, faFile, faChartArea, faChartBar, faSearch, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import './icons.scss';

const icons = props => {
  console.log("icons props id: " + props.id);
  //Adding to the font awsome library the icons we are using
  library.add(faRedo, faFolder, faFileAlt, faFile, faChartArea, faChartBar, faSearch, faCloudDownloadAlt);
  
  const secondSubHeader = (navArrays, iconsClass) => {
    for(const el of navArrays ) {
      if(el.name === "icons" && iconsClass === "font-awesome-icons"){
        return <p className="second-sub-header">{el.subheader2}</p>;
      }
    }
  }

  const iconGen = (iconsArray, iconClass) => {
    //check if the array we are in by checking the class that was passed
    const fontIconArray = iconClass === 'custom-icons' ? customIcons : fontAwesome;

    for(const el of iconsArray) {
      if(iconClass === 'custom-icons') {
        //loop through the custom-icons array and concatenate cmps- with the name of the font and add the custom-icons class 
        fontIconArray.push(<li className={'cmps-' + el + " " + iconClass}></li>);
      } else if(iconClass === 'font-awesome-icons') {
        //else if 
        fontIconArray.push(<li className={iconClass}><FontAwesomeIcon icon={['fas', el]} /></li>);
      }
    }
 
    return fontIconArray;
  }

  const iconsClass = ['custom-icons', 'font-awesome-icons'];
  const customIcons = [];
  const fontAwesome = [];
  const iconSections = [];

  for(const el of iconsClass) {
    iconSections.push(
      secondSubHeader(AppData.navItems, el),
      <div className="card">  
        <div className={'icons-sec-item ' + el}>
          <ul>
            {el === 'custom-icons' ?  iconGen(AppData.customIcons.icons, iconsClass[0]) : iconGen(AppData.fontAwesomeIcons.icons, iconsClass[1])}
          </ul>
        </div>
        <div className="card-body">
          <p className="card-text">{el === 'custom-icons' ?  AppData.customIcons['card-text'] : AppData.fontAwesomeIcons['card-text']}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="icons-sec">
      {/* {iconSecondSubHeader} */}
      {iconSections}
      {props.emitLoaded(props.id)}
    </section>
  )
}

export default icons;