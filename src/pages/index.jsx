import Iframe from 'react-iframe';

import React, { Component } from 'react';

export default class SubPage extends Component {
  render() {
    return (
      <Iframe
        url="https://docs.google.com/presentation/d/1giuLDtVSS_kdx0O9ELVQhz7JQj_wytMRUhHTZu4sYuw/embed?start=false&loop=false&delayms=3000"
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
