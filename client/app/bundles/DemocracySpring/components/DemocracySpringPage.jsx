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
        {this.renderExplanation()}
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
            I will <span className="action_button">give $1/day</span> until the DNC breaks with Big Money.
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
            Despite an overwhelming appetite for bold progressive change, the DNC continues to support an agenda backed by Big Money donors instead of everyday people. Let's make them pay.
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
          padding: 20
        }}>
          <h3 style={{color: '#1c407b', lineHeight: '7.5px'}}>
            $534 raised
          </h3>
          <p style={{color: '#1c407b', lineHeight: '7.5px'}}>
            of $1000 goal
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
            371 backers
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
      <div style={{display: 'flex', width: '100%'}}>
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
        padding: 20
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
            {this.renderSelectorButton('¢50', false)}
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
      <div className="arrow_box">
      </div>
    );
  }

  renderWhen () {
    return (
      <div style={{
        flex: 1,
        color: '#1c407b',
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 20
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
      <div style={{
        minHeight: 100,
        margin: '15px 0',
        width: 2,
        backgroundColor: '#1c407b',
        display: 'inline',
        float: 'right'
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
        backgroundColor: 'rgb(243, 243, 243)',
      }}>
        <div style={{
          width: '70%',
          margin: '0 auto',
          padding: '30px 0',
          textAlign: 'center',
        }}>
          <p style={{fontWeight: 'bold', display: 'inline', height: '100px'}}>
            Sign up as an automatic responder and you'll get monthly updates from one of the organizers we hire to help force the Democrats to break with Big Money.
          </p>
        </div>
      </div>
    );
  }

  renderExplanation () {
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
            The Democrats need a shakeup.
          </h1>
          <div style={{fontSize: '1.25em'}}>
            <p><span style={{fontWeight: 'bold'}}>The DNC ended its ban on corporate lobbyists attending fundraisers and serving on the party committee.</span> The DNC leadership continues to side with corporate donors and the failed establishment instead of its own progressive voters.</p>

            <p><span style={{fontWeight: 'bold'}}>Every day Tom Perez and DNC don't break with Big Money</span>--by reinstating the ban on corporate lobbyists and supporting reform--<span style={{fontWeight: 'bold'}}>chip in to help hire organizers to shift the Democratic Party to resist Trump, act progressive, and break with big money.</span></p>

            <p>That’s right: every day the party fails to take action, we can get stronger until we have the power to FORCE them to act.</p>

            <p>We’ll lift up those champions in the party who DO stand up for change. And we’ll protest fundraisers and events of candidates and party officials who support the corrupt, failed status quo.</p>

            <div style={{
              border: '2px solid white',
              width: '100%',
              margin: 10
            }} />

            <h3 className="content_headline">
              Support this campaign if you think the Democrats must:
            </h3>

            <ul>
              <li style={{fontWeight: 'bold'}}>Fiercely resist Trump and his agenda of hate and greed</li>
              <li style={{fontWeight: 'bold'}}>Embrace an unapologetically progressive agenda</li>
              <li style={{fontWeight: 'bold'}}>Break with Big Money so they can represent everyday people</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  renderEmphasisStatement () {
    return (
      <div style={{
        display: 'flex',
        backgroundColor: '#f90016',
        color: 'white',
        width: '100%'
      }}>
        <div style={{flex: 1, padding: '30px 60px', height: 360}}>
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
        <img src="/democracy-spring-marching.jpg"
             style={{flex: 0, height: 420}}/>
      </div>
    );
  }

  renderVideoSection () {
    return (
      <div style={{
        padding: 30,
        width: '60%',
        margin: '0 auto'
      }}>
        <h3 className="content_headline">
          Watch CNN's 4-minute piece on our 2016 DNC accountability actions.
        </h3>
        <br/>
        <iframe width="100%" height="500px" src="https://www.youtube.com/embed/lIH-tZEPw8k" frameborder="0" allowfullscreen></iframe>
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
