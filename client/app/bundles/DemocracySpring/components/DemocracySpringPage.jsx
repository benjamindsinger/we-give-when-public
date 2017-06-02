import PropTypes from 'prop-types';
import React from 'react';

export default class DemocracySpringPage extends React.Component {
  displayName: 'DemocracySpring';

  static propTypes = {
    // name: PropTypes.string.isRequired,
  };

  constructor(props, _railsContext) {
    super(props);

    this.state = { name: this.props.name };
  }

  render () {
    return (
      <div>
        {this.renderNavbar()}
        {this.renderHeadlineSection()}
        {this.renderGiveWhen()}
        {this.renderStatementOfPurpose()}
        {this.renderHowItWorks()}
        {this.renderBenefitStatement()}
        {this.renderEmphasisStatement()}
        {this.renderVideoSection()}
      </div>
    );
  }

  renderNavbar () {
    return (
      <div className="navbar">
        {this.renderLogo()}
        <div id="call_to_action_sentence">
          <p>
            <span className="action_button">Give $1/day</span> until the DNC breaks with Big Money.
          </p>
        </div>
      </div>
    );
  }

  renderHeadlineSection () {
    return (
      <div className="section flex">
        <img src="/democracy-spring-headline-long.jpg" />

        <div className="text red">
          <h1 className="headline">
            Democrats
            <br/>
            Need Big Change
          </h1>
          <div className="headline_underline"></div>
          <p style={{color: 'white', lineHeight: '1.5em'}}>
            Despite an overwhelming appetite for bold progressive change, the DNC continues to support an agenda backed by Big Money donors instead of everyday people. Let's build a movement to force a change.
          </p>
        </div>
      </div>
    );
  }

  renderLogo () {
    return (
      <div className="logo" style={{ margin: '20px', height: '50px' }}>
        <img src='/dem-spring-logo-blue-small.png'
             style={{ margin: '10px' }}/>
      </div>
    );
  }

  renderCallToActionButton () {
    return (
      <button className="call_to_action">
        Give $1/Day
        <div className="call_to_action_shading" />
        <div className="call_to_action_background" />
      </button>
    );
  }

  renderContinueButton () {
    return (
      <button className="continue">
        Continue
        <div className="continue_shading" />
        <div className="continue_background" />
      </button>
    );
  }

  renderProgressBar () {
    return (
      <div style={{flex: 1}}>
        <div style={{
          width: '80%',
          margin: '20px auto',
          position: 'relative',
          padding: '40px 20px'
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
      <div className="section flex">
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
      <div
        style={{
        flex: 1,
        color: '#1c407b',
        textAlign: 'center',
        backgroundColor: '#eef3f6',
        padding: '40px 20px'
      }}>
        <div style={{ width: '85%', margin: '0 auto' }}>
          <h3 style={{ textTransform: 'uppercase' }}>Give</h3>
          <p style={{ fontSize: '1.125em' }}>
            To support a progressive takeover of the Democratic Party
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
      <div id="when"
           style={{
             flex: 1,
             color: '#1c407b',
             textAlign: 'center',
             backgroundColor: 'white',
             padding: '40px 20px'
           }}>
        <div style={{ width: '85%', margin: '0 auto' }}>
          <h3 style={{ textTransform: 'uppercase' }}>When</h3>
          <p style={{ fontSize: '1.125em' }}>
            Every day the DNC fails to break with Big Money
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
        background: '#1c407b',
        color: 'white'
      }}>
        <div style={{
          padding: 30,
          width: '60%',
          margin: '0 auto',
        }}>
          <h1 className="subheadline">
            The Democrats need a shakeup
          </h1>

          <br/>

          <div style={{fontSize: '1.25em'}}>

            <p>Despite a cataclysmic defeat in the 2016 election and the awesome rise of a new progressive and people-powered movement on the left, the DNC is still holding on to the old centrist and corporate-backed strategies that gave us President Trump and across-the-board Republican control of our government.</p>

            <p style={{fontWeight: 'bold'}}>There is a simple reason for this – money. As long as the DNC is dependent on billionaire campaign contributors and corporate lobbyists, they will never represent everyday working people.</p>

            <p>The DNC needs to break with Big Money, once and for all. How? By adopting the 76 Standard, which would ensure that at least 76% of the money they raise comes exclusively from small donors, not corporations and billionaires. This would be the party’s declaration of independence from Big Money, placing power back into the hands of Democratic voters.</p>
          </div>
        </div>
      </div>
    );
  }

  renderHowItWorks () {
    return (
      <div style={{
        background: '#f90016',
        color: 'white'
      }}>
        <div style={{
          padding: 30,
          width: '60%',
          margin: '0 auto',
        }}>
          <h1 className="subheadline">
            Here's How This Campaign Works:
          </h1>

          <br/>

          <div style={{fontSize: '1.25em'}}>
            <p>Every day Tom Perez and the DNC fails to break with Big Money, you chip in to help us organize the movement that will FORCE them to change.</p>

            <p>Every day the DNC fails to take action, we grow stronger. The day the DNC decides to breaks with Big Money and represent the people, this campaign ends and you’re not charged another dime. That’s it.</p>

            <p>If we meet our fundraising goal by July 4th, we’ll be able to rent a Movement House headquarters in Washington DC that will support over a dozen full-time organizers, committed to a progressive takeover of the Democratic Party.</p>

            <p>They will organize hundreds of local volunteers to protest and disrupt corporate candidates and establishment party bosses, while lifting up bold progressive champions fighting for the soul of the party.</p>
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

  renderVideoSection () {
    return (
      <div style={{
        padding: 30,
        width: '80%',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 className="subheadline" style={{ color: '#1c407b' }}>
          Watch CNN's 4-minute piece on our 2016 DNC accountability actions:
        </h2>
        <br/>
        <br/>
        <iframe width="100%" height="500px" src="https://www.youtube.com/embed/lIH-tZEPw8k"></iframe>
      </div>
    );
  }

  renderAgenda () {
    return (
      <div style={{display: 'flex', backgroundColor: 'black', width: '100%'}}>
        <div style={{flex: 1, padding: '30px 60px', color: 'yellow'}}>
          <h3 className="content_headline">
            Support this campaign if you think the democrats must:
          </h3>

          <div style={{
            border: '2px solid yellow',
            width: '100%',
            margin: '10px 0'
          }} />

        </div>

        <img src="/democracy-spring-capitol.jpg"
              style={{flex: 0, height: 500}}/>

      </div>
    );
  }

  renderFootnotes () {
    return (
      null
    );
  }

  renderSignature () {
    return (
      null
    );
  }

  renderSocial () {
    return (
      null
    );
  }

}
