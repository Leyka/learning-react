import * as React from "react";
import styled from "styled-components";

interface ButtonProps {
  onChange(value: string): void;
}

const Container = styled.div`
  margin: 20px;
`;

const StyledInput = styled.input`
  display: block;
  margin: 5px auto;
  text-align: center;
  width: 150px;
  font-size: 2rem;
`;

export const CounterInput: React.SFC<ButtonProps> = props => (
  <Container>
    <small>-- Counter Input --</small>
    <StyledInput
      type="number"
      defaultValue="0"
      autoFocus
      onChange={(e: any) => props.onChange(e.target.value)}
    />
  </Container>
);
