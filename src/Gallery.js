import React from "react";
import Button from "./Button";
import styled from "styled-components";
import KeyDetails from "./KeyDetails";
import Navbar from "./Navbar";
const Gallery = styled.div`
  display: grid;
  grid-template-columns: 400px 400px 400px;
  width: 1300px;
  height: auto;
  overflow-x: hidden;
  gap: 24px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
`;

const SearchInput = styled.div`
  width: 352px;
  height: 40px;
  /* left: calc(50% - 352px / 2 - 0.5px); */
  top: 0%;
  bottom: 0%;
  border: 1px solid #4536da;
  border-radius: 24px;
`;

const SearchInner = styled.input`
width: 240px;
height: 20px;
font-family: 'Reach Favorit';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
display: flex;
align-content: center ;
justify-content: center;
border: none;
text-align: center ;
`;
const SidePanel = styled.div``;
const Footer = styled.div``;
const ResetButton = styled((props) => <Button {...props} />)``;
const TopInfo = () => {
  return <></>;
};
const Attributes = styled.div``;

const SearchPanel = () => {
  return (
    <SidePanel>
      <SearchInput>
        <SearchInner />
      </SearchInput>
      <Attributes />
      <ResetButton />
    </SidePanel>
  );
};

export default ({ nfts }) => {
  return (
    <>
      <Navbar />
      <TopInfo />
      <Main>
        <SearchPanel />
        <Gallery>
          {nfts.map((value) => (
            <KeyDetails {...value} />
          ))}
        </Gallery>
      </Main>
      <Footer />
    </>
  );
};
