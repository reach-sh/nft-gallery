import React from "react";
import styled from "styled-components";
import BuySection from "./BuySection";
import divider from "../../public/assets/divider.svg";
import { attributePossibilities } from "../App";

const Attributes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const AttributeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px;
`;

const Attribute = styled.div`
  width: 120px;
  height: 126px;
  border: 1px solid #e04747;
  border-radius: 4px;
  padding: 16px;
`;

const AttrName = styled.div`
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: justify;
  color: #ffffff;
`;

const Category = styled.div`
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #999999;
`;
const Data = styled.div`
  margin-right: 120px;
`;
const Divider = styled.div`
  width: 90%;
  height: 0px;
  border: 1px solid #cccccc;
`;

const Description = styled.div`
  max-width: 544px;
  height: 54px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
  margin-top: 24px;
  margin-bottom: 40px;
`;

const HowMany = styled.div`
  color: #999999;
`;

const Name = styled.div``;
const Num = styled.div``;
const NameAndNumber = styled.span`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 162px;
  height: 42px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  white-space: nowrap;
`;

const Owner = styled.span`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  margin-bottom: 32px;
`;
const OwnerLabel = styled.div`
  margin-right: 8px;
`;
const OwnerId = styled.div`
  margin-left: 8px;
`;

const Percentage = styled.div`
  color: #999999;
`;

const Set = styled.div``;

const SaleStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 110px;
  height: 38px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  background: #4536da;
  border-radius: 20px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const OwnedStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 93px;
  height: 38px;
  background: #24d99e;
  border-radius: 20px;
  color: #000000;
  align-self: center;
`;

const StatusSpan = styled.span`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const VerticalDivider = styled.img``;

const Attr = ({ name, value, howMany, collectionSize }) => {
  const rawRatio = parseInt(howMany) / parseInt(collectionSize);
  const percentage = Math.round((rawRatio + Number.EPSILON) * 100) / 100;
  return (
    <Attribute key={value}>
      <AttributeContainer>
        <Category>{name}</Category>
        <AttrName>{value}</AttrName>
      </AttributeContainer>
      <Divider />
      <HowMany>{howMany} Total</HowMany>
      <Percentage>{percentage}% have this</Percentage>
    </Attribute>
  );
};

export default ({nft, collectionSize}) => {
  if (nft){
    console.log(nft.attributes)
    return (
    <Data>
      <Set>{nft.setName}</Set>
      <NameAndNumber>
        <Name>{nft.name}</Name>
        <Num>#{nft.number}</Num>
      </NameAndNumber>
      <StatusSpan>
        <SaleStatus>{nft.forSale ? "For Sale" : "Not For Sale"}</SaleStatus>
        {nft.owned ? <OwnedStatus> Owned </OwnedStatus>: ""}
      </StatusSpan>
      <Owner>
        <OwnerLabel>Owner</OwnerLabel> 
        <VerticalDivider src={divider}/>
        <OwnerId>{nft.owner}</OwnerId>
      </Owner>
      <Attributes>
        {nft.attributes
          ? Object.keys(nft.attributes).map((attribute, index) => {
            const rawAttributeValue = nft.attributes[attribute]
            const resolvedAttributeValues = attributePossibilities[attribute][rawAttributeValue]
            console.log(nft)
            return (
              <Attr
                name={resolvedAttributeValues.name}
                value={resolvedAttributeValues.value}
                howMany={resolvedAttributeValues.howMany}
                collectionSize={collectionSize}
                key={`${index}` + `${attribute}` + `${resolvedAttributeValues.value}` }
              />
            )})
          : ""}
      </Attributes>
      <Description>{nft.description}</Description>
      <BuySection data={nft} />
    </Data>
  )}
  else {return "Loading..."}
};
