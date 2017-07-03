import PropTypes from 'prop-types';
import React from 'react';

import Twitter from '../../helpers/twitter.jsx';
import Facebook from '../../helpers/facebook.jsx';

export default class DemocracySpringLetter extends React.Component {

  static propTypes = {
    twitterMessage: PropTypes.string.isRequired,
  };

  render () {
    return (
      <div className="section">

        <div style={{textAlign: 'center', width: '100%'}}>
          <h3 className="content_headline"
              style={{
                textTransform: 'uppercase',
                color: '#f90016',
                marginBottom: 40
              }}>
            THE DEMOCRACY SPRING MOVEMENT HOUSE
          </h3>
        </div>

        <div style={{
          width: '66%',
          margin: '0 auto',
          fontSize: '1.125em'
        }}>

          <p>Democracy Spring is building a 50 state nonviolent army of grassroots volunteers to defend democracy from Trump and the GOP and to take over the Democratic Party with bold progressives. We're using militant, nonviolent civil resistance to fight for a democracy that works for all of us, not just the wealthiest 1%.</p>

          <p>To make that vision a reality, we are dramatically expanding our dedicated staff of full-time organizers who will be training, coaching and supporting our local volunteer leaders from across the country. The most efficient, cost-effective way we know to do that is to put all of those organizers under one roof: we are going to rent a Movement House in Washington DC for one year to spearhead the political revolution. </p>

          <p>If we meet our goal of $100 per day, we will raise $36,500 over the year, enough to pay for at least half of one year’s rent for a Movement House that will support more than a dozen full-time organizers – people committing their lives to the struggle for democracy. </p>

          <p>Please make a contribution and share this page with your friends, family, and co-workers. </p>

          <br/>

          <p style={{fontStyle: 'italic'}}>Thank you!</p>

          <br/>

          <p style={{fontStyle: 'italic'}}>Onward,</p>
          <p style={{fontStyle: 'italic'}}>The Democracy Spring Team</p>
        </div>

        <br/>

        <Twitter message={this.props.twitterMessage} />

        <div className="social__sharing__button facebook">
          {Facebook.renderLogo()}
          {Facebook.button()}
        </div>

      </div>
    );
  }
}
