import React from "react";
import styled from "styled-components";
import Button from "../Button";
import eth from "../../public/assets/ethereum.png";
import reach from "../../public/assets/ReachLogo.png";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 402px;
  height: 631px;
  background: #333333;
  border-radius: 0px 16px 0px 0px;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Image = styled.img`
  max-width: 370px;
  height: 397px;
  margin: 16px 16px 16px;
`;

const Rarity = styled.div`
  width: 113.7px;
  height: 38px;
  line-height: 38px;
  background: #000000;
  border-radius: 20px;
  color: #ffffff;
  display: flex;
  align-content: center;
  justify-content: center;
  position: absolute;
  top: 30px;
  left: 30px;
`;

const ForSaleContainer = styled.div`
  position: relative;
  bottom: 16px;
  left: 16px;
  display: flex;
  flex-direction: row;
`;
const IsForSale = styled.div`
  width: 126px;
  height: 38px;
  background: #4536da;
  line-height: 38px;
  border-radius: 20px;
  color: #ffffff;
  display: flex;
  align-content: center;
  justify-content: center;
`;
const AintForSale = styled.div`
  width: 163px;
  height: 38px;
  line-height: 38px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
`;
const Owned = styled.div`
  width: 93px;
  height: 38px;
  background: #24d99e;
  border-radius: 20px;
  line-height: 38px;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-left: 8px;
`;

const Individual = styled.span`
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  color: #ffffff;
  margin-top: 8px;
  width: 370px;
  height: 42px;
`;
const Actions = styled.div``;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 70px;
  align-items: flex-start;
  margin-top: 16px;
`;

const SetName = styled.div`
  position: relative;
  width: 72px;
  height: 20px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;

const Divider = styled.div`
  width: 370px;
  height: 0px;
  border: 1px solid #666666;
  margin-top: 24px;
`;

const LowerPart = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-top: -75px;
  width: 370px;
  height: 170px;
`;

const ListItem = styled((props) => <Button {...props} />)`
  width: 255px;
  height: 52px;
  margin-top: 24px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`;
const UnlistItem = styled((props) => <Button {...props} />)`
  width: 167px;
  height: 52px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  background: transparent;
  border-color: #ffffff;
  //   position: absolute;
  // margin-left: 15px;
  margin-top: 24px;
`;

const BuyButton = styled((props) => <Button {...props} />)`
  width: 129px;
  height: 52px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`;

const Price = styled.div`
  color: #ffffff;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 95px;
  height: 28px;
  gap: 10px;
  white-space: nowrap;
`;

const StatusContainer = styled.div`
  height: 38px;
  display: flex;
  flex-direction: row;

  position: relative;
  top: -64px;
  left: 5px;
`;
const EthLogo = styled.img`
  height: 32px;
  width: 32px;
  align-self: middle;
`;

const BuySpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 370px;
  height: 52px;
  margin-top: 16px;
  justify-content: space-between;
  align-content: center;
`;

const ReachLogo = styled.img`
  width: 24px;
  height: 17.66px;
  align-content: center;
  margin-top: 15%;
  margin-left: -12px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
`;

const ForSale = ({ forSale, owned }) => {
  return (
    <ForSaleContainer>
      {forSale ? (
        <IsForSale>For Sale</IsForSale>
      ) : (
        <AintForSale>Not For Sale</AintForSale>
      )}
      {owned ? <Owned>Owned</Owned> : ""}
    </ForSaleContainer>
  );
};

const Info = ({ name, number, setName }) => {
  return (
    <InfoContainer>
      <SetName>{setName}</SetName>
      <Individual>
        {name} #{number}
      </Individual>
    </InfoContainer>
  );
};

const GetCTA = ({ forSale, owned, price }) => {
  if (!forSale && !owned) {
    return;
  }
  if (forSale && !owned) {
    return (
      <BuySpan>
        <Price>
          <EthLogo src={eth} />
          {`${price} ETH`}
        </Price>
        <BuyButton label="BUY" backgroundColor="primary" />
      </BuySpan>
    );
  }
  if (!forSale && owned) {
    return <ListItem label={"LIST FOR SALE"} backgroundColor="main" />;
  }
  if (forSale && owned) {
    return <UnlistItem label="UNLIST" outline />;
  }
};

export default (props) => {
  const { url, rarity, forSale, owned, setName, name, number, price } = props;
  return (
    <Card>
      <Image src={url} />
      <Rarity>
        <Inner>
          <ReachLogo src={reach} />
          <span style={{ marginLeft: "16px" }}>{rarity}</span>
        </Inner>
      </Rarity>
      <StatusContainer>
        <ForSale forSale={forSale} owned={owned} />
      </StatusContainer>
      <LowerPart>
        <Info name={name} number={number} setName={setName} />
        <Divider />
        <Actions>{GetCTA({ forSale, owned, price })}</Actions>
      </LowerPart>
    </Card>
  );
};
