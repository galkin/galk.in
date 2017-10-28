import Iframe from 'react-iframe';

import React, { Component } from 'react';

export default class SubPage extends Component {
  render() {
    return (
      <Iframe
        url="https://docs.google.com/presentation/d/e/2PACX-1vRqlVMUe1u6A63mIdWBaWosFSSExfGPr5UpH60lD5LP-Aho3RQINjArbAkWaeLk2mJ2qbpleyy95RSP/embed?start=false&loop=false&delayms=3000"
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
