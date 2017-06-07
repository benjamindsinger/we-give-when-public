import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';

import PersonalDetailsForm from './PersonalDetailsForm.jsx';
import CardDetailsForm from './CardDetailsForm.jsx';
import GiveWhenBlocks from './GiveWhenBlocks.jsx';

import Footer from './Footer.jsx';
import Header from './Header.jsx';

import OnePanelContent from './sections/OnePanelContent.jsx';
import Statement from './sections/Statement.jsx';
import Letter from './sections/Letter.jsx';
import Disclaimer from './sections/Disclaimer.jsx';

import Money from '../helpers/money.jsx';
import Buttons from '../helpers/buttons.jsx';
import UserEvents from '../helpers/user_events.jsx';
import DataCuts from '../helpers/data_cuts.jsx';

export default class CrowdFundPage extends React.Component {
  displayName: 'CrowdFundPage';

  static propTypes = {
    crowdFundId: PropTypes.number.isRequired,
    crowdFundType: PropTypes.string.isRequired,
    stripePublishableKey: PropTypes.string.isRequired,
    funderRequiredDetails: PropTypes.array.isRequired,

    // Social
    twitterMessage: PropTypes.string,
    suggestedEmailSubject: PropTypes.string,
    suggestedEmailBody: PropTypes.string,

    // Defaults
    defaultSelectedAmountInCents: PropTypes.number.isRequired,
    defaultSelectedMonthlyMaximumInCents: PropTypes.number,

    // Colors
    colorScheme: PropTypes.string.isRequired,

    // Content

    // -- Content, header
    headerGivePhrase: PropTypes.string.isRequired,
    headerWhenPhrase: PropTypes.string.isRequired,
    headerLogoImgPath: PropTypes.string.isRequired,

    // -- Content, headline
    headline: PropTypes.string.isRequired,
    subheadline: PropTypes.string.isRequired,
    headlineImgPath: PropTypes.string.isRequired,

    // -- Content, give when blocks
    giveStatement: PropTypes.string.isRequired,
    whenStatement: PropTypes.string.isRequired,
    progressStatusPhrase: PropTypes.string.isRequired,
    progressGoalPhrase: PropTypes.string.isRequired,
    progressLeftPhrase: PropTypes.string.isRequired,
    progressTimePhrase: PropTypes.string.isRequired,

    // -- Content, sections
    contentSections: PropTypes.array.isRequired,
  };

  constructor(props, _railsContext) {
    super(props);

    this.renderAmountButton = Buttons.renderAmountButton.bind(this);
    this.renderMaximumAmountButton = Buttons.renderMaximumAmountButton.bind(this);
    this.renderCustomAmountButton = Buttons.renderCustomAmountButton.bind(this);
    this.renderCustomMaximumAmountButton = Buttons.renderCustomMaximumAmountButton.bind(this);

    this.state = {
      step: 0,
      errorMessages: [],

      // Amount summary
      selectedAmountInCents: props.defaultSelectedAmountInCents,
      selectedMonthlyMaximumInCents: props.defaultSelectedMonthlyMaximumInCents,
      customAmountEntered: false,
      customMaximumEntered: false,
      coverFees: true,

      // Form details
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      usState: '',
      zip: '',
      phone: '',
      occupation: '',
      employer: '',
    };
  }

  checkRequiredField (field) {
    return (this.state[field]);
  }

  colorSchemeClassName () {
    return `color_scheme__${this.props.colorScheme}`;
  }

  render () {
    const step = this.state.step;

    switch (step) {
      case 0:  return this.renderSignUpPage();
      case 1:  return this.renderPersonalDetailsPage();
      case 2:  return this.renderCardDetailsPage();
      default: return this.renderSignUpPage();
    }
  }

  renderSignUpPage () {
    return (
      <div className={this.colorSchemeClassName()}>
        {this.renderHeaderWithActionButton()}
        {this.renderHeadlineSection()}
        {this.renderGiveWhenBlocks()}
        {this.renderContentSections()}
      </div>
    );
  }

  renderHeaderWithActionButton () {
    return (
      <Header givePhrase={this.props.headerGivePhrase}
        whenPhrase={this.props.headerWhenPhrase}
        logoImgPath={this.props.headerLogoImgPath}
        onClickActionButton={UserEvents.onChangeStep.bind(this, 1)}
        showButton={true}
      />
    );
  }

  renderHeadlineSection () {
    return (
      <div className="section flex headline__section below__fixed__navbar">
        <div className="text color__bright">
          <h1>
            {this.props.headline}
          </h1>
          <div className="divider__line"></div>
          <p>
            {this.props.subheadline}
          </p>
        </div>

        <img src={this.props.headlineImgPath} />
      </div>
    );
  }

