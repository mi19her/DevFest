import React, { Component } from 'react';
import  MapView from 'react-native-maps';
import {Text,Dimensions,StyleSheet} from 'react-native';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';

export default class SearchBarExample extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Container style={styles.container}>
       <MapView style={styles.mapStyle} />
     </Container>
     <Container style={styles.container}>
     <Text>Search</Text>
     </Container>
      </Container>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: 150,
  },
});
