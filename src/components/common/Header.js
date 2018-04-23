import React from 'react';
import styled from 'styled-components';

function Header({ headerText }) {
  return (
    <HeaderContainer>
      <HeaderText>{headerText}</HeaderText>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.View`
  background-color: #f8f8f8;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding-top: 15px;
  shadow-color: #000;
  shadow-opacity: 0.2;
  elevation: 2;
  shadow-offset: 0px 2px;
  position: relative;
`;

const HeaderText = styled.Text`
  font-size: 20px;
`;

export { Header };
