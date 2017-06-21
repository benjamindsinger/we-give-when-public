import React from 'react';
import UserEvents from '../helpers/user_events.jsx';
import Money from '../helpers/money.jsx';

export default {

  renderAmountButton (amount) {
    const selected = (amount === this.state.selectedAmountInCents);

    const className = selected ?
                      'amount_selector_button selected' :
                      'amount_selector_button';
    return (
      <div className={className}
           onClick={UserEvents.onSelectAmount.bind(this, amount)}>
        ${Money.renderAmountInCentsAsRoundDollars(amount)}
      </div>
    );
  },

  renderMaximumAmountButton (amount) {
    const selected = (amount === this.state.selectedMonthlyMaximumInCents);

    const className = selected ?
                      'amount_selector_button selected' :
                      'amount_selector_button';
    return (
      <div className={className}
           onClick={UserEvents.onSelectMonthlyMaximum.bind(this, amount)}>
        ${Money.renderAmountInCentsAsRoundDollars(amount)}
      </div>
    );
  },

  renderCustomAmountButton () {
    const selected = this.state.customAmountEntered ? 'selected' : '';
    const inputClass = `custom__selector ${selected}`;
    const divClass = `amount_selector_button custom__selector ${selected}`;

    return (
      <div className={divClass}>
        <span className='dollar'>$</span>
        <input type='tel'
               onChange={UserEvents.onTypeCustomDollarAmount.bind(this)}
               className={inputClass}
               placeholder='___' />
      </div>
    );
  },

  renderCustomMaximumAmountButton () {
    const selected = this.state.customMaximumEntered ? 'selected' : '';
    const inputClass = `custom__selector ${selected}`;
    const divClass = `amount_selector_button custom__selector ${selected}`;

    return (
      <div className={divClass}>
        <span className='dollar'>$</span>
        <input type='tel'
               onChange={UserEvents.onTypeCustomDollarMaximum.bind(this)}
               className={inputClass}
               placeholder='___' />
      </div>
    );
  },

};
