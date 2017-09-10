import React, { Component } from 'react';

class ErrorResponse extends Component {
  render() {
    const { error } = this.props;
    return (
      <div>
        <h2>Registration failed! </h2>
        <hr className="short" />
        <p className="lead">
          Our external "know your customer" provider has notified us that your
          information does not allow us to include you in this sale. This is the
          reason we have been given:
        </p>
        <pre>
          ${JSON.stringify(error, null, 2)}
        </pre>
      </div>
    );
  }
}

export default ErrorResponse;