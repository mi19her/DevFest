import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Item, Input,Button, Text, CardItem, Card, Body} from 'native-base';
export default class login extends Component {
  render() {
    return (
      <Container>
       
        <Content padder style= {{ justifyContent:"center", alignItems:"stretch", flex:1}}>
         <Card>
           <CardItem  bordered> 
           <Image source={require('../img/logo-1.png')} style= {{width:80, height:90, justifyContent:"center", alignItems:"center", flex:1}} />
           </CardItem>
           <CardItem bordered> 
           <Body>
              <Item floatingLabel>
      
             <Input placeholder='Username' />
              </Item>
              <Item floatingLabel last>
             <Input placeholder='Password' />
              </Item>
            </Body>
           </CardItem>
           <CardItem  >
             <Button block success style= {{ height:70, justifyContent:"center", alignItems:"stretch", flex:1}} >
               <Text style= {{textAlign:"center", marginTop: 10, fontSize:30}}> ENTRAR </Text>
               </Button>
           </CardItem>
            </Card>

        </Content>

      </Container>
    );
  }
}