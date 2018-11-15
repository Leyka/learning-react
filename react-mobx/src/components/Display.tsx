import * as React from "react";
import styled from "styled-components";

interface DisplayProps {
  result: number;
}

const Container = styled.div`
  background-color: #303030;
  padding: 20px;
  color: #fff;
  margin: auto;
  font-family: monospace;
`;

const H1 = styled.h1`
  font-size: 3rem;
  color: rgb(39, 230, 22);
`;

export const Display: React.SFC<DisplayProps> = props => (
  <Container>
    <small>-- Display --</small>
    <h2>The current counter is</h2>
    <H1>{props.result}</H1>
  </Container>
);
