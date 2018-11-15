import * as React from "react";
import styled from "styled-components";
import { Container, Subscribe } from "unstated";
import { Button } from "./Button";
import { CounterInput } from "./CounterInput";
import { Display } from "./Display";

const StyledCounter = styled.div`
  text-align: center;
`;

interface CounterState {
  result: number;
  valueToCompute: number;
}

class CounterContainer extends Container<CounterState> {
  state = {
    result: 0,
    valueToCompute: 0
  };

  readonly saveInput = (input: string) => {
    this.setState({ valueToCompute: parseInt(input) });
  };

  readonly add = () => {
    this.setState({ result: this.state.result + this.state.valueToCompute });
  };

  readonly subtract = () => {
    this.setState({ result: this.state.result - this.state.valueToCompute });
  };
}

export class Counter extends React.PureComponent {
  render() {
    return (
      <Subscribe to={[CounterContainer]}>
        {({ state, add, subtract, saveInput }: CounterContainer) => (
          <StyledCounter>
            <small>-- Counter with unstated --</small>
            <Display result={state.result} />
            <CounterInput onChange={saveInput} />
            <Button text="Add" onClick={add} />
            <Button text="Subtract" onClick={subtract} />
          </StyledCounter>
        )}
      </Subscribe>
    );
  }
}
