import React, { Component } from "react";
import { Container, Content, Footer, Text } from 'native-base';

export default class Reporte extends Component {
    static navigationOptions = {
        title: 'Welcome to Report',
      };
  render() {
    return (
      <Container>
        <Content padder>
            <Text> estas en Reporte </Text>
        </Content>
        <Footer />
      </Container>
    );
  }
}