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

        <div style={{clear: 'both', marginTop: 60, marginBottom: 40}}>
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
          <h3>When</h3>
          <p>
            {this.props.whenStatement}
          </p>
          <span className='action_button_big'
               onClick={UserEvents.onChangeStep.bind(this, 1)}>
            {this.props.givePhrase}
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
