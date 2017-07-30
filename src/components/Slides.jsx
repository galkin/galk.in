import React from 'react';
import PropTypes from 'prop-types';

export default class Slides extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    slide: PropTypes.number,
    ratio: PropTypes.number,
  };

  static defaultProps = {
    slide: 1,
    ratio: 1.77777777777778,
  };

  componentDidMount() {
    const script = document.createElement('script');
    script.src = '//speakerdeck.com/assets/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div
        className="speakerdeck-embed"
        data-id={this.props.id}
        data-slide={this.props.slide}
        data-ratio={this.props.ratio}
      />
    );
  }
}
