import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

import Money from '../helpers/money.jsx';
import Buttons from '../helpers/buttons.jsx';
import UserEvents from '../helpers/user_events.jsx';
import DataCuts from '../helpers/data_cuts.jsx';

export default class GiveWhenBlocks extends React.Component {
  displayName: 'GiveWhenBlocks';

  static propTypes = {
    crowdFundType: PropTypes.string.isRequired,
    giveStatement: PropTypes.string.isRequired,
    whenStatement: PropTypes.string.isRequired,
    givePhrase: PropTypes.string.isRequired,

    progressStatusPhrase: PropTypes.string.isRequired,
    progressGoalPhrase: PropTypes.string.isRequired,
    progressLeftPhrase: PropTypes.string.isRequired,
    progressTimePhrase: PropTypes.string.isRequired,

    onClickGive: PropTypes.func.isRequired,

    renderAmountButton: PropTypes.func.isRequired,
    renderMaximumAmountButton: PropTypes.func.isRequired,
    renderCustomAmountButton: PropTypes.func.isRequired,
    renderCustomMaximumAmountButton: PropTypes.func.isRequired,
  };

  render () {
    return (
      <div className="section flex give_when__section">
        {this.renderGive()}
        {this.renderArrowShape()}
        {this.renderWhen()}
        {this.renderDividerLine()}
        {this.renderProgressBar()}
      </div>
    );
  }

  renderGive () {
    const crowdFundType = this.props.crowdFundType;

    switch (crowdFundType) {
      case 'SLINGSHOT': return this.renderGiveForSlingshot();
      case 'COUNTDOWN': return this.renderGiveForCountdown();
    }
  }

  renderHeartIcon () {
    return (
      <svg x="0px" y="0px" viewBox="0 0 100 100"
           style={{
            height: 35,
            width: 35,
            margin: '0 auto',
            position: 'relative',
            top: 10
          }}>
        <path d="M74,55.1c-2.5,3-4.9,5.7-24,20.9l0,0l0,0C30.8,60.8,28.5,58.1,26,55.1c-9.2-11-6.7-23.4,0.6-28.6c6.5-4.6,15.7-2.9,23.4,5.9  c7.7-8.7,16.9-10.5,23.4-5.9C80.7,31.7,83.3,44.1,74,55.1z">
        </path>
      </svg>
    );
  }

  renderCalendarIcon () {
    return (
      <svg x="0px" y="0px" viewBox="-949 951 100 100"
           style={{
            height: 25,
            width: 25,
            position: 'relative',
            top: 2,
            left: 5
          }}>
        <path d="M-861,962.2h-7.9v8.9c0,3.8-3.1,6.9-6.9,6.9s-6.9-3.1-6.9-6.9v-8.9h-32.5v8.9c0,3.8-3.1,6.9-6.9,6.9s-6.9-3.1-6.9-6.9     v-8.9h-8c-4.5,0-8.1,3.6-8.1,8.1v70.1c0,4.5,3.6,8.1,8.1,8.1h76c4.5,0,8.1-3.6,8.1-8.1v-70.1C-852.9,965.8-856.5,962.2-861,962.2     z M-857.6,992.6v13.9H-882v-13.9H-857.6z M-911.3,1025.2v-13.9h24.6v13.9H-911.3z M-886.7,1029.9v14h-24.6v-14H-886.7z      M-916,1025.2h-24.5v-13.9h24.5V1025.2z M-911.3,1006.6v-13.9h24.6v13.9H-911.3z M-882,1011.3h24.4v13.9H-882V1011.3z      M-916,992.6v13.9h-24.5v-13.9H-916z M-940.4,1040.4v-10.5h24.5v14h-21C-938.9,1043.8-940.4,1042.3-940.4,1040.4z M-861,1043.8     h-21v-14h24.4v10.5C-857.6,1042.3-859.1,1043.8-861,1043.8z">
        </path>
        <path d="M-922.1,974.4c1.9,0,3.4-1.5,3.4-3.4v-14.2c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4v14.2     C-925.5,972.9-924,974.4-922.1,974.4z">
        </path>
        <path d="M-875.8,974.4c1.9,0,3.4-1.5,3.4-3.4v-14.2c0-1.9-1.5-3.4-3.4-3.4s-3.4,1.5-3.4,3.4v14.2     C-879.1,972.9-877.6,974.4-875.8,974.4z">
        </path>
      </svg>
    );
  }

  renderGiveForCountdown () {
    return (
      <div className="give_when__subsection" id="give">
        <h3>Give</h3>

        <div style={{clear: 'both', marginTop: 15}}>
          <p>
            {this.props.giveStatement}
          </p>
          <div className="selector__button__row">
            {this.props.renderAmountButton(100)}
            {this.props.renderAmountButton(300)}
            {this.props.renderAmountButton(1500)}
            {this.props.renderCustomAmountButton()}
          </div>
        </div>
      </div>
    );
  }

  renderGiveForSlingshot () {
    return (
      <div className="give_when__subsection" id="give">
        <h3 style={{marginTop: 10}}>
          Give {this.renderHeartIcon()}
        </h3>

        <div style={{clear: 'both', marginTop: 15}}>
          <p>
            {this.props.giveStatement}
          </p>
          <div className="selector__button__row">
            {this.props.renderAmountButton(100)}
            {this.props.renderAmountButton(300)}
            {this.props.renderAmountButton(1500)}
            {this.props.renderCustomAmountButton()}
          </div>
        </div>

        <div style={{clear: 'both', marginTop: 30, marginBottom: 40}}>
          <p>
            Monthly maximum:
          </p>
          <div className="selector__button__row">
            {this.props.renderMaximumAmountButton(1500)}
            {this.props.renderMaximumAmountButton(4500)}
            {this.props.renderMaximumAmountButton(15000)}
            {this.props.renderCustomMaximumAmountButton()}
          </div>
        </div>
      </div>
    );
  }

  renderArrowShape () {
    return (
      <div className="arrow_box" style={{flex: 0}}>
      </div>
    );
  }

  renderWhen () {
    return (
      <div className="give_when__subsection" id="when">
        <div>
          <h3>
            When {this.renderCalendarIcon()}
          </h3>
          <p>
            {this.props.whenStatement}
          </p>
          <span className='action_button_big'
                onClick={this.props.onClickGive}>
            {this.props.givePhrase} →
          </span>
        </div>
      </div>
    );
  }

  renderDividerLine () {
    return (
      <div id="divider-line"
        style={{
        minHeight: 100,
        margin: '15px 0',
        width: 2,
        backgroundColor: '#1c407b',
        display: 'inline',
        float: 'right',
        flex: 0.005
      }}>
      </div>
    );
  }

  renderProgressBar () {
    return (
      <div className="give_when__subsection" id="progress-bar">
        <div style={{
          width: '80%',
          margin: '30px auto',
          position: 'relative',
        }}>
          <h3 style={{color: '#1c407b', lineHeight: '7.5px'}}>
            {this.props.progressStatusPhrase}
          </h3>
          <p style={{color: '#1c407b', lineHeight: '7.5px'}}>
            {this.props.progressGoalPhrase}
          </p>
          <div className="progress__bar">
          <div className="progress__bar__inner" /></div>
          <p style={{color: 'red', lineHeight: '7.5px'}}>
            {this.props.progressLeftPhrase}
          </p>
          <p style={{color: 'red', lineHeight: '7.5px'}}>
            {this.props.progressTimePhrase}
          </p>
        </div>
      </div>
    );
  }

};
