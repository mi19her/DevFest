import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';

export default class CardExample extends Component {
  static navigationOptions = {
    title: 'Detalle de Viaje',
    headerTintColor:'#fff',
    headerStyle:{
      backgroundColor:'#009B3A'
    }
  };
  render() {
    return (
      <Container>
        <Content>
          <Card>
          <CardItem>
              <Body>
                <Text>
                Viajes filtrados
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                Pedido N°1223c44
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