import React, { Component } from "react";
import MapView from "react-native-maps";
import { Text, Dimensions, StyleSheet,Image } from "react-native";
import { Container, Header, Item, Input, Icon, Button } from "native-base";

export default class SearchBarExample extends Component {
  static navigationOptions = {
    title: 'Seguimiento en Línea',
    headerTintColor:'#fff',
    headerStyle:{
      backgroundColor:'#009B3A'
    }
  };
  render() {
    const { navigate } = this.props.navigation;
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
          <MapView
            style={styles.mapStyle}
            region={{
              latitude: -12.1194983,
              longitude: -77.0216984,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: -12.1194983,
                longitude: -77.0216984
              }}
              title={"Pedido N°1223c44"}
              description={"Se encuentra a dos horas de llegar a su destino"}
             
            >
                <Image 
                source={require("../img/car.png")}
               
                />
              
            </MapView.Marker>

            <MapView.Marker
              coordinate={{
                latitude: -6.913936505265653,
                longitude: -75.4111768642002
              }}
              title={"Pedido N°122555"}
              description={"Se encuentra a 3 horas de llegar a su destino"}
             
            >
                <Image 
                source={require("../img/car.png")}
              
                />
              
            </MapView.Marker>
            <MapView.Marker
              coordinate={{
                latitude: -13.669572917922238,
                longitude: -71.88154693762036
              }}
              title={"Pedido N°91234abcQ"}
              description={"Se encuentra a dos días de llegar a su destino"}
             
            >
                <Image 
                source={require("../img/car.png")}
                // style={{height:6, width:6}}
                />
              
            </MapView.Marker>
            <MapView.Marker
              coordinate={{
                latitude: -12.164691768968567,
                longitude: -76.95703951357228
              }}
              title={"Almacen 1"}
              description={"Tu Orden N°AcD1233K se encuentra aquí"}
             
            >
                <Image 
                source={require("../img/almacen.png")}
                // style={{height:6, width:6}}
                />
              
            </MapView.Marker>
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
            <Button  block style={{backgroundColor:'#009B3A'}}>
              <Text
                style={{ color: "#fff" }}
                onPress={() => navigate("Filter")}
              >
                VER VIAJES
              </Text>
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
