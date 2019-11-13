import React, { Component } from 'react';
import {StyleSheet,Image} from 'react-native';
import { View, Text, Container ,Left, Right, Body, Icon} from 'native-base';
import AutocompleteInput from '../Components/Autocomplete-input';
export default class ListThumbnailExample extends Component {
  // TODOS
  render() {
    return (
      <Container>
        <View>
        <AutocompleteInput/>
            <View style={styles.card}> 
              <View style={styles.subCar}>
                <View style={styles.icon}>
                  <Image source={require("../img/car.png")} style={{ width: "15%", height: "17%" ,padding:"5%" ,margin:"3%"}}/>
                  <Text style={styles.font}>   AVL - 855</Text>
                </View>
                <View style={styles.icon}>
                  <Image source={require("../img/house.png")} style={{ width: "15%", height: "17%" ,padding:"5%" ,margin:"3%"}}/>
                  <Text style={styles.fontLess}>   5 destinos</Text>
                </View>
                <View style={styles.icon}>
                  <Image source={require("../img/box.png")} style={{ width: "15%", height: "17%" ,padding:"5%", margin:"3%"}}/>
                  <Text style={styles.fontLess}>   5 órdenes</Text>
                </View> 
              </View>
              <View style={styles.ContainerIcon}>
              <View style={styles.icon}>
                  <Text style={styles.fontLess}>   Terminado</Text>
              </View>      
              </View>
          </View>
          <View style={styles.card}>
              <View style={styles.subCar}>
                <View style={styles.icon}>
                  <Image source={require("../img/car.png")} style={{ width: "15%", height: "17%" ,padding:"5%" ,margin:"3%"}}/>
                  <Text style={styles.font}>   ZKJ - 569</Text>
                </View>
                <View style={styles.icon}>
                  <Image source={require("../img/house.png")} style={{ width: "15%", height: "17%" ,padding:"5%" ,margin:"3%"}}/>
                  <Text style={styles.fontLess}>   10 destinos</Text>
                </View>
                <View style={styles.icon}>
                  <Image source={require("../img/box.png")} style={{ width: "15%", height: "17%" ,padding:"5%", margin:"3%"}}/>
                  <Text style={styles.fontLess}>   10 órdenes</Text>
                </View> 
              </View>
              <View style={styles.ContainerIcon}>
              <View style={styles.icon}>
                  <Text style={styles.fontLess}>   terminado</Text>
              </View>      
              </View>
          </View>
          <View style={styles.card}>
              <View style={styles.subCar}>
                <View style={styles.icon}>
                  <Image source={require("../img/car.png")} style={{ width: "15%", height: "17%" ,padding:"5%" ,margin:"3%"}}/>
                  <Text style={styles.font}>   HUJ - 254</Text>
                </View>
                <View style={styles.icon}>
                  <Image source={require("../img/house.png")} style={{ width: "15%", height: "17%" ,padding:"5%" ,margin:"3%"}}/>
                  <Text style={styles.fontLess}>   6 destinos</Text>
                </View>
                <View style={styles.icon}>
                  <Image source={require("../img/box.png")} style={{ width: "15%", height: "17%" ,padding:"5%", margin:"3%"}}/>
                  <Text style={styles.fontLess}>   3 órdenes</Text>
                </View> 
              </View>
              <View style={styles.ContainerIcon}>
              <View style={styles.icon}>
                  <Text style={styles.fontLess}>   Terminado</Text>
              </View> 
              </View>
          </View>
      </View>
   </Container>
    );
  }
}
const styles = StyleSheet.create({
  card:{
    borderBottomColor:'#E5E5E5',
    borderBottomWidth:0.5,
    margin:3,
    paddingTop:15,
    paddingLeft:14,
    display:"flex",
    flexDirection:"row",
    
  },
  subCar:{
    height:100,
    width:200
  },
  icon:{
    display:"flex",
    flexDirection:"row",
  },
  font:{
    color:'#E69526',
    fontSize:19
  },
  fontLess:{
    color:'black',
    fontSize:13
  },
  ContainerIcon:{
    height:100
  }
})