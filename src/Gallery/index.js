import React, { useEffect, useState, useReducer } from "react";
import styled from "styled-components";
import KeyDetails from "./KeyDetails";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SearchPanel from "./SearchPanel";
import decoBG from "../../public/assets/deco-bg.png";
import NetworkAndSortSelectors from "./NetworkAndSort";
import CategorySelector from "./CategorySelector";
import useDeepCompareEffect from "use-deep-compare-effect";
import { IgnorePlugin } from "webpack";
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

const attributeFilterFunction = (predicates, nfts, categories) => {
  let map = new Map();
  predicates.forEach((predicate) => {
    map.has(predicate.category)
      ? map.get(predicate.category).push(predicate.value)
      : map.set(predicate.category, [predicate.value]);
  });
  const filtered = nfts.filter((nft) => {
    //some face items are true & some glasses items are true && some skin items are true && some outfit items are true
    const truthArray = categories.map(category => {
      let truthValue = true
      if(map.get(category)){
        truthValue =  map.get(category).includes(nft.attributes[category])
      } else {
        // console.log('returning null')
        truthValue = true
      }
      return truthValue
    })
    console.log(truthArray)
    return !truthArray.includes(false)
  })
  console.log(nfts)
  console.log(filtered)
  return filtered;
};


const sumFunction = (prev, curr) => {
  return prev + parseInt(curr)};
const filter = (nfts, selectedCategory, attributes) => {
  const categories = Object.keys(attributes);
  const values = Object.values(attributes)
  const mergedArray = [].concat(...values);
  const sum = mergedArray.reduce(sumFunction, 0);
  if (sum > 0) {
    let attributePredicate = [];
    categories.forEach((cat, index) => {
      const attributeArray = attributes[cat];
      attributeArray.forEach((attribute, i) => {
        if (attribute === 1) {
          attributePredicate.push({
            category: categories[index],
            value: index,
          });
        }
      });
    });

    let attributeFilteredNFTs = attributeFilterFunction(attributePredicate, nfts, categories)
    if (selectedCategory === "For Sale") {
      const predicate = (nft) => nft.forSale === true;
      return attributeFilteredNFTs.filter(predicate);
    } else if (selectedCategory === "Owned") {
      const predicate = (nft) => nft.owned === true;
      return attributeFilteredNFTs.filter(predicate);
    } else {
      return attributeFilteredNFTs;
    }
  } else {
    if (selectedCategory === "For Sale") {
      const predicate = (nft) => nft.forSale === true;
      return nfts.filter(predicate);
    } else if (selectedCategory === "Owned") {
      const predicate = (nft) => nft.owned === true;
      return nfts.filter(predicate);
    } else {
      return nfts;
    }
  }
};

const sort = (nfts, sortBy) => {
  const forsale = nfts.filter((nft) => nft.forSale === true);
  const notforsale = nfts.filter((nft) => nft.forSale === false);
  let compareFn;
  let sorted;
  switch (sortBy) {
    case "lowToHigh":
      compareFn = (a, b) => a.price - b.price;
      sorted = forsale.sort(compareFn);
      sorted.push(...notforsale);
      break;
    case "highToLow":
      compareFn = (a, b) => b.price - a.price;
      sorted = forsale.sort(compareFn);
      break;
    case "rarityAscending":
      compareFn = (a, b) => a.rarity - b.rarity;
      sorted = nfts.sort(compareFn);
      break;
    case "rarityDescending":
      compareFn = (a, b) => b.rarity - a.rarity;
      sorted = nfts.sort(compareFn);
  }

  return sorted;
};

const criteriaReducer = (state, action) => {
  const currentValue = state[action.category][action.attribute];
  const newValue = 1 - currentValue;
  const newArray = [...state[action.category]];
  newArray.splice(action.attribute, 1, newValue);
  const newState = {
    ...state,
    [`${action.category}`]: newArray,
  };
  return newState;
};

export default ({ nfts }) => {
  const [selectedCategory, selectCategory] = useState("All");
  const [selectedNetwork, selectNetwork] = useState();
  const [sortBy, setSortBy] = useState("highToLow");
  const [sortedNFTS, setSortedNFTS] = useState(nfts);
  const [criteriaChanged, setCriteriaChangedCount] = useState(0);
  const [selectedCriteria, dispatch] = useReducer(criteriaReducer, {
    face: [0, 0, 0, 0, 0],
    glasses: [0, 0, 0, 0, 0],
    outfit: [0, 0, 0, 0, 0],
    skin: [0, 0, 0, 0, 0],
  });

  useDeepCompareEffect(() => {
    setCriteriaChangedCount(criteriaChanged + 1);
  }, [selectedCriteria]);

  useEffect(() => {
    const filtered = filter(nfts, selectedCategory, selectedCriteria);
    const sorted = sort(filtered, sortBy);
    setSortedNFTS(sorted);
  }, [sortBy, selectedCategory, criteriaChanged]);
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
        <SearchPanel
          networkToken={"ETH"}
          selectedCriteria={selectedCriteria}
          dispatch={dispatch}
        />
        <Gallery>
          {sortedNFTS.map((value) => {
            return <KeyDetails key={value.number} {...value} />;
          })}
        </Gallery>
      </Main>
      <Footer />
    </Page>
  );
};
