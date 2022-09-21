import React from "react";
import styled from "styled-components";

function getIconSize(size) {
  switch (size) {
    case "xs" || "s":
      return "width: 10.5x; height: 10.5px;";
    case "m" || "l":
      return "width: 14px; height: 14px;";
  }
}

function getSize(size) {
  switch (size) {
    case "xs":
      return "width: 194.6px; height: 24px;";
    case "s":
      return "width: 218.6px; height: 32px;";
    case "m":
      return "width: 263.6px; height: 40px";
    case "l":
      return "width: 279.6px; height: 48px";

    default:
      return "width: 279.6px; height: 48px";
  }
}

function getPadding(size) {
  switch (size) {
    case "xs":
      return "padding: 4px 16px;";
    case "s":
      return "padding: 8px 24px;";
    case "m":
      return "padding: 8px 32px;";
    case "l":
      return "padding: 12px 40px;";
    default:
      return "padding: 12px 40px;";
  }
}

function getColor(color) {
  switch (color) {
    case "primary":
      return "#E04747";
    case "main":
      return "#4536DA;";
    case "grey":
      return "#CCCCCCC";
    default:
      return "#FFFFFF;";
  }
}

const getBorderColor = (disabled, outline) => {
  if (outline) {
    if (disabled) {
      return "#999999";
    } else {
      return "#000000";
    }
  } else {
    return "transparent;";
  }
};

const getTextColor = (disabled, outline) => {
  if (outline) {
    if (disabled) {
      return "#999999";
    } else {
      return "#000000";
    }
  } else {
    return "#FFFFFF";
  }
};

const getTextSize = (size) => {
  switch (size) {
    case "xs":
      return `font-size: 12px; `;
    case "s":
      return `font-size: 14px;`;
    case "m":
      return `font-size: 16px;`;
    case "l":
      return `font-size: 18px;`;
  }
};

const Icon = styled.img`
  width: 19px;
  height: 18px;
`

const Button = styled.button`
  background-color: ${(props) =>
    props.disabled
      ? `${getColor("grey")}`
      : `${getColor(props.backgroundColor)}`};
  color: ${(props) => getTextColor(props.disabled, props.outline)};
  border: ${(props) => (props.outline ? "1px" : "none")};
  border-color: ${(props) => {
    return getBorderColor(props.disabled, props.outline);
  }};
  border-radius: ${(props) =>
    props.decorative ? "0px 0px 24px 0px;" : "none"};
  ${(props) => (props.outline ? `border-style: solid;` : "")}
  ${(props) => getSize(props.size)};

  :disabled {
    color: ${getColor("grey")};
  }
  ${(props) => (props.outline ? `background-color: ${getColor("")}` : "")}
  ${(props) => getTextSize(props.size)}
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props) => getPadding(props.size)}
  gap: 8px;
  ${(props) => {
    if (props.outline) {
      if (props.disabled) {
        return `img { filter: invert(.5);};  };`;
      }
      return `img { filter: invert(1);}};`;
    } else {
      if (props.disabled) {
        return `img {filter: invert(50%) sepia(0%) saturate(138%) hue-rotate(166deg) brightness(94%) contrast(91%);}`;
      } else {
        return `img {filter: invert(0);};`;
      }
    }
  }}
`;

export default (props) => {
  return (
    <Button disabled={props.disabled} {...props}>
      {props.label} {props.postIcon ? <Icon src={props.postIcon}/> :""}
    </Button>
  );
};
