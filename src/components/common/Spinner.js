import React from 'react';
import styled from 'styled-components';
import { ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => (
  <SpinnerContainer>
    <ActivityIndicator size={size || 'large'} />
  </SpinnerContainer>
);

const SpinnerContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export { Spinner };
