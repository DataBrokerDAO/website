import React, { Component } from 'react';
class ProgressBar extends Component {
  render() {
    const { percentage } = this.props;

    return (
      <div className="progress-horizontal progress-horizontal--lg">
        <div className="progress-horizontal__bar" data-value={percentage}>
          <div
            className="progress-horizontal__progress"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
}

export default ProgressBar;