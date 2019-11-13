import React, { Component } from "react";
import { Container, Content, Footer, Text, Button } from 'native-base';

export default class Menu extends Component {
    static navigationOptions = {
        title: 'Welcome to Ransa',
      };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Content padder>
        <Button onPress={() => navigate('Reporte')}>
            <Text> Reporte </Text>
          </Button>
          <Button onPress={() => navigate('Trazabilidad')}>
            <Text> Trazabilidad</Text>
          </Button>       
        </Content>
        <Footer />
      </Container>
    );
  }
}
