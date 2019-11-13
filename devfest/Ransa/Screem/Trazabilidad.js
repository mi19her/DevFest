import React, { Component } from "react";
import MapView from "react-native-maps";
import { Text, Dimensions, StyleSheet } from "react-native";
import { Container, Header, Item, Input, Icon, Button } from "native-base";

export default class SearchBarExample extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header searchBar rounded style={{ backgroundColor: "transparent" }}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="md-mic" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Container style={styles.container}>
        <MapView style={styles.mapStyle}  >
          </MapView>
         
          <Container
            style={{
              position: "absolute",
              top: "85%",
              alignSelf: "center",
              backgroundColor: "transparent",
              width: 350
            }}
          >
            <Button success block>
              <Text  style={{ color: "#fff" }} onPress={() => navigate('Filter')}>VER VIAJES</Text>
            </Button>
          </Container>
        </Container>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  mapStyle: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: 300
  }
});
