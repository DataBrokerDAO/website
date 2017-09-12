import React, { Component } from 'react';
class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rendered: false,
    };
  }

  componentDidUpdate() {
    const { percentage } = this.props;
    if (this.state.rendered !== percentage.toFixed(0)) {
      window.radial(jQuery); //eslint-disable-line
      this.setState({ rendered: percentage.toFixed(0) });
    }
  }
  render() {
    const { percentage } = this.props;

    return (
      <div
        className="radial"
        data-value={percentage.toFixed(0)}
        data-timing="1000"
        data-color="#f90066"
        data-size="200"
        data-bar-width="10"
      >
        <span className="h3 radial__label">{percentage.toFixed(0)}%</span>
      </div>
    );
  }
}

export default ProgressBar;
