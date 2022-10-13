import React, { useState, useEffect } from "react";
import graphic from "../public/assets/ERC_GALLERY_GRAPHIC_1.png";
import graphicMobile from "../public/assets/ERC_GALLERY_GRAPHIC_2.png";
import Navbar from "./Navbar";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "./Button";
import Footer from "./Footer";

const Container = styled.div`
  text-align: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  @media only screen and (max-width: 375px) {
    width: 375px;
    height: 1470px;
  }
`;

const Graphic = styled.img`
  width: inherit;
  height: 100%;
  justify-self: center;
  @media only screen and (max-width: 375px) {
    width: 375px;
    height: 518px;
    position: absolute;
    left: 0px;
    /* top: 755px; */
  }
`;

const Main = styled.div`
  height: 73%;
  width: 100vw;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 375px) {
    flex-direction: column;
    width: 375px;
  }
`;
const Interact = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media only screen and (max-width: 375px) {
    width: auto;
  }
`;
const Display = styled.div`
  width: 50vw;
  height: 100%;
`;

const Headline = styled.h2`
  max-width: 544px;
  max-height: 336px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 84px;
  color: #000000;
  margin-left: 25%;
  @media only screen and (max-width: 375px) {
    width: 344px;
    height: 300px;
    font-weight: 700;
    font-size: 60px;
    line-height: 60px;
    margin-left: 16px;
  }
`;

const Subtext = styled.div`
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  text-align: left;
  margin-left: 25%;
  max-width: 686px;
  max-height: 56px;
  @media only screen and (max-width: 375px) {
    width: 344px;
    height: 60px;
    font-family: "Reach Favorit";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-left: 16px;
  }
`;

const NetworkSelector = styled.select`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
  gap: 8px;
  width: 191px;
  height: 40px;
  border: 1px solid #999999;
  border-radius: 8px;
  /* margin-left: 24px; */
  justify-self: flex-start;
  align-self: center;
  @media only screen and (max-width: 375px) {
    margin-top: -36px;
    margin-left: -24px;
    padding: 8px;
    align-self: center;
  }
`;
const Build = styled((props) => <Button {...props} />)`
  max-width: 195px;
  max-height: 44px;
  margin-top: 2%;
  white-space: nowrap;
  @media only screen and (max-width: 375px) {
    margin-top: 80px;
    margin-left: 16px;
    width: 149px;
    height: 32px;
  }
`;
const Gallery = styled((props) => <Button {...props} />)`
  max-width: 189px;
  max-height: 44px;
  margin-left: 24px;
  @media only screen and (max-width: 375px) {
    justify-self: flex-start;
    margin-left: 16px;
  }
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  width: 686px;
  margin-left: 25%;
  margin-top: 5%;
  @media only screen and (max-width: 375px) {
    width: 375px;
    margin-left: 16px;
    flex-direction: column;
  }
`;
const Selector = styled.div`
  height: 44px;
  width: 540px;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  justify-content: space-between ;
  align-content: flex-end;
  p{
    position: relative;
    justify-self: center;
    height: 20px;
  }
  @media only screen and (max-width: 375px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    text-align: center;
  }
`;

const Option = styled.option`
  width: 71px;
  height: 20px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 300e;
  font-size: 16px;
  line-height: 20px;
  color: #999999;
`;

const SelectNetwork = styled.label`
  /* margin-top: 24px; */
  display: flex;
  height: 40px;
  vertical-align: center;
  justify-self: center ;
  justify-content: center;
`

const Home = () => {
  const [networkSelection, setNetwork] = useState("ethereum");
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 376px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const history = useHistory();
  return (
    <Container>
      <Navbar />
      <Main>
        <Interact>
          <Headline>
            Buy and sell NFTs [in] and [out] of the Reach Gallery
          </Headline>
          <Subtext>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Subtext>
          <Action>
            <Selector>
              <SelectNetwork>Select Network</SelectNetwork>
              <NetworkSelector
                type={"select"}
                value={networkSelection}
                onChange={setNetwork}
              >
                <Option value={"ethereum"}>Ethereum</Option>
              </NetworkSelector>
              <Gallery
                label="See Gallery"
                size="m"
                decorative
                backgroundColor="primary"
                onClick={() => history.push(`/gallery/${networkSelection}`)}
              />
            </Selector>
            <Build
              label="How to Build"
              size="m"
              decorative
              backgroundColor="main"
            />
          </Action>
        </Interact>
        <Display>
          <Graphic src={matches ? graphic : graphicMobile} />
        </Display>
      </Main>
      <Footer />
    </Container>
  );
};

export default Home;
