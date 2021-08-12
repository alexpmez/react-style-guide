import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import AppData from './components/AppData';
import Nav from './containers/Nav/Nav';
import Branding from './components/Branding/Branding';
import Colors from './components/Colors/Colors';
import Clients from './components/Clients/Clients';
import Typography from './components/Typography/Typography';
import Buttons from './components/Buttons/Buttons';
import Icons from './components/Icons/Icons';
import PopupsModals from './components/PopupsModals/PopupsModals';
import Forms from './components/Forms/Forms';
import Tables from './components/Tables/Tables';
import Headers from './components/Headers/Headers';
import Home from './components/Home/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props:any) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  componentWillReceiveProps(nextProps:any) {
    console.log('[UPDATE App.js] Inside componentWillReceiveProps', nextProps);
  }

  //If this function return anything but true, it will stop the render() method from executing when the component is updated.
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  // }

  componentWillUpdate(nextProps:any, nextState:any) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  state:any = {
    AppComponents: [
      {compt: Home, id: 0},
      {compt: Branding, id: 1},
      {compt: Colors, id: 2},
      {compt: Typography, id: 3},
      {compt: Buttons, id: 4},
      {compt: Icons, id: 5},
      {compt: Clients, id: 6},
      {compt: PopupsModals, id: 7},
      {compt: Forms, id: 8},
      {compt: Tables, id: 9}
    ],
    currentId: null,
    currentSecName: ""
  };

  //assign loaded component id to state's currentId
  loadedHandler = (id:number, name:string) => {
    //check that state's currentId is not equal to this function parameter's id
    if(this.state.currentId !== id) {
      this.setState({currentId: id, currentSecName: name});
      console.log("currentId: " + this.state.currentId + " | currentSecName: " + this.state.currentSecName);
    }
  }

  render() {
    //const {isFetching} = this.state;

    console.log('[App.js] Inside render');
    const AppRoutes = [];

    //loop through state's AppComponents array
    for (const el of this.state.AppComponents) {
      //check if json's id (AppData) equal state's AppComponents id
      const result:any = AppData.navItems.find((jsonid:any) => el.id === jsonid.id);
      if(result !== null) {
        AppRoutes.push(
          <Route 
          key={el.id}
          path={`/${result.path}`}
          exact
          render={() => (
            generateDynamicComponent(el.compt, { emitLoaded: this.loadedHandler, id: el.id, name: result.name })
          )} />
        );
      }
    }

    const headerSec = (currentId:any, currentSecName?:string) => {
      if(currentId !== 0){
          return <Headers currentId={currentId} currentSecName={currentSecName} />
      }
    }

    return (
      <BrowserRouter>
      {/* {isFetching ? <div>Loading...</div> : ()} */}
      <div className="App">
        <Nav />
        <div className="main">
          {/*pass the current id to the headers' component*/}
          {headerSec(this.state.currentId)}
          {/* {headerSec(this.state.currentId, this.state.currentSecName)} */}
          {AppRoutes}
          {/* {this.state.AppComponents.map(el => ({dat: AppData.find((elid) => el.id ===  elid.id), comp: el})).filter(el => el.dat).map(el => <Route key={el.dat.id} path={`/${el.dat.path}`} exact component={el.comp.compt} />)} */}
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

const generateDynamicComponent = (component:any, routerProps:any, props?:any) => {
  let MyComponent = component;
  return <MyComponent {...routerProps} {...props} />;
}

export default App;
