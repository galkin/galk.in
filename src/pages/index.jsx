import Iframe from 'react-iframe';

import React, { Component } from 'react';

export default class SubPage extends Component {
  render() {
    return (
      <Iframe
        url="https://docs.google.com/presentation/d/e/2PACX-1vQilwNTtViSpIkUudx78qnKQu3AxNw0rqtqHel8ivTZIaTlNe0WQqsZLC0kGv6Imx7LIAq2aAhYgi2N/embed?start=false&loop=false&delayms=3000"
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
