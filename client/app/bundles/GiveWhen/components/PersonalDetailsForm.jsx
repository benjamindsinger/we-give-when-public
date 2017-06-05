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

          <div className="input__row">

            <input type="text"
                   /*
                   onChange={this.props.onType.bind(this, 'firstName')}
                   value={this.props.firstName}
                    */
                   placeholder="First Name" />

            <input type="text"
                   /*
                   onChange={this.props.onType.bind(this, 'lastName')}
                   value={this.props.lastName}
                    */
                   placeholder="Last Name" />
          </div>

          <div className="long__input">
            <input type="text"
                   /*
                   onChange={this.props.onType.bind(this, 'address')}
                   value={this.props.address}
                    */
                   placeholder="Address" />
          </div>

          <div className="input__row">

            <input type="text"
                   /*
                   onChange={this.props.onType.bind(this, 'city')}
                   value={this.props.city}
                    */
                   style={{flex: 2}}
                   placeholder="City" />

            <input type="text"
                   style={{flex: 1}}
                   /*
                   onChange={this.props.onType.bind(this, 'zip')}
                   value={this.props.zip}
                    */
                   placeholder="ZIP" />
          </div>


        {
          /*


        <div>
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
