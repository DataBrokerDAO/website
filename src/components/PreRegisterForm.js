import React, { Component } from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { isValidAddress } from 'ethereumjs-util';
import database from '../utils/firebase';
import ShortUniqueId from 'short-unique-id';
import axios from 'axios';
import moment from 'moment';

class PreRegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      uuid: null,
    };
  }

  _submit = values => {
    const uid = new ShortUniqueId();
    const uuid = uid.randomUUID(6);

    const addr = database.ref(`referrers/${values.ethereumAddress}`).push().key;
    database.ref(`referrers/${values.ethereumAddress}/${addr}`).set({
      ...values,
      code: uuid,
      source: localStorage.getItem('code'),
      timestamp: moment().unix(),
    });

    axios
      .post(
        'https://databroker-crowdsale-api.herokuapp.com/api/confirmation-email',
        {
          email: values.email,
          uuid,
          firstName: values.firstName,
          lastName: values.lastName,
        },
        {
          auth: {
            username:
              'sahCa8aiieD7ke9ovu3zeDieEitaza9uxuW6op2SSa0tohQubuiqu8uTtaiy8Aiw',
            password:
              'xaf6MeofRae1aiQuuLoz2EemAa0aiw7oLie1sheeaiS3ceo7chi4aiQuieGuo7ve',
          },
        }
      )
      .then(response => {
        // console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      formSubmitted: true,
      uuid,
    });
  };

  _renderTextField = ({
    input,
    label,
    helptext,
    type,
    meta: { touched, error, warning },
  }) =>
    <div
      className={`form-group ${touched &&
        ((error && 'has-danger') || (warning && 'has-warning'))}`}
    >
      <label className="type--uppercase ">
        {label}
      </label>
      <input {...input} type={type} />
      {helptext &&
        <small className="form-text text-muted">
          {helptext}
        </small>}
      <div className="color--error">
        {touched && ((error && error) || (warning && warning))}
      </div>
    </div>;

  render() {
    const { handleSubmit, submitting, pristine } = this.props;
    const { uuid, formSubmitted } = this.state;
    return (
      <div>
        {!formSubmitted &&
          <div>
            <h2>Register for the early token sale</h2>
            <hr className="short" />
            <p className="lead">
              Please register yourself to obtain an unique referral link and
              stay on top of important updates leading up to our early token
              sale. We will send any referral bonus to the address you specify
              below.
            </p>

            <Form onSubmit={handleSubmit(this._submit)}>
              <div className="col-sm-6">
                <Field
                  component={this._renderTextField}
                  name="firstName"
                  required
                  label="Your first name"
                  type="text"
                  placeholder="Satoshi"
                  className="validate-required"
                />
              </div>
              <div className="col-sm-6">
                <Field
                  component={this._renderTextField}
                  name="lastName"
                  required
                  label="Your last name"
                  type="text"
                  placeholder="Nakamoto"
                  className="validate-required"
                />
              </div>
              <div className="col-sm-12">
                <Field
                  component={this._renderTextField}
                  name="email"
                  required
                  label="Your email address"
                  type="email"
                  placeholder="satoshi@nakamoto.com"
                  className="validate-required"
                />
              </div>
              <div className="col-sm-12">
                <Field
                  component={this._renderTextField}
                  name="ethereumAddress"
                  required
                  label="Your Ethereum address"
                  type="text"
                  placeholder="0x52b8398551bb1d0bdc022355897508f658ad42f8"
                  helptext="we will send the referral tokens to this address after the early token sale ends"
                  className="validate-required"
                />
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <button
                    className="btn btn-lg type--uppercase btn--primary"
                    type="submit"
                    disabled={pristine || submitting}
                  >
                    Give me my referral link!
                  </button>
                </div>
              </div>
            </Form>
          </div>}
        {formSubmitted &&
          <div>
            <h2>Registration successful! Here's your referral link.</h2>
            <hr className="short" />
            <p className="lead">
              Thank you for your registration. Below you can find your unique
              referral link which you can use to share the DataBrokerDAO
              project. You'll receive 5% of every contribution which is made and
              attributed to your refferal link. All details about the token sale
              will also be send to you by mail.
            </p>
            <input
              className="text-center"
              type="text"
              value={`https://databrokerdao.com/?referrer=${uuid}`}
              style={{ fontSize: '16px' }}
              readOnly
            />
            <div class="modal_channels">
              <h4>Share your referral link on social media</h4>
              <span>
                <a
                  href={`https://twitter.com/intent/tweet?text=Check%20out%20DataBrokerDAO%20-%20A%20decentralized%20marketplace%20for%20IoT%20Sensor%20data.%20https%3A%2F%2Fdatabrokerdao.com%3Freferrer%3D${uuid}%20%23IoT%20%23tokensale`}
                  target="_blank"
                >
                  <i class="fa fa-twitter fa-1x" />Share on twitter
                </a>
              </span>
              <span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//databrokerdao.com/?referrer=${uuid}`}
                  target="_blank"
                >
                  <i class="fa fa-facebook fa-1x" />Share on Facebook
                </a>
              </span>
              <span>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A//databrokerdao.com/?referrer=${uuid}&title=DataBrokerDAO%20-%20A%20Decentralized%20marketplace%20for%20IoT%20sensor%20Data`}
                  target="_blank"
                >
                  <i class="fa fa-linkedin fa-1x" />Share on Linkedin
                </a>
              </span>
            </div>
          </div>}
      </div>
    );
  }
}

// {*
//   <div className="form-group">
//     <div className="input-checkbox">
//       <Field
//         component="input"
//         type="checkbox"
//         name="agree"
//         required
//       />
//       <label htmlFor="checkbox-switch" />
//     </div>
//     <span>
//       I have read and agree to the{' '}
//       <a href="#">terms and conditions</a>
//     </span>
//   </div>
//   +}

const validate = values => {
  const errors = {};
  const requiredFields = ['fullName', 'email', 'ethereumAddress', 'agree'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `this is a required field`;
    }
  });
  if (!isValidAddress(values['ethereumAddress'])) {
    errors[
      'ethereumAddress'
    ] = `this does not appear to be a valid ethereum address`;
  }
  return errors;
};

export default reduxForm({ form: 'preregistration', validate })(
  PreRegisterForm
);
