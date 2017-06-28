import PropTypes from 'prop-types';
import React from 'react';

export default class Video extends React.Component {

  static propTypes = {
    headline: PropTypes.string.isRequired,
    youTubeId: PropTypes.string.isRequired,
  };

  static displayName = 'Video';

  youTubeIframeSrc () {
    return `https://www.youtube.com/embed/${this.props.youTubeId}`;
  }

  render () {
    return (
      <div style={{
        padding: 30,
        width: '80%',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 className="subheadline" style={{ color: '#1c407b' }}>
          {this.props.headline}
        </h2>
        <br/>
        <br/>
        <iframe width="100%"
                height="500px"
                src={this.youTubeIframeSrc()}>
        </iframe>
      </div>
    );
  }

}
