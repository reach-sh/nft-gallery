import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import Footer from "../Footer";
import DataSection from "./DataSection";
import { Link, useHistory, useParams, } from "react-router-dom";
import { example } from "../App";
import backArrow from "../../public/assets/backArrow.png";
import reachBlack from "../../public/assets/reachLogoBlack.svg";

const Back = styled.a`
  margin-left: 10px;
`;
const BackArrow = styled.img``;

const BackLink = styled.div`
  margin-left: 120px;
  a {
    color: #ffffff !important;
  }
`;
const Badge = styled.div`
  display: flex;
  position: relative;
  width: 112px;
  height: 38px;
  left: 128px;
  top: 16px;
  background: #ffffff;
  border-radius: 20px;
  color: #000000;
  align-content: center;
  text-align: center;
`;

const BadgeLogo = styled.img`
  width: 24px;
  align-self: center;
  margin-left: 12px;
`;
const ImageContainer = styled.div`
  height: calc(100vh - 220px);
  width: 50%;
  display: flex;
  justify-content: center;
`;
const Page = styled.div`
  background-color: #000000;
  color: #ffffff;
  font-family: "Reach Favorit";
  font-style: normal;
  max-height: 1245px;
`;
const Image = styled.img`
  max-width: 541px;
  max-height: 541px;
`;
const Main = styled.div`
  width: 100%;
  height: calc(100vh - 220px);
  display: flex;
  flex-direction: row;
  margin-top: 24px;
`;

const Rarity = styled.div`
  width: 64px;
  height: 20px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  align-self: center;
`;

export default ({nfts}) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const fetchData = (id) => {
      const fetched = nfts.filter((nft) => { return (nft.number == id)});
      setData(fetched);
    };

    fetchData(id);
  }, [id]);
const nft = data[0]
  return (
    <Page>
      <Navbar />
      <BackLink>
        <BackArrow src={backArrow} />
        <Back onClick={() => history.go(-1)}>Back</Back>
      </BackLink>
      <Main>
        <ImageContainer>
          <Badge>
            <BadgeLogo src={reachBlack} />
            <Rarity>{nft ? nft.rarity : ''}</Rarity>
          </Badge>
          <Image src={nft ? nft.rarity : ''} />
        </ImageContainer>
        <DataSection data={nft} />
      </Main>
      <Footer />
    </Page>
  )
};
