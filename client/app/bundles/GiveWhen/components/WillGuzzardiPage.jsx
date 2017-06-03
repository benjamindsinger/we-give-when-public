import PropTypes from 'prop-types';
import React from 'react';

export default class WillGuzzardiPage extends React.Component {
  displayName: 'WillGuzzardiPage';

  static propTypes = {
    // name: PropTypes.string.isRequired,
  };

  constructor(props, _railsContext) {
    super(props);

    this.state = { name: this.props.name };
  }

  render () {
    return (
      <div className="color_scheme__green_blue">
        {this.renderNavbar()}
        {this.renderHeadlineSection()}
        {this.renderGiveWhen()}
        {this.renderStatementOfPurpose()}
        {this.renderBenefitStatement()}
        {this.renderEmphasisStatement()}
        {this.renderDetailedAgenda()}
        {this.renderClosingLetter()}
        {this.renderFooter()}
      </div>
    );
  }

  renderNavbar () {
    return (
      <div className="navbar">
        {this.renderLogo()}
        <div id="sentence">
          <p>
            <span className="action_button">Give $1 every time</span> an anti-living-wage corporation writes a campaign check.
          </p>
        </div>
      </div>
    );
  }

  renderHeadlineSection () {
    return (
      <div className="section flex headline__section">
        <div className="text color__bright">
          <h1>
            Elect Candidates Who Fight For $15
          </h1>
          <div className="divider__line"></div>
          <p>
            Big business is pulling the strings. Let’s fight back to support the people’s candidates.
          </p>
        </div>

        <img src="/fightfor15photo.jpg" />
      </div>
    );
  }

  renderLogo () {
    return (
      <div className="logo" style={{ margin: '20px', height: '50px' }}>
        <img src='/guzzardi-logo-small.jpg'
             style={{ margin: '10px' }}/>
      </div>
    );
  }

  renderProgressBar () {
    return (
      <div className="give_when__subsection" id="progress-bar">
        <div style={{
          width: '80%',
          margin: '40px auto',
          position: 'relative',
        }}>
          <h3 style={{color: '#1c407b', lineHeight: '7.5px'}}>
            $53 raised
          </h3>
          <p style={{color: '#1c407b', lineHeight: '7.5px'}}>
            of $100 goal
          </p>
          <div style={{
            backgroundColor: '#ccc',
            height: '10px',
            margin: '20px 0'
          }}>
            <div style={{
              backgroundColor: 'rgb(67, 222, 31)',
              height: '10px',
              width: '55%'
            }} />
          </div>
          <p style={{color: '#1c407b', lineHeight: '7.5px'}}>
            53 backers
          </p>
          <p style={{color: 'red', lineHeight: '7.5px'}}>
            17 days left
          </p>
        </div>
      </div>
    );
  }

