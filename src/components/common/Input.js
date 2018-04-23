import React from 'react';
import styled from 'styled-components';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => (
  <InputContainer>
    <Label>{label}</Label>
    <TextField
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoCorrect={false}
      value={value}
      onChangeText={onChangeText}
    />
  </InputContainer>
);

const TextField = styled.TextInput`
  color: #000;
  padding-right: 5px;
  padding-left: 5px;
  font-size: 18px;
  line-height: 23px;
  flex: 2;
`;

const Label = styled.Text`
  font-size: 18px;
  padding-left: 20px;
  flex: 1;
`;

const InputContainer = styled.View`
  height: 40px;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export { Input };
