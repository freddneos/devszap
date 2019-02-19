import * as React from 'react';
import { View, StyleSheet, Dimensions ,SafeAreaView} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Contatos from './Contatos'
import Conversa from './Conversas'
import TabMenu  from './TabMenu'

const contatos = Contatos
const conversas = Conversa


export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Conversas' },
      { key: 'second', title: 'Contatos' },
    ],
  };
  renderHeader = props => <TabMenu {...props}/>

  render() {
    return (
        <SafeAreaView style={{flex:1 , backgroundColor:"#000"}}>
            <TabView
                renderTabBar={this.renderHeader}
                navigationState={this.state}
                renderScene={SceneMap({
                first: contatos,
                second: conversas,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});