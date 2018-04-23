import React from 'react';
import styled from 'styled-components';

const Card = props => <CardContainer>{props.children}</CardContainer>;

const CardContainer = styled.View`
  border-width: 1px;
  border-radius: 2px;
  border-color: #ddd;
  border-bottom-width: 0px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 2px;
  elevation: 1px;
  margin: 10px 5px 0px 5px;
`;

export { Card };
