import React from "react";
import styled from "styled-components";

const Category = styled.div`
  color: #999999;
  ${(props) => (props.selected ? "color: #4536da;" : "")}
  height: 24px;
  width: auto;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  white-space: nowrap;
`;

const CategoryContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 32px 0px 32px;
  gap: 13px;
  height: 36px;
  ${(props) => (props.selected ? "border-bottom: 3px solid #4536da;" : "")}
`;
const Catbox = styled.div`
  margin-top: 58px;
  display: flex;
  flex-direction: row;
  justify-self: center;
  margin-left: 200px;
   @media only screen and (max-width: 375px) {
     margin-left: 40px;
    }
`;
export default ({ categories, selected }) => (
  <Catbox>
    {categories.map((category) => {
      return (
        <CategoryContainer selected={category === selected} key={category}>
          {category === selected ? (
            <Category key={category} value={category} selected>
              {category}
            </Category>
          ) : (
            <Category key={category} value={category}>
              {category}
            </Category>
          )}
        </CategoryContainer>
      );
    })}
  </Catbox>
);