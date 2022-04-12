import React from 'react';
import styled from 'styled-components';
import {COLOR_PALETTE} from "../constants";

export const Button = styled.button`
  border-radius: 6px;
  color: white;
  box-shadow: none;
  border: none;
  padding: 10px;
  height: 48px;
  font-weight: 700;
  font-size: 14px;
  
`
export const PrimaryButton = styled(Button)`
  background-color: ${COLOR_PALETTE.primary};
  &:hover {
    background-color: ${COLOR_PALETTE.primaryLight}
  }
`
