import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './TabOne';
import Tab2 from './TabTwo';
import Tab3 from './TabTree';
import Tab4 from './TabFour';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Tabs style={styles.tab}>
          <Tab heading="Todos">
            <Tab1 />
          </Tab>
          <Tab heading="Progreso">
            <Tab2 />
          </Tab>
          <Tab heading="Transito">
            <Tab3 />
          </Tab>
          <Tab heading="Terminado">
            <Tab4 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tab:{
    backgroundColor:"black",
  }
})