import React ,{Component}from "react";
import { StyleSheet, View, Text} from "react-native";
export default class MainReporter extends Component {
  render() {
    return (
      <View style={styles.containerView}>
        <View styles={styles.view}>
          <Text>TOTAL DE ORDENES</Text>
          <Text>numero</Text>
        </View>
        <View styles={styles.labelView}>
          <Text>PENDIENTE</Text>
          <Text>numero</Text>
        </View>
        <View styles={styles.view}>
          <Text>ENTREGADO</Text>
          <Text>numero</Text>
        </View>
        <View styles={styles.view}>
          <Text>ENTREGA PARCIAL</Text>
          <Text>numero</Text>
        </View>
        <View styles={styles.view}>
          <Text>RECHAZADO</Text>
          <Text>numero</Text>
        </View>
        <View styles={styles.view}>
          <Text>CANCELADO</Text>
          <Text>numero</Text>
        </View>
        <View styles={styles.view}>
          <Text>REPROGRAMADO</Text>
          <Text>numero</Text>
        </View>
        <View styles={styles.view}>
          <Text>EFECTIVIDAD DE ORDENES</Text>
          <Text>circulo de porcentaje</Text>
        </View>
        <View styles={styles.view}>
          <Text>AVANCE DE VIAJES</Text>
          <Text>circulo de porcentaje</Text>
        </View>
      </View>
    )
  }
} 
const styles = StyleSheet.create({
  containerView: {
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
   labelView:{
    flex:1,
    color: 'black',
    backgroundColor:'red',
   }
});
