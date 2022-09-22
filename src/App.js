import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import KeyDetails from './KeyDetails';
import evieOrganized from '../public/assets/evieOrganized.png'
import './App.css';
const demo = { url: evieOrganized, rarity: "67.6%", forSale: false, owned: true, setName: "EVIE SET", name: "Evie Organized", number: 82, price: 75 }
const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/gallery" render={(props) => <KeyDetails {...demo} {...props}/>}/>
  </Switch>
);

export default App;
