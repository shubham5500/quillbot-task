import React from 'react';
import styled from 'styled-components';
import classes from './Header.module.scss';
import {SmallText, Text} from "../Text/Text";

const LoginLink = styled(SmallText)`
  cursor: pointer;
  font-weight: 700;
`;

function Header(props) {
  return (
    <div className={classes.header}>
      <img width={'140'}
           height={'33'}
           src={'https://static.grammarly.com/assets/files/cb6ce17d281d15f2c819035bcd430b0e/ukraine_grammarly_logo.svg'}/>
      <LoginLink>
        Log in
      </LoginLink>
    </div>
  );
}

export default Header;
