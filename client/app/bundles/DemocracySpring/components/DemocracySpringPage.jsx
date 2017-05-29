import PropTypes from 'prop-types';
import React from 'react';

export default class DemocracySpringPage extends React.Component {
  displayName: 'DemocracySpring';

  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props, _railsContext) {
    super(props);

    this.state = { name: this.props.name };
  }

  render() {
    return (
      <div>
        <h1>Democrats</h1>
        <h1>Need Big Change</h1>
      </div>
    );
  }
}
