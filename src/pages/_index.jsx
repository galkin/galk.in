import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';

export default class SubPage extends Component {
  render() {
    return (
      <Box>
        <Box>
          <Section
            full
            colorIndex="brand"
            pad="large"
            justify="center"
            align="center"
          >
            <Heading tag="h1"><strong>In progress</strong></Heading>
          </Section>
        </Box>
      </Box>
    );
  }
}
