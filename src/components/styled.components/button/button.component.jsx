// import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  margin: ${(props) => props.margin};
  background-color: var(--primary);
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 6px;
  color: white;
  font-family: nunito;
  font-size: 18px;
  &:hover {
        background-color: black;
        transition: 500ms ease-in-out;
        cursor: pointer;
      }
`;
