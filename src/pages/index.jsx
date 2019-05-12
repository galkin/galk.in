import Iframe from 'react-iframe';

import React, { Component } from 'react';

export default class SubPage extends Component {
  render() {
    return (
      <Iframe
        url="https://docs.google.com/presentation/d/e/2PACX-1vR2OHrrPX9e7Y2ctD7S92tJTWNIjcc8GohcCkuzT4n8jB6oIxHxW0OKw3JdSpCDZp3vI0rjgdDPTx75/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        width="100%"
        height="100%"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      />
    );
  }
}
