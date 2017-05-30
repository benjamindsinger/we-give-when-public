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
        {this.renderProgressBar()}
        {this.renderMotivationStatement()}
        {this.renderGiveWhen()}
      </div>
    );
  }

  renderNavbar () {
    return (
      <div className="navbar">
        {this.renderLogo()}
        {this.renderCallToActionButton()}
      </div>
    );
  }

  renderHeadlineSection () {
    return (
      <div>
        <div className="section headline_section"
             style={{display: 'flex', backgroundColor: 'black', width: '100%'}}>
          <div className="content" style={{flex: 1, padding: '30px 60px', height: 360}}>
            <h1 className="headline">
              <span style={{ color: "white" }}>
                Democrats
              </span>
              <br/>
              <span style={{ color: "yellow" }}>
                Need Big Change
              </span>
            </h1>
            <div className="headline_underline"></div>
            <p style={{color: 'white', lineHeight: '1.5em'}}>
              Despite an overwhelming appetite for bold progressive change, the DNC continues to support an agenda backed by Big Money donors instead of everyday people. Let's make them pay.
            </p>
          </div>
          <img src="/democracy-spring-headline-long.jpg"
                style={{flex: 0, height: 420}}/>
        </div>
      </div>
    );
  }

  renderLogo () {
    return (
      <div className="logo">
        <img src='/dem-spring-logo-blue.png'
             style={{ width: '300px', margin: '10px' }}/>
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

  renderProgressBar () {
    return (
      <div style={{width: '100%'}}>
        <div style={{
          width: '80%',
          margin: '30px auto',
          position: 'relative',
          padding: '30px 0',
        }}>
          <div style={{width: '100%', position: 'relative', bottom: 30}}>
            <p style={{lineHeight: 0, float: 'left'}}>
              $534 raised, 302 backers
            </p>
            <p style={{lineHeight: 0, float: 'right'}}>
              $1000 goal, 17 days left
            </p>
          </div>
          <div style={{
            backgroundColor: '#ccc',
            height: '10px',
          }}>
            <div style={{
              backgroundColor: 'rgb(67, 222, 31)',
              height: '10px',
              width: '55%'
            }} />
          </div>
        </div>
      </div>
    );
  }

  renderMotivationStatement () {
    return (
      <div style={{
        width: '100%',
        backgroundColor: 'rgb(243, 243, 243)',
      }}>
        <div style={{
          width: '70%',
          textTransform: 'uppercase',
          margin: '0 auto',
          padding: '30px 0',
          textAlign: 'center',
        }}>
          <p style={{fontWeight: 'bold', display: 'inline', height: '100px'}}>
            Every day the DNC fails to break with Big Money, I will chip in
            &rarr; &nbsp;
            {this.renderCallToActionButton()}
          </p>
        </div>
      </div>
    );
  }

  renderGiveWhen () {
    return (
      <div style={{display: 'flex', width: '100%'}}>
        <div style={{flex: 1, backgroundColor: 'yellow'}}>
          <div style={{textAlign: 'center', textTransform: 'uppercase'}}>
            <h3>Give</h3>
          </div>
          <div style={{
            backgroundColor: 'rgb(252, 240, 62)',
            textAlign: 'center',
            height: 100
          }}>
            <div style={{ padding: 30 }}>
              <p style={{ fontWeight: 'bold', fontSize: 19 }}>
                To support a progressive takeover of the Democratic Party
              </p>
            </div>
          </div>
        </div>
        <div style={{flex: 1, backgroundColor: 'black', color: 'white'}}>
          <div style={{textAlign: 'center', textTransform: 'uppercase'}}>
            <h3>When</h3>
          </div>
          <div style={{
            backgroundColor: 'rgb(50, 50, 50)',
            textAlign: 'center',
            height: 100
          }}>
            <div style={{ padding: 30 }}>
              <p style={{ fontWeight: 'bold', fontSize: 19 }}>
                Every day the DNC fails to break with Big Money ...
              </p>
            </div>
          </div>

        </div>

      </div>
    );
  }

}
