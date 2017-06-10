import PropTypes from 'prop-types';
import React from 'react';
import Money from '../../helpers/money.jsx';
import CheckoutTable from './CheckoutTable.jsx';

export default class SlingshotCheckout extends React.Component {

  static propTypes = {
    crowdFundType: PropTypes.string.isRequired,
    selectedAmountInCents: PropTypes.number.isRequired,
    onClickEdit: PropTypes.func.isRequired,
  };

  asExactChange (amount) {
    return Money.renderAmountInCentsAsExactChange(amount);
  }

  selectedAmountInAsExactChange () {
    return this.asExactChange(this.props.selectedAmountInCents);
  }

  monthlyAmountAsExactChange () {
    return this.asExactChange(this.props.selectedAmountInCents * 30);
  }

  donationAmountInWords () {
    return `$${this.selectedAmountInAsExactChange()}/day, ~$${this.monthlyAmountAsExactChange()}/mo`;
  }

  processingAmountPerMonth () {
    return (this.props.selectedAmountInCents * .084 * 30) + 30;
  }

  processingAmountInWords () {
    const processingAmountPerMonth = this.processingAmountPerMonth();

    return `~$${this.asExactChange(processingAmountPerMonth)}/mo`;
  }

  totalAmountPerMonth () {
    return this.processingAmountPerMonth() + (this.props.selectedAmountInCents * 30);
  }

  totalAmountInWords () {
    const totalAmountPerMonth = this.totalAmountPerMonth();

    return `~$${this.asExactChange(totalAmountPerMonth)}/mo`;
  }

  render () {
    return (
      <CheckoutTable donationAmountInWords={this.donationAmountInWords()}
                     processingAmountInWords={this.processingAmountInWords()}
                     totalAmountInWords={this.totalAmountInWords()}
                     onClickEdit={this.props.onClickEdit} />
    );
  }

};
