import React, { Component } from 'react';

class ErrorResponse extends Component {
  render() {
    fbq('track', 'CompleteRegistration'); // eslint-disable-line
    // const { error } = this.props;
    return (
      <div>
        <h2>Registration failed! </h2>
        <hr className="short" />
        <p className="lead">
          Our external "know your customer" provider has notified us that your
          information does not allow us to include you in this sale.
        </p>
        <p className="lead">
          We will review your submission manually (might take a few days) and
          will notify you by email with the sale information if your information
          is deemed correct.
        </p>
      </div>
    );
  }
}

export default ErrorResponse;
