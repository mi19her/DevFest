import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
export default class CardExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Your text here
                </Text>
              </Body>
            </CardItem>
            
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Your text here
                </Text>
              </Body>
            </CardItem>
            
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Your text here
                </Text>
              </Body>
            </CardItem>
            
          </Card>
        </Content>
      </Container>
    );
  }
}