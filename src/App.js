import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import evieOrganized from '../public/assets/evieOrganized.png'
import './App.css';
const demo = { url: evieOrganized, rarity: "67.6%", forSale: false, owned: true, setName: "EVIE SET", name: "Evie Organized", number: 82, price: 75 }
const setsize = Math.floor(Math.random() * 100)
const set = Array.from(Array(setsize).keys())
const nfts = set.map((value) => ({...demo, number: value, forSale: (Math.random() < 0.5), owned: (Math.random() < 0.5)}))

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/gallery/:network" render={(props) => <Gallery nfts={nfts} {...props}/>}/>
  </Switch>
);

export default App;
