import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { Component } from "react";
import { Image, StyleSheet} from "react-native";
import {
  Root,
  Container,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from "native-base";


export default class FixedLabelExample extends Component {
 static navigationOptions ={
   header: null
 }
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    
    const {navigate} = this.props.navigation;
    return (
      //  <Image source={require("../img/imagenlogin.jpg")} style={{ flex: 1,resizeMode: 'cover'}}>
      <Container  style={styles.container}>
        
       
          <Image source={require("../img/logo-1.png")} style={{ width: 160, height: 30 }} />
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input/>
            </Item>
          </Form>
          <Button success block onPress={() => navigate('Menu')}>
            <Text> ENTRAR </Text>
          </Button>
      
        
      </Container>
      //  </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor: "#fff"

    
  },
 
});