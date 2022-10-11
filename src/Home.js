import React, { useState } from "react";
import graphic from "../public/assets/ERC_GALLERY_GRAPHIC_1.png";
import Navbar from "./Navbar";
import styled from "styled-components";
import {useHistory } from "react-router-dom";
import Button from "./Button";
import Footer from "./Footer";

const Container = styled.div`
  text-align: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Graphic = styled.img`
  width: inherit;
  height: 100%;
  justify-self: center;
`;

const Main = styled.div`
  height: 73%;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;
const Interact = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
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
margin-left: 24px;
`;
const Build = styled((props) => <Button {...props} />)`
  max-width: 195px;
  max-height: 44px;
  margin-top: 2%;
`;
const Gallery = styled((props) => <Button {...props} />)`
  max-width: 189px;
  max-height: 44px;
  margin-left: 24px;
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  width: 686px;
  margin-left: 25%;
  margin-top: 5%;
`;
const Selector = styled.span`
  height: 44px;
  width: 540px;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
`;

const Option = styled.option`
  width: 71px;
  height: 20px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #999999;
`;



const Home = () => {
     const [networkSelection, setNetwork] = useState('ethereum');
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
                Select Network{" "}
                <NetworkSelector type={"select"} value={networkSelection} onChange={setNetwork}>
                  <Option value={'ethereum'} >Ethereum</Option>
                </NetworkSelector>
                <Gallery
                  label="See Gallery"
                  size="m"
                  decorative
                  backgroundColor="primary"
                  onClick={history.push(`/gallery/${networkSelection}`)}
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
            <Graphic src={graphic} />
          </Display>
        </Main>
       <Footer/>
      </Container>
    );
}

export default Home;
