import PropTypes from 'prop-types';
import React from 'react';
import airbrakeJs from 'airbrake-js';

import PersonalDetailsForm from './PersonalDetailsForm.jsx';
import CardDetailsForm from './CardDetailsForm.jsx';

import Footer from './Footer.jsx';
import Header from './Header.jsx';

import Buttons from '../helpers/buttons.jsx';
import UserEvents from '../helpers/user_events.jsx';
import DataCuts from '../helpers/data_cuts.jsx';

export default class LandingPage extends React.Component {

  static propTypes = {
    crowdFundId: PropTypes.number.isRequired,
    crowdFundType: PropTypes.string.isRequired,
    funderRequiredDetails: PropTypes.array.isRequired,
    stripePublishableKey: PropTypes.string.isRequired,
    airbrakeProjectId: PropTypes.string.isRequired,
    airbrakeProjectKey: PropTypes.string.isRequired,

    // Defaults
    defaultSelectedAmountInCents: PropTypes.number.isRequired,
    defaultSelectedMonthlyMaximumInCents: PropTypes.number,
    optionsInCents: PropTypes.array,
    monthlyMaxOptionsInCents: PropTypes.array,

    // Content
    foeHeader: PropTypes.string.isRequired,
    foeSubhead: PropTypes.string.isRequired,
    foeImgUrl: PropTypes.string,
    foeHex: PropTypes.string,
    friendHeader: PropTypes.string.isRequired,
    friendSubhead: PropTypes.string.isRequired,
    friendImgUrl: PropTypes.string,
    friendHex: PropTypes.string,
    callToActionSentence: PropTypes.string.isRequired,
    theoryOfChangeSentence: PropTypes.string.isRequired,
    disclaimerParagraphs: PropTypes.array.isRequired,
  };

