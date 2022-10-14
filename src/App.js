import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery/index.js';
import evieOrganized from '../public/assets/evieOrganized.png';
import evieNoRadius from "../public/assets/evieNoRadius.png";
import Details from "./Gallery/Details"
import About from './About';
import ListForSale from './Gallery/ListForSale';
import './App.css';
const demo = { url: evieOrganized, rarity: "67.6%", forSale: false, owned: true, setName: "Evie Set", name: "Evie Organized", number: 13, price: 75 }
const setsize = Math.floor(Math.random() * 100)
const set = Array.from(Array(setsize).keys())
const nfts = set.map((value) => ({...demo, number: value, forSale: (Math.random() < 0.5), owned: (Math.random() < 0.5)}))
export const example = {
    collectionSize: 24,
    owner: "1234567890987654321",
    attributes: [
      {name: "Pride", value: "pride", howMany: 4},
      {name: "Lust", value: "lust", howMany: 4},
      {name: "Envy", value: "envy", howMany: 4},
      {name: "Gluttony", value: "gluttony", howMany: 4},
      {name: "Wrath", value: "wrath", howMany: 4},
      {name: "Sloth", value: "sloth", howMany: 4},
    ],
    price: 24,
    basePrice: 16,
    discoveryFee: 4,
    royaltyFee: 4,
    ...demo,
    url: evieNoRadius,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    networkToken: "ETH"
}
const App = () => {
  const location = useLocation()
  const background = location.state && location.state.background;
  console.log(location)
  console.log(background)
  return (
    <div>
      <Switch location={background || location}>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/gallery/:network" render={(props) => <Gallery nfts={nfts} {...props}/>}/>
    <Route exact={true} path="/gallery/detail/:id" component={Details} />
    {/* <Route exact={true} path="/gallery/list/:id" component={Details} />  */}
    <Route exact={true} path="/about" component={About}/>
  </Switch>
  {background && <Route path="/gallery/list/:id" children={<ListForSale />} />}
    </div>
)};

export default App;
