import React, { Component } from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { isValidAddress } from 'ethereumjs-util';
import axios from 'axios';
import SuccessResponse from './SuccessResponse';
import ErrorResponse from './ErrorResponse';
import DocumentResponse from './DocumentResponse';
// import { IntercomAPI } from 'react-intercom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { KYC_RESULTS } from '../utils/constants';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      uuid: null
    };
  }

  componentDidMount() {
    window.checkboxes(jQuery); //eslint-disable-line

    // Load Intercom.
    // IntercomAPI('boot', {
    //   app_id: 'abc12345'
    // });
  }

  _submit = values => {
    // IntercomAPI('update', {
    //   name: `${values.firstName} ${values.lastName}`, // Full name
    //   email: `${values.email}` // Email address
    // });

    axios
      .post(
        `${process.env.REACT_APP_API_URI}api/kyc`,
        {
          ...values,
          agree: true,
          language: this.props.language || 'en',
          source: localStorage.getItem('code') || 'none',
          ref: localStorage.getItem('ref') || 'none',
          dfp: localStorage.getItem('dfp') || 'none',
          dft: 'AU',
          referrer: localStorage.getItem('referrer') || 'none'
        },
        {
          auth: {
            username:
              'sahCa8aiieD7ke9ovu3zeDieEitaza9uxuW6op2SSa0tohQubuiqu8uTtaiy8Aiw',
            password:
              'xaf6MeofRae1aiQuuLoz2EemAa0aiw7oLie1sheeaiS3ceo7chi4aiQuieGuo7ve'
          }
        }
      )
      .then(response => {
        if (!response) return;
        const {
          result,
          kyc,
          uuid = false,
          address = false,
          initialData: extraInitialData = false,
          bitcoin = {}
        } = response.data;

        const extra = result === KYC_RESULTS.MANUAL_REVIEW;
        const { receivingAddress: btcAddress = 'invalid address' } = bitcoin;

        this.setState({
          formSubmitted: true,
          error: result === KYC_RESULTS.ERROR,
          errorReason:
            (kyc && kyc.ednaScoreCard && kyc.ednaScoreCard.er) || false,
          address: address,
          extra,
          extraInitialData: { ...extraInitialData, uuid },
          uuid,
          btcAddress
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          formSubmitted: true,
          error,
          extra: false,
          errorReason: error.message
        });
      });
  };

  _renderTextField = ({
    input,
    label,
    helptext,
    type,
    meta: { touched, error, warning }
  }) => (
    <div
      className={`form-group ${touched &&
        ((error && 'has-danger') || (warning && 'has-warning'))}`}
    >
      <label className="type--uppercase ">{label}</label>
      <input {...input} type={type} />
      {helptext && <small className="form-text text-muted">{helptext}</small>}
      <div className="color--error">
        {touched && ((error && error) || (warning && warning))}
      </div>
    </div>
  );

  _renderSelectField = ({
    input,
    label,
    helptext,
    type,
    meta: { touched, error, warning }
  }) => (
    <div
      className={`form-group ${touched &&
        ((error && 'has-danger') || (warning && 'has-warning'))}`}
    >
      <label className="type--uppercase ">{label}</label>
      <div className="input-select">
        <select {...input}>
          <option value="default" />
          <option value="AF">Afghanistan</option>
          <option value="AX">Åland Islands</option>
          <option value="AL">Albania</option>
          <option value="DZ">Algeria</option>
          <option value="AS">American Samoa</option>
          <option value="AD">Andorra</option>
          <option value="AO">Angola</option>
          <option value="AI">Anguilla</option>
          <option value="AQ">Antarctica</option>
          <option value="AG">Antigua and Barbuda</option>
          <option value="AR">Argentina</option>
          <option value="AM">Armenia</option>
          <option value="AW">Aruba</option>
          <option value="AU">Australia</option>
          <option value="AT">Austria</option>
          <option value="AZ">Azerbaijan</option>
          <option value="BS">Bahamas</option>
          <option value="BH">Bahrain</option>
          <option value="BD">Bangladesh</option>
          <option value="BB">Barbados</option>
          <option value="BY">Belarus</option>
          <option value="BE">Belgium</option>
          <option value="BZ">Belize</option>
          <option value="BJ">Benin</option>
          <option value="BM">Bermuda</option>
          <option value="BT">Bhutan</option>
          <option value="BO">Bolivia, Plurinational State of</option>
          <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
          <option value="BA">Bosnia and Herzegovina</option>
          <option value="BW">Botswana</option>
          <option value="BV">Bouvet Island</option>
          <option value="BR">Brazil</option>
          <option value="IO">British Indian Ocean Territory</option>
          <option value="BN">Brunei Darussalam</option>
          <option value="BG">Bulgaria</option>
          <option value="BF">Burkina Faso</option>
          <option value="BI">Burundi</option>
          <option value="KH">Cambodia</option>
          <option value="CM">Cameroon</option>
          <option value="CA">Canada</option>
          <option value="CV">Cape Verde</option>
          <option value="KY">Cayman Islands</option>
          <option value="CF">Central African Republic</option>
          <option value="TD">Chad</option>
          <option value="CL">Chile</option>
          <option value="CN">China</option>
          <option value="CX">Christmas Island</option>
          <option value="CC">Cocos (Keeling) Islands</option>
          <option value="CO">Colombia</option>
          <option value="KM">Comoros</option>
          <option value="CG">Congo</option>
          <option value="CD">Congo, the Democratic Republic of the</option>
          <option value="CK">Cook Islands</option>
          <option value="CR">Costa Rica</option>
          <option value="CI">Côte d'Ivoire</option>
          <option value="HR">Croatia</option>
          <option value="CU">Cuba</option>
          <option value="CW">Curaçao</option>
          <option value="CY">Cyprus</option>
          <option value="CZ">Czech Republic</option>
          <option value="DK">Denmark</option>
          <option value="DJ">Djibouti</option>
          <option value="DM">Dominica</option>
          <option value="DO">Dominican Republic</option>
          <option value="EC">Ecuador</option>
          <option value="EG">Egypt</option>
          <option value="SV">El Salvador</option>
          <option value="GQ">Equatorial Guinea</option>
          <option value="ER">Eritrea</option>
          <option value="EE">Estonia</option>
          <option value="ET">Ethiopia</option>
          <option value="FK">Falkland Islands (Malvinas)</option>
          <option value="FO">Faroe Islands</option>
          <option value="FJ">Fiji</option>
          <option value="FI">Finland</option>
          <option value="FR">France</option>
          <option value="GF">French Guiana</option>
          <option value="PF">French Polynesia</option>
          <option value="TF">French Southern Territories</option>
          <option value="GA">Gabon</option>
          <option value="GM">Gambia</option>
          <option value="GE">Georgia</option>
          <option value="DE">Germany</option>
          <option value="GH">Ghana</option>
          <option value="GI">Gibraltar</option>
          <option value="GR">Greece</option>
          <option value="GL">Greenland</option>
          <option value="GD">Grenada</option>
          <option value="GP">Guadeloupe</option>
          <option value="GU">Guam</option>
          <option value="GT">Guatemala</option>
          <option value="GG">Guernsey</option>
          <option value="GN">Guinea</option>
          <option value="GW">Guinea-Bissau</option>
          <option value="GY">Guyana</option>
          <option value="HT">Haiti</option>
          <option value="HM">Heard Island and McDonald Islands</option>
          <option value="VA">Holy See (Vatican City State)</option>
          <option value="HN">Honduras</option>
          <option value="HK">Hong Kong</option>
          <option value="HU">Hungary</option>
          <option value="IS">Iceland</option>
          <option value="IN">India</option>
          <option value="ID">Indonesia</option>
          <option value="IR">Iran, Islamic Republic of</option>
          <option value="IQ">Iraq</option>
          <option value="IE">Ireland</option>
          <option value="IM">Isle of Man</option>
          <option value="IL">Israel</option>
          <option value="IT">Italy</option>
          <option value="JM">Jamaica</option>
          <option value="JP">Japan</option>
          <option value="JE">Jersey</option>
          <option value="JO">Jordan</option>
          <option value="KZ">Kazakhstan</option>
          <option value="KE">Kenya</option>
          <option value="KI">Kiribati</option>
          <option value="KP">Korea, Democratic People's Republic of</option>
          <option value="KR">Korea, Republic of</option>
          <option value="KW">Kuwait</option>
          <option value="KG">Kyrgyzstan</option>
          <option value="LA">Lao People's Democratic Republic</option>
          <option value="LV">Latvia</option>
          <option value="LB">Lebanon</option>
          <option value="LS">Lesotho</option>
          <option value="LR">Liberia</option>
          <option value="LY">Libya</option>
          <option value="LI">Liechtenstein</option>
          <option value="LT">Lithuania</option>
          <option value="LU">Luxembourg</option>
          <option value="MO">Macao</option>
          <option value="MK">Macedonia, the former Yugoslav Republic of</option>
          <option value="MG">Madagascar</option>
          <option value="MW">Malawi</option>
          <option value="MY">Malaysia</option>
          <option value="MV">Maldives</option>
          <option value="ML">Mali</option>
          <option value="MT">Malta</option>
          <option value="MH">Marshall Islands</option>
          <option value="MQ">Martinique</option>
          <option value="MR">Mauritania</option>
          <option value="MU">Mauritius</option>
          <option value="YT">Mayotte</option>
          <option value="MX">Mexico</option>
          <option value="FM">Micronesia, Federated States of</option>
          <option value="MD">Moldova, Republic of</option>
          <option value="MC">Monaco</option>
          <option value="MN">Mongolia</option>
          <option value="ME">Montenegro</option>
          <option value="MS">Montserrat</option>
          <option value="MA">Morocco</option>
          <option value="MZ">Mozambique</option>
          <option value="MM">Myanmar</option>
          <option value="NA">Namibia</option>
          <option value="NR">Nauru</option>
          <option value="NP">Nepal</option>
          <option value="NL">Netherlands</option>
          <option value="NC">New Caledonia</option>
          <option value="NZ">New Zealand</option>
          <option value="NI">Nicaragua</option>
          <option value="NE">Niger</option>
          <option value="NG">Nigeria</option>
          <option value="NU">Niue</option>
          <option value="NF">Norfolk Island</option>
          <option value="MP">Northern Mariana Islands</option>
          <option value="NO">Norway</option>
          <option value="OM">Oman</option>
          <option value="PK">Pakistan</option>
          <option value="PW">Palau</option>
          <option value="PS">Palestinian Territory, Occupied</option>
          <option value="PA">Panama</option>
          <option value="PG">Papua New Guinea</option>
          <option value="PY">Paraguay</option>
          <option value="PE">Peru</option>
          <option value="PH">Philippines</option>
          <option value="PN">Pitcairn</option>
          <option value="PL">Poland</option>
          <option value="PT">Portugal</option>
          <option value="PR">Puerto Rico</option>
          <option value="QA">Qatar</option>
          <option value="RE">Réunion</option>
          <option value="RO">Romania</option>
          <option value="RU">Russian Federation</option>
          <option value="RW">Rwanda</option>
          <option value="BL">Saint Barthélemy</option>
          <option value="SH">
            Saint Helena, Ascension and Tristan da Cunha
          </option>
          <option value="KN">Saint Kitts and Nevis</option>
          <option value="LC">Saint Lucia</option>
          <option value="MF">Saint Martin (French part)</option>
          <option value="PM">Saint Pierre and Miquelon</option>
          <option value="VC">Saint Vincent and the Grenadines</option>
          <option value="WS">Samoa</option>
          <option value="SM">San Marino</option>
          <option value="ST">Sao Tome and Principe</option>
          <option value="SA">Saudi Arabia</option>
          <option value="SN">Senegal</option>
          <option value="RS">Serbia</option>
          <option value="SC">Seychelles</option>
          <option value="SL">Sierra Leone</option>
          <option value="SG">Singapore</option>
          <option value="SX">Sint Maarten (Dutch part)</option>
          <option value="SK">Slovakia</option>
          <option value="SI">Slovenia</option>
          <option value="SB">Solomon Islands</option>
          <option value="SO">Somalia</option>
          <option value="ZA">South Africa</option>
          <option value="GS">
            South Georgia and the South Sandwich Islands
          </option>
          <option value="SS">South Sudan</option>
          <option value="ES">Spain</option>
          <option value="LK">Sri Lanka</option>
          <option value="SD">Sudan</option>
          <option value="SR">Suriname</option>
          <option value="SJ">Svalbard and Jan Mayen</option>
          <option value="SZ">Swaziland</option>
          <option value="SE">Sweden</option>
          <option value="CH">Switzerland</option>
          <option value="SY">Syrian Arab Republic</option>
          <option value="TW">Taiwan, Province of China</option>
          <option value="TJ">Tajikistan</option>
          <option value="TZ">Tanzania, United Republic of</option>
          <option value="TH">Thailand</option>
          <option value="TL">Timor-Leste</option>
          <option value="TG">Togo</option>
          <option value="TK">Tokelau</option>
          <option value="TO">Tonga</option>
          <option value="TT">Trinidad and Tobago</option>
          <option value="TN">Tunisia</option>
          <option value="TR">Turkey</option>
          <option value="TM">Turkmenistan</option>
          <option value="TC">Turks and Caicos Islands</option>
          <option value="TV">Tuvalu</option>
          <option value="UG">Uganda</option>
          <option value="UA">Ukraine</option>
          <option value="AE">United Arab Emirates</option>
          <option value="GB">United Kingdom</option>
          <option value="US">United States</option>
          <option value="UM">United States Minor Outlying Islands</option>
          <option value="UY">Uruguay</option>
          <option value="UZ">Uzbekistan</option>
          <option value="VU">Vanuatu</option>
          <option value="VE">Venezuela, Bolivarian Republic of</option>
          <option value="VN">Vietnam</option>
          <option value="VG">Virgin Islands, British</option>
          <option value="VI">Virgin Islands, U.S.</option>
          <option value="WF">Wallis and Futuna</option>
          <option value="EH">Western Sahara</option>
          <option value="YE">Yemen</option>
          <option value="ZM">Zambia</option>
          <option value="ZW">Zimbabwe</option>
        </select>
      </div>
      <div className="color--error">
        {touched && ((error && error) || (warning && warning))}
      </div>
    </div>
  );

  render() {
    const { handleSubmit, submitting, pristine, upcoming } = this.props;
    const {
      uuid,
      formSubmitted,
      error,
      address,
      extra,
      extraInitialData,
      errorReason
    } = this.state;

    return (
      <div>
        {!formSubmitted && (
          <div>
            {/*<h2>
              {localStorage.getItem('ref') === 'cryptoclub' && (
                <span>Join the private sale for Crypto Club members</span>
              )}
              {localStorage.getItem('ref') !== 'cryptoclub' && (
                <FormattedMessage id="form_title" />
              )}
            </h2>
            <hr className="short" />
            <div>
              <a
                href="/how-to-participate.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-info-circle" aria-hidden="true" />
              </a>{' '}
              {/*<a
                href="/how-to-participate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline' }}
              >
                How to participate in the Early Token Sale
              </a>
            </div>
              */}
            <Form
              onSubmit={handleSubmit(this._submit)}
              style={{ marginTop: '1em' }}
            >
              <div className="col-sm-6">
                <Field
                  component={this._renderTextField}
                  name="firstName"
                  required
                  label={this.props.intl.formatMessage({
                    id: 'form_firstname'
                  })}
                  autocomplete="given-name"
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
                  label={this.props.intl.formatMessage({
                    id: 'form_lastname'
                  })}
                  autocomplete="family-name"
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
                  label={this.props.intl.formatMessage({
                    id: 'form_email'
                  })}
                  autocomplete="email"
                  type="email"
                  placeholder="satoshi@nakamoto.com"
                  className="validate-required"
                />
              </div>
              <div className="col-sm-12">
                <Field
                  component={this._renderTextField}
                  name="addressLine1"
                  required
                  label={this.props.intl.formatMessage({
                    id: 'form_address'
                  })}
                  autocomplete="address-line1"
                  type="text"
                  className="validate-required"
                />
              </div>
              <div className="col-sm-6">
                <Field
                  component={this._renderTextField}
                  name="zipcode"
                  required
                  label={this.props.intl.formatMessage({
                    id: 'form_zipcode'
                  })}
                  autocomplete="postal-code"
                  type="text"
                  className="validate-required"
                />
              </div>
              <div className="col-sm-6">
                <Field
                  component={this._renderTextField}
                  name="city"
                  required
                  label={this.props.intl.formatMessage({
                    id: 'form_city'
                  })}
                  autocomplete="address-level2"
                  type="text"
                  className="validate-required"
                />
              </div>
              <div className="col-sm-6">
                <Field
                  component={this._renderTextField}
                  name="state"
                  required
                  label={this.props.intl.formatMessage({
                    id: 'form_state'
                  })}
                  autocomplete="address-level1"
                  type="text"
                />
              </div>
              <div className="col-sm-6">
                <Field
                  component={this._renderSelectField}
                  name="country"
                  required
                  label={this.props.intl.formatMessage({
                    id: 'form_country'
                  })}
                  autocomplete="country-name"
                  type="text"
                  className="validate-required"
                />
              </div>

              <div className="col-sm-12">
                <Field
                  component={this._renderTextField}
                  name="ethereumAddress"
                  required
                  label={this.props.intl.formatMessage({
                    id: 'form_ethereumaddress'
                  })}
                  type="text"
                  placeholder="0x52b8398551bb1d0bdc022355897508f658ad42f8"
                  className="validate-required"
                />
              </div>
              <div className="col-sm-12">
                <Field
                  component={this._renderTextField}
                  name="estimatedContribution"
                  required
                  label={this.props.intl.formatMessage({
                    id: 'form_estimatedcontribution'
                  })}
                  type="number"
                  placeholder="100"
                  className="validate-required"
                />
              </div>
              {/*<div className="col-sm-12">
                <div className="input-checkbox">
                  <Field
                    component="input"
                    type="checkbox"
                    name="agree"
                    required
                  />
                  <label htmlFor="agree" />
                </div>
                {/*<span>
                  I have downloaded, read, understood and agree to the{' '}
                  <a href="/termsandconditions.pdf" target="_blank">
                    terms and conditions
                  </a>
                </span>
              </div>*/}
              <div className="col-sm-12">
                <div className="form-group">
                  <button
                    className="btn btn-lg type--uppercase btn--primary"
                    type="submit"
                    disabled={pristine || submitting}
                    ga-on="click"
                    ga-event-category="BuyFunnel"
                    ga-event-action="StageOneSend"
                  >
                    <FormattedMessage id="form_button" />
                  </button>
                </div>
              </div>
            </Form>
          </div>
        )}
        {formSubmitted &&
          !error &&
          address !== false && (
            <SuccessResponse
              address={address}
              uuid={uuid}
              upcoming={upcoming}
              btcAddress={this.state.btcAddress}
            />
          )}
        {formSubmitted &&
          error !== false && <ErrorResponse error={errorReason} />}
        {formSubmitted &&
          extra !== false && (
            <DocumentResponse
              extraInitialData={extraInitialData}
              language={this.props.language}
            />
          )}
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'addressLine1',
    'zipcode',
    'city',
    'country',
    'ethereumAddress',
    'estimatedContribution'
  ];
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

export default injectIntl(
  reduxForm({ form: 'registration', validate })(RegisterForm)
);
