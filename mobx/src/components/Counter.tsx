import { observer } from "mobx-react";
import * as React from "react";
import { CounterStore } from "src/store/counter";
import styled from "styled-components";
import { Button } from "./Button";
import { CounterInput } from "./CounterInput";
import { Display } from "./Display";

const StyledContainer = styled.div`
  text-align: center;
`;

interface CounterProps {
  store: CounterStore;
}

@observer
export class Counter extends React.Component<CounterProps> {
  render() {
    const { result, saveInput, add, subtract } = this.props.store;
    return (
      <StyledContainer>
        <small>-- Counter --</small>
        <Display result={result} />
        <CounterInput onChange={saveInput} />
        <Button text="Add" onClick={add} />
        <Button text="Subtract" onClick={subtract} />
      </StyledContainer>
    );
  }
}
