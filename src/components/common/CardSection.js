import React from 'react';
import styled from 'styled-components';

const CardSection = ({ children }) => (
  <SectionContainer>{children}</SectionContainer>
);

const SectionContainer = styled.View`
  border-bottom-width: 1px;
  padding: 5px;
  background-color: #fff;
  justify-content: flex-start;
  flex-direction: row;
  border-color: #ddd;
  position: relative;
`;

export { CardSection };
