import React, { Component } from "react";

class Counter extends Component {
  // handleDecrease = () => {
  //   if (this.props.counter.value > 0)
  //     this.setState({ value: this.props.counter.value - 1 });
  // };

  render() {
    let classes = this.newBadgeMethod();
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className={classes}> {this.formatCount()} </span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
  newBadgeMethod() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "success" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
