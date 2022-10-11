import React, { useState } from "react";
import styled from "styled-components";
import KeyDetails from "./KeyDetails";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SearchPanel from "./SearchPanel";
import decoBG from "../../public/assets/deco-bg.png"
import NetworkAndSortSelectors from "./NetworkAndSort";
import CategorySelector from "./CategorySelector";
const categories = ["All", "For Sale", "Owned"];

const Page = styled.div`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  background: url(${decoBG}) no-repeat center center fixed #000000;
  background-position: 100% 100% ;
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
  `;

const Main = styled.div`
  display: flex;
  flex-direction: row;    
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
`;

const TopInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

`
export default ({ nfts }) => {
  const [selectedCategory, selectCategory] = useState("All");
  const [selectedNetwork, selectNetwork] = useState();
  const [sortBy, setSortBy] = useState();
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
          {nfts.map((value) => (
            <KeyDetails key={value.number} {...value} />
          ))}
        </Gallery>
      </Main>
      <Footer />
    </Page>
  );
};
