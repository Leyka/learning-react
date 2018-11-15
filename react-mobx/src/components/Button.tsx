import * as React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick(): void;
}

const StyledButton = styled.button`
  padding: 10px;
  background-color: #fff;
`;

export const Button: React.SFC<ButtonProps> = props => (
  <div>
    <small>-- Button --</small>
    <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
  </div>
);
