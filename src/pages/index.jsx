import Iframe from 'react-iframe';

import React, { Component } from 'react';

export default class SubPage extends Component {
  render() {
    return (
      <Iframe
        url="https://docs.google.com/presentation/d/e/2PACX-1vQVi4aq9JW2aqUSSXMelXKCb9F2k_s0BdJdfAxHwbSvuq1avWc-FZNQnQJOLFPKuJd2CJE1FY9VJSpj/embed?start=false&loop=false&delayms=3000"
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
