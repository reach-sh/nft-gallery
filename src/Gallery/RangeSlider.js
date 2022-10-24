import React, { useEffect, useState, useRef } from "react";
import * as noUiSlider from "nouislider";
import styled from "styled-components";
import "nouislider/dist/nouislider.css";
import Nouislider from "nouislider-react";

const Container = styled.div`
  width: 260px;
  & .noUi-origin {
    position: relative;
    left: 200px;
  }

  & .noUi-target {
    background: #000000;
    border: none;
    box-shadow: none;
  }

  & .noUi-base {
    height: 0px;
    left: 0px;
    top: 10px;
    border: 1px solid #999999;
  }

  & .noUi-handle {
    border-radius: 50%;
    background: #4536da;
    width: 14px;
    height: 14px;
    box-shadow: none;
    border: none;
    right: -1px;
    left: 50px;

    ::before {
      display: none;
    }

    ::after {
      display: none;
    }
  }
`;

const PriceBar = styled.div``;

export default ({ priceRange, setPriceRange }) => {
  const onUpdate = (range) => {
    setPriceRange({ min: range[0], max: range[1] });
  };
  return (
    <Container>
      <PriceBar>
        <Nouislider
          range={{ min: 0, max: 10000 }}
          start={[~~priceRange.min, ~~priceRange.max]}
          onUpdate={onUpdate}
        />
      </PriceBar>
    </Container>
  );
};
