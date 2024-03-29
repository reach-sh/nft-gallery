import React, { useEffect, useState } from "react";
import styled from "styled-components";
import KeyDetails from "./KeyDetails";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SearchPanel from "./SearchPanel";
import decoBG from "../../public/assets/deco-bg.png";
import NetworkAndSortSelectors from "./NetworkAndSort";
import CategorySelector from "./CategorySelector";
const categories = ["All", "For Sale", "Owned"];

const Page = styled.div`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
    background: #000000;
  @media only screen and (max-width: 375px) {
    max-width: 375px;
  }
`;
const Gallery = styled.div`
  display: grid;
  grid-template-columns: 400px 400px 400px;
  width: 1300px;
  height: auto;
  overflow-x: hidden;
  gap: 24px;
  margin-top: 52px;
  margin-left: 48px;
  @media only screen and (max-width: 375px) {
    width: 375px;
    grid-template-columns: 150px 150px;
    margin-top: 125px;
    margin-left: 0px;
    column-gap: 38px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  background: #000000;
  background-image: url(${decoBG}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media only screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

const Header = styled.div`
  background: #000000;
  max-width: 355px;
  height: 90px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 90px;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  align-self: center;
  margin-top: 64px;
  @media only screen and (max-width: 375px) {
    width: 230px;
    height: 60px;
    font-size: 60px;
    line-height: 60px;
  }
`;

const TopInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;


const sort = (nfts, sortBy) => {
  // console.log(nfts)
  console.log(sortBy)
  const forsale = nfts.filter((nft) => (nft.forSale === true))
  const notforsale = nfts.filter((nft) => (nft.forSale === false))
  let compareFn;
  switch (sortBy) {
    case 'lowTohigh':
      compareFn = (a, b) => a.price - b.price
      break;
      case 'highToLow':
        compareFn = (a, b) => ( b.price - a.price)
        break;
      case 'rarityAscending':
        compareFn = (a, b) => a.rarity - b.rarity
        break;
      case 'rarityDescending':
        compareFn = (a,b) => b.rarity - a.rarity
      }
      let sorted =  forsale.sort(compareFn)
      sorted.push(...notforsale)
      return sorted
    }
    
    export default ({ nfts }) => {
      const [selectedCategory, selectCategory] = useState("All");
      const [selectedNetwork, selectNetwork] = useState();
      const [sortBy, setSortBy] = useState('highToLow');
      const [sortedNFTs, setSortedNFTS] = useState(nfts)
      
    useEffect(() => {
    const sorted = sort(nfts, sortBy)
    setSortedNFTS(sorted)
  }, [sortBy])
  return (
    <Page>
      <Navbar />
      <Header>{nfts[0].setName}</Header>
      <TopInfo>
        <CategorySelector
          categories={categories}
          selected={selectedCategory}
          changeHandler={selectCategory}
        />
        <NetworkAndSortSelectors
          selectedNetwork={selectedNetwork}
          selectNetwork={selectNetwork}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </TopInfo>
      <Main>
        <SearchPanel networkToken={"ETH"} />
        <Gallery>
          {sortedNFTs.map((value) => (
            <KeyDetails key={value.number} {...value} />
          ))}
        </Gallery>
      </Main>
      <Footer />
    </Page>
  );
};
