import PropTypes from 'prop-types';
import React from 'react';

export default class CheckoutTable extends React.Component {

  static propTypes = {
    donationAmountInWords: PropTypes.string.isRequired,
    processingAmountInWords: PropTypes.string.isRequired,
    totalAmountInWords: PropTypes.string.isRequired,
    onClickEdit: PropTypes.func.isRequired,
  };

  render () {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              Donation
            </td>
            <td>
              {this.props.donationAmountInWords} <a className="edit" onClick={this.props.onClickEdit}>
                [edit]
              </a>
            </td>
          </tr>
          <tr>
            <td>
              Processing
            </td>
            <td>
              {this.props.processingAmountInWords}
            </td>
          </tr>
          <tr>
            <td>
              Total
            </td>
            <td>
              {this.props.totalAmountInWords}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

};
