import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Form, Field, reduxForm } from 'redux-form';
import axios from 'axios';
import SuccessResponse from './SuccessResponse';
import ErrorResponse from './ErrorResponse';

class DocumentResponse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      loadedFiles: [],
    };
  }

  onDrop = acceptedFiles => {
    const loadedFiles = [];
    const files = [];

    acceptedFiles.forEach(file => {
      files.push(file);
      const reader = new FileReader();
      reader.onload = inputFile => {
        loadedFiles.push(
          `${file.type};base64,${Buffer.from(inputFile.target.result).toString(
            'base64'
          )}`
        );
      };
      reader.readAsArrayBuffer(file);
    });
    this.setState({ loadedFiles, files });
  };

  _submit = values => {
    axios
      .post(
        `${process.env.REACT_APP_API_URI}api/kycstage3`,
        {
          ...this.props.extraInitialData,
          ...values,
          doc: this.state.loadedFiles[0],
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
        console.log({ response: response.data });
        this.setState({
          formSubmitted: true,
          waitingForDocumentValidation: true,
          error: response.data.failure || false,
          errorReason: response.data.response.ednaScoreCard.er || false,
          address: response.data.address || false,
          extra: response.data.extra || false,
          extraId: response.data.response.mtid || false,
          uuid: response.data.uuid || false,
        });
        this._checkDocumentStatus(response.data.response.mtid);
      })
      .catch(error => {
        console.log(error);
      });
  };

  _checkDocumentStatus = mtid => {
    setTimeout(() => {
      axios
        .post(
          `${process.env.REACT_APP_API_URI}api/kycstatus/${mtid}`,
          {
            ...this.props.extraInitialData,
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
          console.log(response.data);

          const { state } = response.data.response;
          if (state === 'R') {
            this._checkDocumentStatus(mtid);
          } else {
            this.setState({
              waitingForDocumentValidation: false,
              error: response.data.failure || false,
              errorReason: response.data.response.ednaScoreCard.er || false,
              address: response.data.address || false,
              uuid: response.data.uuid || false,
            });
          }
        })
        .catch(error => {
          console.log(error);
          this._checkDocumentStatus(mtid);
        });
    }, 1000);
  };

  _renderCountrySelectField = ({
    input,
    label,
    helptext,
    type,
    meta: { touched, error, warning },
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

  _renderSelectField = ({
    input,
    label,
    helptext,
    type,
    meta: { touched, error, warning },
  }) => (
    <div
      className={`form-group ${touched &&
        ((error && 'has-danger') || (warning && 'has-warning'))}`}
    >
      <label className="type--uppercase ">{label}</label>
      <div className="input-select">
        <select {...input}>
          <option value="default" />
          <option value="DL">Driving License</option>
          <option value="PP">Passport</option>
          <option value="ID">Identity Card</option>
          <option value="RP">Residence Permit</option>
        </select>
      </div>
      <div className="color--error">
        {touched && ((error && error) || (warning && warning))}
      </div>
    </div>
  );

  render() {
    const { handleSubmit, submitting, pristine } = this.props;
    const {
      formSubmitted,
      address,
      error,
      waitingForDocumentValidation,
      uuid,
      errorReason,
    } = this.state;
    let dropzoneRef;
    window.ga('send', {
      hitType: 'event',
      eventCategory: 'Funnel',
      eventAction: 'Stage3',
      eventLabel: 'EarlyTokenSale',
    });
    return (
      <div>
        {!formSubmitted && <h2>We need some extra information</h2>}
        {formSubmitted && waitingForDocumentValidation && <h2>Checking...</h2>}
        {!waitingForDocumentValidation && <hr className="short" />}
        {!formSubmitted &&
          !submitting && (
            <Form
              onSubmit={handleSubmit(this._submit)}
              style={{ marginTop: '1em' }}
            >
              <div className="col-sm-6">
                <Field
                  component={this._renderSelectField}
                  name="doctype"
                  required
                  label="Document type"
                  className="validate-required"
                />
              </div>
              <div className="col-sm-6">
                <Field
                  component={this._renderCountrySelectField}
                  name="doccountry"
                  required
                  label="Issuing country"
                  type="text"
                  className="validate-required"
                />
              </div>
              <div className="col-sm-12">
                <label className="type--uppercase ">
                  Scan: (JPG or PNG format, maximum 5MB)
                </label>
                <Dropzone
                  onDrop={this.onDrop}
                  ref={node => {
                    dropzoneRef = node;
                  }}
                  multiple={false}
                  accept="image/jpeg, image/png"
                  maxSize={5000000}
                  style={{
                    width: '100%',
                    height: 200,
                    borderWidth: 2,
                    borderColor: '#666',
                    borderStyle: 'dashed',
                    borderRadius: 5,
                  }}
                >
                  {this.state.files.map(file => {
                    return (
                      <img
                        key={file.name}
                        src={file.preview}
                        alt={file.name}
                        style={{
                          maxHeight: '100%',
                          margin: '0 auto',
                          display: 'block',
                        }}
                      />
                    );
                  })}
                </Dropzone>
                {this.state.files.length === 0 && (
                  <button
                    type="button"
                    className="btn btn--primary"
                    onClick={() => {
                      dropzoneRef.open();
                    }}
                    style={{
                      padding: '0 10px',
                      marginTop: '10px',
                      backgroundColor: '#666',
                      borderColor: '#666',
                    }}
                  >
                    Select file
                  </button>
                )}
              </div>

              <div className="col-sm-12">
                <div className="form-group">
                  <button
                    className="btn btn-lg type--uppercase btn--primary"
                    type="submit"
                    disabled={
                      pristine || submitting || !(this.state.files.length > 0)
                    }
                    ga-on="click"
                    ga-event-category="BuyFunnel"
                    ga-event-action="StageThreeSend"
                  >
                    Show me the early token sale address
                  </button>
                </div>
              </div>
            </Form>
          )}
        {(submitting || formSubmitted) &&
          waitingForDocumentValidation && (
            <div className="col-sm-12">
              <div className="ldr">Checking...</div>
              <div
                className="btn btn-lg type--uppercase btn--secondary"
                style={{
                  textAlign: 'center',
                }}
              >
                Wait while your document is being verified...
              </div>
            </div>
          )}
        {formSubmitted &&
          !waitingForDocumentValidation &&
          address !== false && (
            <SuccessResponse address={address} uuid={uuid} />
          )}
        {formSubmitted &&
          !waitingForDocumentValidation &&
          error !== false && <ErrorResponse error={errorReason} />}
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  const requiredFields = ['doctype'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `this is a required field`;
    }
  });
  return errors;
};

export default reduxForm({ form: 'document', validate })(DocumentResponse);
