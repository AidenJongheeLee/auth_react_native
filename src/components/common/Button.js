import React from 'react';
import styled from 'styled-components';

const Button = ({ onPress, children }) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{children}</ButtonText>
  </ButtonContainer>
);

const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  align-self: stretch;
  background-color: #fff;
  border-radius: 5px;
  border-width: 1px;
  border-color: #007aff;
  margin-left: 5px;
  margin-right: 5px;
`;

const ButtonText = styled.Text`
  align-self: center;
  color: #007aff;
  font-size: 16px;
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export { Button };
