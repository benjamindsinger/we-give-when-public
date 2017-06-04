import PropTypes from 'prop-types';
import React from 'react';

import SummaryArea from './summary_area.es6.jsx';
import Footer from './footer.es6.jsx';
import { usStates } from './us_states.es6.jsx';

export default class PersonalDetailsForm extends React.Component {

  renderForm () {
    return (
      <div>
        <div>
          <input type="text"
                 onChange={this.props.onType.bind(this, 'email')}
                 value={this.props.email}
                 className="donor-details big"
                 placeholder="Email address" />
        </div>

        <div>
          <div className="twin-inputs">
            <input type="text"
                   onChange={this.props.onType.bind(this, 'firstName')}
                   value={this.props.firstName}
                   className="donor-details small"
                   placeholder="First Name" />

            <input type="text"
                   onChange={this.props.onType.bind(this, 'lastName')}
                   value={this.props.lastName}
                   className="donor-details small"
                   placeholder="Last Name" />
          </div>
        </div>

        <div>
          <input type="text"
                 onChange={this.props.onType.bind(this, 'address')}
                 value={this.props.address}
                 className="donor-details big"
                 placeholder="Address" />
        </div>

        <div>
          <div className="twin-inputs">

            <input type="text"
                   onChange={this.props.onType.bind(this, 'city')}
                   value={this.props.city}
                   className="donor-details small"
                   style={{flex: 2}}
                   placeholder="City" />


            <select className="donor-details small" style={{flex: 1}}
                    onChange={this.props.onType.bind(this, 'usState')}>
              <option selected disabled>State</option>
              {usStates.map((state) => {
                return <option key={state}>{state}</option>;
              })}
            </select>

            <input type="text"
                   style={{flex: 1}}
                   onChange={this.props.onType.bind(this, 'zip')}
                   value={this.props.zip}
                   className="donor-details small"
                   placeholder="ZIP" />
          </div>
        </div>

        <div>
          <div className="twin-inputs">

            <input type="text"
                   onChange={this.props.onType.bind(this, 'phone')}
                   value={this.props.phone}
                   className="donor-details small"
                   placeholder="Phone" />
          </div>
        </div>
      </div>
    );
  }

  renderOccupationAndEmployerFields () {
    if (this.props.notEmployed) return null;

    return (
      <div>
        <div className="twin-inputs">
          <input type="text"
                 onChange={this.props.onType.bind(this, 'occupation')}
                 value={this.props.occupation}
                 className="donor-details small"
                 placeholder="Occupation" />

          <input type="text"
                 onChange={this.props.onType.bind(this, 'employer')}
                 value={this.props.employer}
                 className="donor-details small"
                 placeholder="Employer" />
        </div>
      </div>
    );
  }

  renderPageTitle () {
    return (
      <div style={{ textAlign: 'center', margin: '32px 0px' }}>
        <h1>Your Info</h1>
        <div>All fields required.</div>
      </div>
    );
  }

  renderSummaryArea () {
    return (
      <SummaryArea motivationStatement={this.props.motivationStatement}
                   eventName={this.props.eventName}
                   selectedAmount={this.props.selectedAmount}
                   selectedMonthlyMaximum={this.props.selectedMonthlyMaximum}
                   renderEditButton={this.props.renderEditButton} />
    );
  }

  render () {
    return (
      <div className="explanation-box-wrapper">
        <div className="explanation-box">
          <div className="explanation-box-section">

            {this.renderSummaryArea()}

            {this.renderPageTitle()}

            {this.renderForm()}

            <div style={{textAlign: 'center', color: 'gray', margin: 12}}>
              Campaign finance law requires us to collect your occupation and employer.
            </div>

            <div style={{textAlign: 'center', margin: 12}}>
              <input type="checkbox"
                     onClick={this.props.onClickNotEmployed}
                     id="retired-or-not-employed" />
              <label htmlFor="retired-or-not-employed">
                Click here if you are retired or not employed.
              </label>
            </div>

            {this.renderOccupationAndEmployerFields()}

            {this.props.renderContinueButton()}

          </div>
        </div>

        <Footer footerContent={this.props.footerContent} />

      </div>
    );
  }

};

PersonalDetailsForm.propTypes = {
  // Amount summary
  eventName: React.PropTypes.string.isRequired,
  selectedAmount: React.PropTypes.number.isRequired,
  selectedMonthlyMaximum: React.PropTypes.number.isRequired,

  // Form details
  email: React.PropTypes.string.isRequired,
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string.isRequired,
  address: React.PropTypes.string.isRequired,
  city: React.PropTypes.string.isRequired,
  usState: React.PropTypes.string.isRequired,
  zip: React.PropTypes.string.isRequired,
  phone: React.PropTypes.string.isRequired,
  occupation: React.PropTypes.string,
  employer: React.PropTypes.string,

  // UI
  onType: React.PropTypes.func.isRequired,
  onClickNotEmployed: React.PropTypes.func.isRequired,
  notEmployed: React.PropTypes.bool.isRequired,

  // Navigation
  renderEditButton: React.PropTypes.func.isRequired,
  renderContinueButton: React.PropTypes.func.isRequired,

  // Footer
  footerContent: React.PropTypes.string,
};
