import Iframe from 'react-iframe';

import React, { Component } from 'react';

export default class SubPage extends Component {
  render() {
    return (
      <Iframe
        url="https://docs.google.com/presentation/d/e/2PACX-1vQzCafLCQxXU6yKMA-GtC2XzTOIpRV1EsD9C7B4pfMSV61eGOehJnBgbbsoxk7t74u4kRoTJkb0Myy2/embed?start=false&loop=false&delayms=3000"
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