  renderGiveWhen () {
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
    return (
      <div className="give_when__subsection" id="give">
        <div class="wrapper">
          <h3>Give</h3>
          <p>
            Chip in to support candidates who Fight for $15
          </p>
          <div style={{
            margin: '0 auto',
            width: '85%',
          }}>
            {this.renderSelectorButton('50¢', false)}
            {this.renderSelectorButton('$1', true)}
            {this.renderSelectorButton('$3', false)}
            {this.renderSelectorButton('...', false)}
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
            Every time an anti-living-wage writes a campaign check
          </p>
          <div style={{
            margin: '0 auto',
            width: 140,
          }}>
            {this.renderSelectorButton('continue →', true)}
          </div>
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

  renderSelectorButton (amount, selected) {
    const className = selected ?
                      'amount_selector_button selected' :
                      'amount_selector_button';
    return (
      <div className={className}>
        {amount}
      </div>
    );
  }

  renderBenefitStatement () {
    return (
      <div style={{
        width: '100%',
      }}>
        <div style={{
          width: '70%',
          margin: '30px auto',
          padding: '30px 0',
          textAlign: 'center',
          fontSize: '1.25em'
        }}>
          <p style={{fontWeight: 'bold', display: 'inline', height: '100px'}}>
            <span className="action_button">Sign up</span> as an automatic responder and you'll get monthly updates from one of the organizers we hire to help force the Democrats to break with Big Money.
          </p>
        </div>
      </div>
    );
  }

  renderStatementOfPurpose () {
    return (
      <div style={{
        backgroundColor: '#01943b',
        color: 'white'
      }}>
        <div style={{
          padding: 30,
          width: '60%',
          margin: '0 auto',
        }}>
          <h1 className="subheadline">
            As long as big business pulls the strings in Springfield, we'll never raise the minimum wage
          </h1>

          <br/>

          <div style={{
            border: '2px solid white'
          }}></div>

          <br/>

          <div style={{fontSize: '1.25em'}}>
            <p>Walmart, McDonalds, the Chamber of Commerce, the Restaurant Association, and the Retail Merchants are some of the groups we're up against.</p>
          </div>
        </div>
      </div>
    );
  }

  renderEmphasisStatement () {
    return (
      <div className="section flex">
        <div className="text red">
          <h3 className="content_headline">
            Speak Up. Stand Up. Support the Movement.
          </h3>

          <div style={{
            border: '2px solid white',
            width: '100%',
            margin: '10px 0'
          }} />

          <p>We need a true People's Party. Tell Democrats at every level of government that this is the kind of change we need to protect our people and defend our democracy.</p>

          <p>Support the campaign, then share. Let’s build this movement.</p>
        </div>
        <img src="/democracy-spring-marching.jpg" />
      </div>
    );
  }

  renderDetailedAgenda () {
    return (
      <div className="section flex">
        <img src="/democracy-spring-capitol-small.jpg"
             className="big" />

        <div className="text darkblue">
          <h3 className="content_headline">
            Support this campaign if you think the democrats must:
          </h3>

          <div style={{
            border: '2px solid white',
            width: '100%',
            margin: '10px 0'
          }} />

          <p style={{
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>Fiercely resist Trump and his agenda of bigotry and greed</p>
          <p>a) Aggressively pursue impeachment</p>
          <p>b) Resist his voter suppression task force</p>
          <p>c) Filibuster appointees</p>

          <br/>

          <p style={{
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>Embrace an unapologetically progressive agenda</p>
          <p>a) Support legislation to get big money out of politics, guarantee the right to vote, enact Medicare for all, combat climate change, ensure a living wage, end mass incarceration, protect immigrant families, close tax loopholes that benefit the wealthy, and make college tuition free.</p>
          <p>b) Resist and filibuster right-wing legislation attacking health care, voting rights, the planet, workers, immigrants, women, people of color, LGBTQ people, and the poor.</p>

          <br/>

          <p style={{
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>Break with Big Money so they can represent everyday people</p>
          <p>a) Adopt the 76 Standard, stipulating that at least 76% of the money a candidate, campaign, or committee raises comes from grassroots donors giving less than $1,000 per two-year election cycle.</p>
          <p>b) Demand every member of the Democratic caucus support bills to overturn Citizens United, enact publicly funded elections, and strengthen voting rights.</p>
        </div>
      </div>
    );
  }

  renderClosingLetter () {
    return (
      <div className="section flex">
        <div className="text">

          <div style={{textAlign: 'center', width: '100%'}}>
            <h3 className="content_headline"
                style={{
                  textTransform: 'uppercase',
                  color: '#f90016',
                  textDecoration: 'underline',
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

            <p>Democracy Spring is building a 50-state nonviolent army of grassroots volunteers to defend democracy from Trump and the GOP and to take over the Democratic Party with bold progressives. We're using militant, nonviolent civil resistance to fight for a democracy that works for all of us, not just the wealthiest 1%.</p>

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

          <div style={{textAlign: 'center'}}>
            <p style={{fontWeight: 'bold'}}>share</p>

            <img className="social-sharing" src="/twitter-logo-white.svg"
                 style={{height: 100, width: 100}} />
            <img className="social-sharing" src="/facebook-logo-purple.svg"
                 style={{height: 60, width: 60, position: 'relative', bottom: 20}} />
          </div>
        </div>
      </div>
    );
  }

  renderFooter () {
    return (
      <div style={{
        padding: 20,
        textAlign: 'center',
        backgroundColor: '#f1f6f9',
        color: '#686d6e'
      }}>
        <p>created by <span style={{fontWeight: 'bold'}}>Give When</span></p>
      </div>
    );
  }

}
