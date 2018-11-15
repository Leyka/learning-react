import { observable } from "mobx";

export class CounterStore {
  @observable result: number = 0;
  @observable valueToCompute: number = 0;

  saveInput = (value: string) => {
    this.valueToCompute = parseInt(value);
  };

  add = () => {
    this.result += this.valueToCompute;
  };

  subtract = () => {
    this.result -= this.valueToCompute;
  };
}
