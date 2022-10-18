import React from "react";
import styled from "styled-components";
import dropdown from "../../public/assets/dropdown.png";

const networkOptions = [{ name: "Ethereum", value: "ethereum" }];
const sortOptions = [
  { name: "Price High To Low", value: "highToLow" },
  { name: "Price Low To High", value: "lowToHigh" },
];

const SelectNetwork = styled.div`
  background: #000000;
  color: #ffffff;
`;
const SortBy = styled.div`
  background: #000000;
  color: #ffffff;
`;
const SelectorContainer = styled.div`
  position: relative; 
  align-self: flex-end;
  left: 348px;
  right: 48px;
   @media only screen and (max-width: 375px) {
    position: absolute;
    align-self: flex-start;
    left: 32px;
    top: 420px;
   }

`;

const Selector = styled.select`
  border: 1px solid #666666;
  border-radius: 8px;
  background: #000000;
  color: #666666;
  padding: 10px 50px 10px 10px;
  margin-left: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url(${dropdown});
  background-repeat: no-repeat;
  background-position-x: 91%;
  background-position-y: 15px;
  margin-top: 16px;
  justify-self: right;
`;

const Option = styled.option`
  white-space: nowrap;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
`;

const Select = ({ options, onClick }) => {
  return (
    <Selector>
      {options.map((option) => (
        <Option onClick={() => onClick(option.value)} value={option.value}>
          {option.name}
        </Option>
      ))}
    </Selector>
  );
};

export default ({
  selectedNetwork,
  selectNetwork,
  sortBy,
  setSortBy,
}) => {
  console.log(sortBy);
  console.log(setSortBy);
  return (
    <SelectorContainer>
      <SelectNetwork>
        Select Network{" "}
        <Select
          options={networkOptions}
          value={selectedNetwork}
          onChange={selectNetwork}
        />
      </SelectNetwork>
      <SortBy>
        Sort By{" "}
        <Select options={sortOptions} value={sortBy} onChange={() => {console.log(e.target.value);return setSortBy(e.target.value)}} />{" "}
      </SortBy>
    </SelectorContainer>
  );
};