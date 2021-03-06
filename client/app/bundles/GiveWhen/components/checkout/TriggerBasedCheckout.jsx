import PropTypes from 'prop-types';
import React from 'react';
import Money from '../../helpers/money.jsx';
import CheckoutTable from './CheckoutTable.jsx';
import FeesCalculator from '../../helpers/fees_calculator.jsx';

export default class TriggerBasedCheckout extends React.Component {

  static propTypes = {
    selectedAmountInCents: PropTypes.number.isRequired,
    selectedMonthlyMaximumInCents: PropTypes.number.isRequired,
    onClickEdit: PropTypes.func.isRequired,
  };

  asExactChange (amount) {
    return Money.renderAmountInCentsAsExactChange(amount);
  }

  selectedAmountInAsExactChange () {
    return this.asExactChange(this.props.selectedAmountInCents);
  }

  maximumAmountAsExactChange () {
    return this.asExactChange(this.props.selectedMonthlyMaximumInCents);
  }

  donationAmountInWords () {
    return `$${this.selectedAmountInAsExactChange()}/trigger up to $${this.maximumAmountAsExactChange()}/mo`;
  }

  processingAmount () {
    const maximumAmountInCents = this.props.selectedMonthlyMaximumInCents;

    return FeesCalculator.fees(maximumAmountInCents);
  }

  processingAmountInWords () {
    const processingAmount = this.processingAmount();

    return `Up to $${this.asExactChange(processingAmount)}/mo`;
  }

  totalAmount () {
    const maximumAmountInCents = this.props.selectedMonthlyMaximumInCents;
    const processingAmount = this.processingAmount();

    return maximumAmountInCents + processingAmount;
  }

  totalAmountInWords () {
    const totalAmount = this.totalAmount();

    return `Up to $${this.asExactChange(totalAmount)}/mo`;
  }

  render () {
    return (
      <CheckoutTable donationAmountInWords={this.donationAmountInWords()}
                     processingAmountInWords={this.processingAmountInWords()}
                     totalAmountInWords={this.totalAmountInWords()}
                     onClickEdit={this.props.onClickEdit} />
    );
  }

}
