import * as React from 'react';

export interface CardProperties {
  name: string;
  age: string;
}

export class Card extends React.PureComponent<CardProperties> {

  constructor(p: CardProperties) {
    super(p);
  }

  render(): React.ReactNode {
    const {name, age} = this.props;

    return (
      <div>Hello {name}, you are {age} old. <hr/> </div>
    );
  }
}