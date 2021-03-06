import PropTypes from 'prop-types';
import React from 'react';
import Money from '../../helpers/money.jsx';
import CheckoutTable from './CheckoutTable.jsx';
import FeesCalculator from '../../helpers/fees_calculator.jsx';

export default class FlatMonthlyCheckout extends React.Component {

  static propTypes = {
    selectedAmountInCents: PropTypes.number.isRequired,
    onClickEdit: PropTypes.func.isRequired,
  };

  asExactChange (amount) {
    return Money.renderAmountInCentsAsExactChange(amount);
  }

  selectedAmountInAsExactChange () {
    return this.asExactChange(this.props.selectedAmountInCents);
  }

  donationAmountInWords () {
    return `$${this.selectedAmountInAsExactChange()}/mo`;
  }

  processingAmountPerMonth () {
    const amount = this.props.selectedAmountInCents;

    return FeesCalculator.fees(amount);
  }

  processingAmountInWords () {
    const processingAmountPerMonth = this.processingAmountPerMonth();

    return `$${this.asExactChange(processingAmountPerMonth)}/mo`;
  }

  totalAmountPerMonth () {
    return this.processingAmountPerMonth() + this.props.selectedAmountInCents;
  }

  totalAmountInWords () {
    const totalAmountPerMonth = this.totalAmountPerMonth();

    return `$${this.asExactChange(totalAmountPerMonth)}/mo`;
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
