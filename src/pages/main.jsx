import React, { Component } from 'react';
import YouTube from 'react-youtube';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline';
import SearchIcon from 'grommet/components/icons/base/Search';
import Hero from 'grommet/components/Hero';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Image from 'grommet/components/Image';

import Slides from '../components/Slides';

export default class SubPage extends Component {
  render() {
    return (
      <Box>
        <Header justify="center" colorIndex="brand">
          <Box
            size={{ width: { max: 'xxlarge' } }}
            direction="row"
            responsive={false}
            justify="start"
            align="center"
            pad={{ horizontal: 'medium' }}
            flex="grow"
          >
            <GrommetIcon colorIndex="brand" size="large" />
            <Box pad="small" />
            <Menu label="Label" inline direction="row" flex="grow">
              <Anchor href="#">Talks</Anchor>
              <Anchor href="#">Resume</Anchor>
              <Anchor href="#">Contact</Anchor>
            </Menu>

            <Box flex="grow" align="end">
              <SearchIcon />
            </Box>
          </Box>
        </Header>
        <Box>
          <Hero
            background={<Image
              src="https://media.licdn.com/media/AAEAAQAAAAAAAARLAAAAJDZjNzY1NzY1LTQ0N2MtNGQxYy1iZDA0LTllN2RkYTE1OTJmYQ.jpg"
              fit="cover"
              full
            />}
          >
            <Box
              direction="row"
              justify="center"
              align="center"
            >
              <Box
                basis="1/2"
                align="end"
                pad="medium"
              />
              <Box
                basis="1/2"
                align="start"
                pad="medium"
              >
                <Heading margin="none">
                  Work in progress
                </Heading>
              </Box>
            </Box>
          </Hero>
        </Box>
        <Box>
          <Tiles
            fill
            flush
            selectable
            size="large"
            onSelect={() => {}}
          >
            <Tile>
              <Card
                thumbnail="//img.youtube.com/vi/FA3EIk5cW8k/0.jpg"
                heading="5 production Node.js stories"
                label="OdessaJS'17"
              />
            </Tile>
            <Tile>
              <Card
                thumbnail="//img.youtube.com/vi/qmZyR9Ao-jY/0.jpg"
                heading="Testing in Node.js World"
                label="JavaScript fwdays'17"
              />
            </Tile>
            <Tile>
              <Card
                thumbnail="//img.youtube.com/vi/eZVFMCoLsyc/0.jpg"
                heading="TypeScript for Node.js applications"
                label="FullStackJS MeetUp'16"
              />
            </Tile>
            <Tile>
              <Card
                thumbnail="//img.youtube.com/vi/3yCwFly5jyM/0.jpg"
                heading="Spec driven development in Microservices"
                label="JavaScript fwdays'16"
              />
            </Tile>
          </Tiles>
          <Section
            full
            colorIndex="brand"
            pad="large"
            justify="center"
            align="center"
          >
            <Heading tag="h1"><strong>Welcome</strong></Heading>
            <YouTube
              videoId="FA3EIk5cW8k"
            />
            <Slides id="673e48cc5f8e46179b3a8fe116be175e" />
          </Section>
        </Box>
      </Box>
    );
  }
}
