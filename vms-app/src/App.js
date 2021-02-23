import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListVehiclesComponent from './components/ListVehiclesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateVehicleComponent from './components/CreateVehicleComponent';
import ViewVehicleComponent from './components/ViewVehicleComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListVehiclesComponent}></Route>
                          <Route path = "/vehicles" component = {ListVehiclesComponent}></Route>
                          <Route path = "/add-vehicle/:id" component = {CreateVehicleComponent}></Route>
                          <Route path = "/view-vehicle/:id" component = {ViewVehicleComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
