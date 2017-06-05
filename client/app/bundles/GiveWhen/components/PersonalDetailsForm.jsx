import PropTypes from 'prop-types';
import React from 'react';

export default class PersonalDetailsForm extends React.Component {

  render () {
    return (
      <div className="personal__details__form__wrapper">
        <div className="personal__details__form">
          <div className="long__input">
            <input type="text"
                   /*
                   onChange={this.props.onTypeFormInput.bind(this, 'email')}
                   value={this.props.email}
                    */
                   placeholder="Email address" />
          </div>
        {
          /*
        <div>
          <div className="twin-inputs">
            <input type="text"
                   onChange={this.props.onType.bind(this, 'firstName')}
                   value={this.props.firstName}
                   placeholder="First Name" />

            <input type="text"
                   onChange={this.props.onType.bind(this, 'lastName')}
                   value={this.props.lastName}
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
                   placeholder="Phone" />
          </div>
        </div>
        */}
        </div>
      </div>
    );
  }

};