  renderGiveWhenBlocks () {
    return (
      <GiveWhenBlocks
        crowdFundType={this.props.crowdFundType}
        giveStatement={this.props.giveStatement}
        whenStatement={this.props.whenStatement}
        givePhrase={this.props.headerGivePhrase}
        progressStatusPhrase={this.props.progressStatusPhrase}
        progressGoalPhrase={this.props.progressGoalPhrase}
        progressLeftPhrase={this.props.progressLeftPhrase}
        progressTimePhrase={this.props.progressTimePhrase}
        renderAmountButton={this.renderAmountButton}
        renderMaximumAmountButton={this.renderMaximumAmountButton}
        renderCustomAmountButton={this.renderCustomAmountButton}
        renderCustomMaximumAmountButton={this.renderCustomMaximumAmountButton}
      />
    );
  }

  renderContentSections () {
    const contentSections = this.props.contentSections;
    console.log('contentSections', contentSections)

    return contentSections.map((section) => {
      return this.renderContentBlock(section);
    });
  }

  renderContentBlock (section) {
    const sectionType = section.type;

    switch (sectionType) {
      case 'one_panel':
        return this.renderOnePanelContent(section);
      case 'statement':
        return this.renderStatementContent(section);
      case 'letter':
        return this.renderLetterContent(section);
      case 'disclaimer':
        return this.renderDisclaimer(section);
    }
  }

  renderOnePanelContent (section) {
    const headline = section.headline;
    const paragraphs = section.paragraphs;

    if (!headline || !paragraphs) return null;

    return (
      <OnePanelContent headline={headline} paragraphs={paragraphs} />
    );
  }

  renderStatementContent (section) {
    const content = section.content;

    if (!content) return null;

    return (
      <Statement content={content} />
    );
  }

  renderLetterContent (section) {
    const headline = section.headline;
    const paragraphs = section.paragraphs;

    if (!headline || !paragraphs) return null;

    return (
      <Letter
        headline={headline} paragraphs={paragraphs}
      />
    );
  }

  renderDisclaimer (section) {
    const paragraphs = section.paragraphs;

    if (!paragraphs) return null;

    return (
      <Disclaimer paragraphs={paragraphs} />
    );
  }

  renderPersonalDetailsPage () {
    return (
      <div className="color_scheme__green_blue">
        {this.renderHeader(false)}

        <PersonalDetailsForm
          /* UI functions */
          onType={UserEvents.onTypeFormInput.bind(this)}
          onClickEdit={UserEvents.onChangeStep.bind(this, 0)}
          onClickContinue={UserEvents.onChangeStepFromPersonalDetails.bind(this, 2, this.props.funderRequiredDetails)}
          errorMessages={this.state.errorMessages}

          /* Personal details */
          funderRequiredDetails={this.props.funderRequiredDetails}
          email={this.state.email}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          address={this.state.address}
          city={this.state.city}
          usState={this.state.usState}
          zip={this.state.zip}
          phone={this.state.phone}
          occupation={this.state.occupation}
          employer={this.state.employer}

          /* Selected amounts */
          crowdFundType={this.props.crowdFundType}
          selectedAmountInCents={this.state.selectedAmountInCents}
          selectedMonthlyMaximumInCents={this.state.selectedMonthlyMaximumInCents}
        />

        {this.renderDisclaimer()}
        {this.renderFooter()}
      </div>
    );
  }

  renderCardDetailsPage () {
    return (
      <div className="color_scheme__green_blue">
        {this.renderHeader(false)}

        <CardDetailsForm
          /* UI functions */
          onType={UserEvents.onTypeFormInput.bind(this)}
          onClickEdit={UserEvents.onChangeStep.bind(this, 0)}

          /* Data for form */
          funderDetails={DataCuts.funderDetails(this.state, this.props)}
          crowdFundMembershipDetails={DataCuts.crowdFundMembershipDetails(this.state, this.props)}
          coverFees={this.state.coverFees}
          stripePublishableKey={this.props.stripePublishableKey}

          /* Selected amounts */
          selectedAmountInCents={this.state.selectedAmountInCents}
          selectedMonthlyMaximumInCents={this.state.selectedMonthlyMaximumInCents}

          /* Social sharing */
          twitterMessage={this.props.twitterMessage}
          suggestedEmailSubject={this.props.suggestedEmailSubject}
          suggestedEmailBody={this.props.suggestedEmailBody}

          /* Campaign type */
          crowdFundType={this.props.crowdFundType}
        />

        {this.renderFooter()}
      </div>
    );
  }


  renderFooter () {
    return (
      <Footer />
    );
  }

}
