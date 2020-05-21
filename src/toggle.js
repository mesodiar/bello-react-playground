import React, { Component } from "react";

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning</div>;
}

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  // If we don't want to use `this.handleClick = this.handleClick.bind(this);`
  // 1. Using public class field syntax
  // handleClick = () => {
  // }
  // 2. Or use  <button onClick={() => this.handleClick()}>

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleClick}>
          {this.state.showWarning ? "HIDE" : "SHOW"}
        </button>
      </div>
    );
  }
}
