import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import AutoCompleteInput from './Autocomplete-input';
import Tab1 from './TabOne';
import Tab2 from './TabTwo';
import Tab3 from './TabTree';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
          <AutoCompleteInput/>
        <Tabs>
          <Tab heading="Todos">
            <Tab1 />
          </Tab>
          <Tab heading="Progreso">
            <Tab2 />
          </Tab>
          <Tab heading="Transito">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}