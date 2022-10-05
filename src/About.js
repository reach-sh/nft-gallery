import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import divider from "../public/assets/red_vertical_divider.svg";

import decoBG from "../public/assets/deco_bg.svg";
import bot from "../public/assets/bot.svg";
import dummy from "../public/assets/dummy.svg";
import lock from "../public/assets/lock.svg";
import keyboard from "../public/assets/keyboard.svg";
import rocket from "../public/assets/rocket.svg";

const Bot = styled.img`
  width: 89.8px;
  height: 190.48px;
  position: absolute;
  margin-left: 195px;
`;

const Dummy = styled.img`
  width: 174.15px;
  height: 186.85px;
  align-self: center;
  margin-bottom: 38px;
`;
const Lock = styled.img`
  width: 65.31px;
  height: 89.8px;
  position: relative;
  margin-left: 15px;
  align-self: center;
  justify-self: flex-end;
`;

const Rocket = styled.img`
  position: absolute;
  width: 124.27px;
  height: 232.2px;
  align-self: flex-end;
  justify-self: center !important;
  top: 1670px;
`;

const Page = styled.div`
  width: 1920px;
  height: 2272px;
  background: #000000;
`;
const Top = styled.div`
  width: 1920px;
  height: 1005px;
  background: no-repeat url(${decoBG});
  display: flex;
  flex-direction: column ;
`;
const Middle = styled.div`
  width: 1920px;
  height: 296px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Bottom = styled.div`
  width: 1920px;
  height: 668px;
  background: #4536da;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const KeyBoard = styled.img`
  width: 281.19px;
  height: 267.58px;
  align-self: center;
`;

const Language = styled.div`
  display: flex;
  flex-direction: column;
  width: 330.17px;
  height: 330.17px;
  background: #ffffff;
  box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.2),
    0px 16px 40px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  justify-content: flex-end;
  margin-bottom: 80px;
  align-self: flex-end;
`;

const Divider = styled.img`
  height: 125px;
  margin-top: 86px;
`;

const CardNumber = styled.div`
  align-self: flex-start;
  margin-left: 8px;
  margin-bottom: 8px;
  position: absolute;
  width: 15px;
  height: 10px;
  font-family: Reach Mono;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 10px;
  color: #4536da;

`;

const Compiler = styled.div`
  display: flex;
  flex-direction: column;
  width: 330.17px;
  height: 507.95px;
  background: #ffffff;
  box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.2),
    0px 16px 40px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  align-self: flex-end;
  margin-bottom: 80px;
  justify-content: flex-end;
  gap: 28px;
`;

const Verifier = styled.div`
  width: 154px;
  height: 42px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  color: #e04747;
  align-self: center;
`;

const Optimizer = styled.div`
  width: 173px;
  height: 42px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  color: #ffffff;
  align-self: center;
  margin-left: 15px;
`;

const Devnet = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-bottom: 80px;
`;

const DevNet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 330.17px;
  height: 330.17px;
  background: #ffffff;
  box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.2),
    0px 16px 40px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
`;

const Deployer = styled.div`
  width: 330.17px;
  height: 507.95px;
  background: #ffffff;
  box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.2),
    0px 16px 40px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
  margin-bottom: 80px;
  gap: 28px;
`;

const Multichain = styled.div`
  width: 272.11px;
  height: 178.69px;
  border: 1px solid #e04747;
`;

const Deploy = styled.div`
  width: 272.11px;
  height: 178.69px;
  background: #e04747;
`;
const FeatureLabel = styled.div`
  align-self: center;
  color: #e04747;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  margin-bottom: 24px;
`;

const VerifySubCard = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #e04747;
  width: 272.11px;
  height: 178.69px;
  align-self: center;
  justify-content: center;
`;

const OptimizeSubCard = styled.div`
  display: flex;
  flex-direction: row;
  background: #e04747;
  width: 272.11px;
  height: 178.69px;
  align-self: center;
  justify-content: flex-start;
`;

const MultichainText = styled.div`
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  color: #e04747;
  width: 231px;
  height: 126px;
  margin-top: 29px;
  margin-left: 29px;
`;
const DeployText = styled.div`
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  width: 173px;
  height: 126px;
  color: #ffffff;
  margin-top: 37px;
  margin-left: 15px;
`;

const Headline = styled.div`
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 50px;
  color: #000000;
  margin-bottom: 26px;
`;
const Text = styled.div`
  height: 60px;
  width: 260px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;
const BragBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
`;

const Builders = styled.div`
width: 686px;
height: 270px;
font-family: 'Reach Favorit';
font-style: normal;
font-weight: 700;
font-size: 96px;
line-height: 90px;
color: #FFFFFF;
margin-left: 262px;
margin-top: 216px;

`;

const TextBox = styled.div`
  display: block;
  color: #ffffff;
  width: 686px;
  height: 166px;
  margin-left: 262px;
  margin-top: 54px;
`;

const SubTextA = styled.p`
  font-family: Reach Favorit;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const SubTextB = styled.p`
  font-family: Reach Favorit;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;

export default () => (
  <Page>
    <Navbar />
    <Top>
      <Builders>A language built <br/> by Builders</Builders>
      <TextBox>
        <SubTextA>
          {" "}
          Reach is a high-level web3 language built syntactically, like
          JavaScript, so full-stack developers feel right at home. Easy to learn
          and use, rather than pausing your business for months, developers can
          learn Reach in six weeks or even less, build fully functioning DApps
          from scratch, and then deploy to multiple blockchain networks.
        </SubTextA>
        <SubTextB>
          Making Reach the smartest, fastest, safest way to build blockchain
          applications.
        </SubTextB>
      </TextBox>
    </Top>
    <Middle>
      <BragBox>
        <Headline>Smartest</Headline>
        <Text>
          Developers codify business logic so entrepreneurs can focus on
          business operations.
        </Text>
      </BragBox>
      <Divider src={divider} />
      <BragBox>
        <Headline>Fastest</Headline>
        <Text>Reach developers can build MVPs in weeks, not months. </Text>
      </BragBox>
      <Divider src={divider} />
      <BragBox>
        <Headline>Safest </Headline>
        <Text>Apps built with Reach are automatically formally verified.</Text>
      </BragBox>
    </Middle>
    <Bottom>
      <Language>
        <KeyBoard src={keyboard} />
        <FeatureLabel>Language</FeatureLabel>
        <CardNumber>01</CardNumber>
      </Language>
      <Compiler>
        <VerifySubCard>
          <Verifier>Verifier</Verifier>
          <Lock src={lock} />
        </VerifySubCard>
        <OptimizeSubCard>
          <Optimizer>Optimizer</Optimizer>
          <Bot src={bot} />
        </OptimizeSubCard>
        <FeatureLabel>Compiler</FeatureLabel>
        <CardNumber>02</CardNumber>
      </Compiler>
      <Devnet>
        <DevNet>
          <Dummy src={dummy} />
          <FeatureLabel>Devnet</FeatureLabel>
          <CardNumber>03</CardNumber>
        </DevNet>
      </Devnet>
      <Deployer>
        <Multichain>
          <MultichainText>
            EVM & <br /> Multi-Chain Capabilities
          </MultichainText>
        </Multichain>
        <Deploy>
          <DeployText>
            Deploy to Solidity <br /> & Teal
          </DeployText>
        </Deploy>
        <Rocket src={rocket} />
        <FeatureLabel>Deployer</FeatureLabel>
        <CardNumber>04</CardNumber>
      </Deployer>
    </Bottom>
    <Footer />
  </Page>
);
