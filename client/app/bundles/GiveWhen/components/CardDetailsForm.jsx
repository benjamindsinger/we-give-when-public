import PropTypes from 'prop-types';
import React from 'react';

import Money from '../helpers/money.jsx';

import SocialSharingPage from './SocialSharingPage.jsx';

export default class CardDetailsForm extends React.Component {

  static propTypes = {
    stripePublishableKey: React.PropTypes.string.isRequired,

    onType: React.PropTypes.func.isRequired,
    selectedAmount: React.PropTypes.number.isRequired,
    selectedMonthlyMaximum: React.PropTypes.number.isRequired,

    coverFees: React.PropTypes.bool.isRequired,
    funderDetails: React.PropTypes.object.isRequired,
    crowdFundMembershipDetails: React.PropTypes.object.isRequired
  };

  constructor (props) {
    super();

    this.state = {
      tokenSaveOK: false,
      tokenSaveFail: false,
    };
  }

  componentDidMount () {
    const stripe = Stripe(this.props.stripePublishableKey);
    const elements = stripe.elements();

    const style = {
      base: {
        fontSize: '22px',
        lineHeight: '36px'
      },
    };

    const card = elements.create('card', { style });
    card.mount('#card-element');

    // Listen for errors
    card.addEventListener('change', ({error}) => {
      const displayError = document.getElementById('card-errors');
      if (error) {
        displayError.textContent = error.message;
      } else {
        displayError.textContent = '';
      }
    });

    // Create a token or display an error the form is submitted.
    const form = document.getElementById('payment-form');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const {token, error} = await stripe.createToken(card);

      if (error) {
        // Inform the user if there was an error
        const errorElement = document.getElementById('card-errors');
        errorElement.textContent = error.message;
      } else {
        // Send the token to your server
        stripeTokenHandler(token);
      }
    });

    // Create a token or display an error the form is submitted.
    const stripeTokenHandler = (token) => {
      fetch('/funders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          stripeToken: token,
          funderDetails: this.props.funderDetails,
          crowdFundMembershipDetails: this.props.crowdFundMembershipDetails
        })
      }).then(response => {
        return response.json();
      }).then(data => {
        if (data === 'ok') {
          this.setState({ tokenSaveOK: true });
        } else {
          this.setState({ tokenSaveFail: true });
        }
      });
    }
  }

  donationAmountInWords () {
    const selectedAmountInDollars = Money.renderAmountInCentsAsExactChange(this.props.selectedAmountInCents);
    const maximumAmountInDollars = Money.renderAmountInCentsAsExactChange(this.props.selectedMonthlyMaximumInCents);

    return `$${selectedAmountInDollars}/trigger up to $${maximumAmountInDollars}/mo`;
  }

  processingAmount () {
    const maximumAmountInCents = this.props.selectedMonthlyMaximumInCents;

    return (maximumAmountInCents * .084) + 30;
  }

  processingAmountInWords () {
    const processingAmount = this.processingAmount();
    const processingAmountAsDollars = Money.renderAmountInCentsAsExactChange(processingAmount);

    return `Up to $${processingAmountAsDollars}/mo`;
  }

  totalAmount () {
    const maximumAmountInCents = this.props.selectedMonthlyMaximumInCents;
    const processingAmount = this.processingAmount();

    return maximumAmountInCents + processingAmount;
  }

  totalAmountInWords () {
    const totalAmount = this.totalAmount();
    const totalAmountAsDollars = Money.renderAmountInCentsAsExactChange(totalAmount);

    return `Up to $${totalAmountAsDollars}/mo`;
  }

  renderTokenSaveSuccess () {
    return (
      <SocialSharingPage />
    );
  }

  renderTokenSaveFail () {
    return (
      <div className="personal__details__form__wrapper color_scheme__white_blue card__details__form below__fixed__navbar">
        Sign Up Failed :/
      </div>
    );
  }

  renderStripeForm () {
    return (
      <div className="personal__details__form__wrapper color_scheme__white_blue card__details__form below__fixed__navbar">
        <div className="personal__details__form card__details__form">

          <form id="payment-form"
                style={{
                  margin: '60px 0'
                }}>
            <div style={{
              backgroundColor: 'white',
              height: 40,
              border: 'none',
              fontFamily: 'Helvetica',
              fontSize: 20,
              color: 'black',
            }}>
              <div id="card-element" style={{
                position: 'relative',
                top: '2px',
                left: '6px',
              }}>
                {/* a Stripe Element will be inserted here.*/}
              </div>

              {/* Used to display Element errors. */}
              <div id="card-errors"></div>
            </div>

            <div className="checkout__area">

              <div className="divider__line"></div>

              <table>
                <tbody>
                  <tr>
                    <td>
                      Donation
                    </td>
                    <td>
                      {this.donationAmountInWords()} <a className="edit" onClick={this.props.onClickEdit}>
                        [edit]
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Processing cost
                    </td>
                    <td>
                      {this.processingAmountInWords()}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Maximum total
                    </td>
                    <td>
                      {this.totalAmountInWords()}
                    </td>
                  </tr>
                </tbody>
              </table>

              <button id="submit-stripe"
                      className="action_button_big">
                submit →
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  render () {
    if (this.state.tokenSaveOK === true) {
      return this.renderTokenSaveSuccess();
    } else if (this.state.tokenSaveFail === true) {
      return this.renderTokenSaveFail();
    } else {
      return this.renderStripeForm();
    }
  }

};

