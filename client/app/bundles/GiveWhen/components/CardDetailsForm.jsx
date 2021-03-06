import PropTypes from 'prop-types';
import React from 'react';
import 'whatwg-fetch';

import Mixpanel from '../helpers/mixpanel.jsx';

import SocialSharingPage from './SocialSharingPage.jsx';
import TriggerBasedCheckout from './checkout/TriggerBasedCheckout.jsx';
import FlatMonthlyCheckout from './checkout/FlatMonthlyCheckout.jsx';

export default class CardDetailsForm extends React.Component {

  static propTypes = {
    stripePublishableKey: PropTypes.string.isRequired,
    notifyAirbrake: PropTypes.func.isRequired,

    selectedAmountInCents: PropTypes.number.isRequired,
    selectedMonthlyMaximumInCents: PropTypes.number,
    onClickEdit: PropTypes.func.isRequired,

    onType: PropTypes.func.isRequired,
    selectedAmount: PropTypes.number.isRequired,
    selectedMonthlyMaximum: PropTypes.number.isRequired,

    coverFees: PropTypes.bool.isRequired,
    funderDetails: PropTypes.object.isRequired,
    crowdFundMembershipDetails: PropTypes.object.isRequired,

    /* Social sharing */
    suggestedEmailSubject: PropTypes.string,
    suggestedEmailBody: PropTypes.string,
    twitterMessage: PropTypes.string,
    hideFacebook: PropTypes.bool,

    /* Campaign type */
    flatMonthlyAmount: PropTypes.bool.isRequired,
  };

  constructor (props) {
    super();

    this.state = {
      submissionSentToStripe: false,
      tokenSaveOK: false,
      tokenSaveFail: false,
    };
  }

  componentDidMount () {
    window.scrollTo(0, 0);

    const stripe = window.Stripe(this.props.stripePublishableKey);
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
        // Tell the user you're submitting card details to stripe
        this.setState({ submissionSentToStripe: true });
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

          Mixpanel.registerEvent("GET_RESPONSE_FROM_STRIPE", {
            base_url: window.location.origin,
            success: true,
          });

        } else {
          this.setState({ tokenSaveFail: true });

          this.props.notifyAirbrake();

          Mixpanel.registerEvent("GET_RESPONSE_FROM_STRIPE", {
            base_url: window.location.origin,
            success: false,
          });

        }
      });
    };
  }

  submissionStatusText () {
    if (this.state.submissionSentToStripe) return 'submitting...';

    return 'submit →';
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

  renderTokenSaveSuccess () {
    return (
      <SocialSharingPage
        twitterMessage={this.props.twitterMessage}
        hideFacebook={this.props.hideFacebook}
        suggestedEmailSubject={this.props.suggestedEmailSubject}
        suggestedEmailBody={this.props.suggestedEmailBody}
      />
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

          <div id="payment-form-wrapper">
            <form id="payment-form">
              <div style={{
                backgroundColor: 'white',
                height: 50,
                border: 'none',
                borderRadius: 6,
                fontFamily: 'Helvetica',
                boxShadow: '0 4px 4px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.24)',
                fontSize: 22,
                color: 'black',
                textIndent: 10,
              }}>
                <div id="card-element" style={{
                  position: 'relative',
                  top: '7px',
                  left: '6px',
                }}>
                  {/* a Stripe Element will be inserted here.*/}
                </div>

                {/* Used to display Element errors. */}
                <div id="card-errors-wrapper"
                  style={{
                    backgroundColor: 'white',
                  }}>
                  <div id="card-errors" style={{
                    margin: 20,
                    color: 'red',
                  }}
                  ></div>
                </div>
              </div>

              <div className="checkout__area">

                {this.renderCheckoutTable()}

                <div className="divider__line"></div>
                <div style={{textAlign: 'center'}}>
                  <button id="submit-stripe"
                          className="action_button_big">
                    {this.submissionStatusText()}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  renderCheckoutTable () {
    const flatMonthlyAmount = this.props.flatMonthlyAmount;

    if (flatMonthlyAmount) return this.renderFlatMonthlyCheckout();

    return this.renderTriggerBasedCheckout();
  }

  renderTriggerBasedCheckout () {
    return (
      <TriggerBasedCheckout
        selectedAmountInCents={this.props.selectedAmountInCents}
        selectedMonthlyMaximumInCents={this.props.selectedMonthlyMaximumInCents}
        onClickEdit={this.props.onClickEdit} />
    );
  }

  renderFlatMonthlyCheckout () {
    return (
      <FlatMonthlyCheckout
        selectedAmountInCents={this.props.selectedAmountInCents}
        onClickEdit={this.props.onClickEdit} />
    );
  }

}