  constructor(props, _railsContext) {
    super(props);

    this.renderAmountButton = Buttons.renderAmountButton.bind(this);
    this.renderMaximumAmountButton = Buttons.renderMaximumAmountButton.bind(this);
    this.renderCustomAmountButton = Buttons.renderCustomAmountButton.bind(this);
    this.renderCustomMaximumAmountButton = Buttons.renderCustomMaximumAmountButton.bind(this);
    this.onClickGive = UserEvents.onChangeStep.bind(this, 1);

    this.airbrake = new airbrakeJs({
      projectId: this.props.airbrakeProjectId,
      projectKey: this.props.airbrakeProjectKey
    });

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

  notifyAirbrake (err) {
    this.airbrake.notify(err);
  }

  headlineClassName () {
    if (this.props.headlineLoud) return 'loud';
    return '';
  }

  headLineFlex () {
    if (this.props.largeHeadlineText) return { flex: 2 };

    return { flex: 1 };
  }

  render () {
    try {
      const step = this.state.step;

      switch (step) {
      case 0:  return this.renderSignUpPage();
      case 1:  return this.renderPersonalDetailsPage();
      case 2:  return this.renderCardDetailsPage();
      default: return this.renderSignUpPage();
      }
    } catch (err) {
      this.notifyAirbrake(err);
      throw err;
    }
  }

  renderSignUpPage () {
    return (
      <div className={this.colorSchemeClassName()}>
        {this.renderHeaderWithActionButton()}
        {this.renderHeadlineSection()}
        {this.renderGiveWhenBlocks()}
        {this.renderContentSections()}
        {this.renderDisclaimer()}
        {this.renderFooter()}
      </div>
    );
  }

  renderHeaderWithActionButton () {
    return (
      <Header givePhrase={this.props.headerGivePhrase}
        whenPhrase={this.props.headerWhenPhrase}
        logoImgPath={this.props.headerLogoImgPath}
        logoHeight={this.props.headerLogoImgSize}
        onClickActionButton={UserEvents.onChangeStep.bind(this, 1)}
        showButton={true}
      />
    );
  }

  renderHeaderWithoutActionButton () {
    return (
      <Header givePhrase={this.props.headerGivePhrase}
        whenPhrase={this.props.headerWhenPhrase}
        logoImgPath={this.props.headerLogoImgPath}
        logoHeight={this.props.headerLogoImgSize}
        showButton={false}
      />
    );
  }

  renderHeadlineSection () {
    return (
      <div className="section flex headline__section below__fixed__navbar">

        <div className="text color__headline" style={this.headLineFlex()}>
          <h1 className={this.headlineClassName()}>
            {this.props.headline}
          </h1>
          <div className="divider__line"></div>
          <p>
            {this.props.subheadline}
          </p>
        </div>

        <div className="text" style={{
          flex: 1,
          background: `url("${this.props.headlineImgPath}")`,
          backgroundSize: 'cover',
          minHeight: 400
        }}></div>
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
        progressFraction={this.props.progressFraction}
        renderAmountButton={this.renderAmountButton}
        renderMaximumAmountButton={this.renderMaximumAmountButton}
        renderCustomAmountButton={this.renderCustomAmountButton}
        renderCustomMaximumAmountButton={this.renderCustomMaximumAmountButton}

        optionsInCents={this.props.optionsInCents}
        monthlyMaxOptionsInCents={this.props.monthlyMaxOptionsInCents}

        onClickGive={this.onClickGive}
      />
    );
  }

  renderContentSections () {
    const contentSections = this.props.contentSections;

    return contentSections.map((section, index) => {
      return this.renderContentBlock(section, index);
    });
  }

  renderContentBlock (section, index) {
    const sectionType = section.type;

    switch (sectionType) {
    case 'one_panel':
      return this.renderOnePanelContent(section, index);
    case 'statement':
      return this.renderStatementContent(section, index);
    case 'letter':
      return this.renderLetterContent(section, index);
    case 'two_panel':
      return this.renderTwoPanelContent(section, index);
    case 'video':
      return this.renderVideo(section, index);
    case 'democracy_spring_agenda':
      return <DemocracySpringAgenda />;
    case 'democracy_spring_letter':
      return <DemocracySpringLetter
          twitterMessage={this.props.twitterMessage}
        />;
    }
  }

  renderOnePanelContent (section, index) {
    const headline = section.headline;
    const paragraphs = section.paragraphs;
    const colorType = section.colorType;

    if (!headline || !paragraphs) return null;

    return (
      <OnePanelContent headline={headline}
                       paragraphs={paragraphs}
                       colorType={colorType}
                       backgroungImgUrl={section.backgroungImgUrl}
                       key={index} />
    );
  }

  renderStatementContent (section, index) {
    const content = section.content;

    if (!content) return null;

    return (
      <Statement content={content}
                 key={index} />
    );
  }

  renderLetterContent (section, index) {
    const headline = section.headline;
    const paragraphs = section.paragraphs;

    if (!headline || !paragraphs) return null;

    return (
      <Letter
        headline={headline}
        paragraphs={paragraphs}
        key={index}
      />
    );
  }

  renderTwoPanelContent (section, index) {
    const headline = section.headline;
    const paragraphs = section.paragraphs;
    const imgUrl = section.imgUrl;

    if (!headline || !paragraphs || !imgUrl) return null;

    return (
      <TwoPanelContent
        headline={headline}
        paragraphs={paragraphs}
        imgUrl={imgUrl}
        key={index}
      />
    );
  }

  renderVideo (section, index) {
    return (
      <Video
        headline={section.headline}
        youTubeId={section.youTubeId}
        key={index}
      />
    );
  }

  renderDisclaimer () {
    const paragraphs = this.props.disclaimerParagraphs;

    if (!paragraphs) return null;

    return (
      <Disclaimer paragraphs={paragraphs} />
    );
  }

  renderPersonalDetailsPage () {
    return (
      <div className={this.colorSchemeClassName()}>
        {this.renderHeaderWithoutActionButton()}

        <PersonalDetailsForm
          /* UI functions */
          onType={UserEvents.onTypeFormInput.bind(this)}
          onClickEdit={UserEvents.onChangeStep.bind(this, 0)}
          onClickContinue={UserEvents.onChangeStepFromPersonalDetails.bind(this, 2, this.props.funderRequiredDetails)}
          errorMessages={this.state.errorMessages}

          /* Personal details */
          funderRequiredDetails={this.props.funderRequiredDetails}
          funderDetails={DataCuts.funderDetails(this.state, this.props)}
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
      <div className={this.colorSchemeClassName()}>
        {this.renderHeaderWithoutActionButton()}

        <CardDetailsForm
          /* UI functions */
          onType={UserEvents.onTypeFormInput.bind(this)}
          onClickEdit={UserEvents.onChangeStep.bind(this, 0)}
          notifyAirbrake={this.notifyAirbrake.bind(this)}

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
          hideFacebook={this.props.hideFacebook}
          suggestedEmailSubject={this.props.suggestedEmailSubject}
          suggestedEmailBody={this.props.suggestedEmailBody}

          /* Campaign type */
          crowdFundType={this.props.crowdFundType}
        />

        {this.renderDisclaimer()}
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
