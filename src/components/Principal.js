import React, { Component } from 'react';

import { View, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { connect } from 'react-redux';

import { habilitaInclusaoContato } from '../actions/AppActions';

import Conversas from './Conversas';
import Contatos from './Contatos';

const _Conversas = () => (
  <Conversas />
);
const _Contatos = () => (
  <Contatos />
);


class Principal extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: ( 
        <TouchableHighlight 
          onPress={ 
            () => {
              navigation.navigate('AdicionarContato');
            } 
          } 
          underlayColor="#114d44"
        >
          <Image 
              source={require('../images/adicionar-contato.png')} 
              style={{ marginRight: 10 }} 
          />
        </TouchableHighlight>
      ),
    }
  }
  
  renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#115e54' }}
      tabStyle={{ elevation: 1 }}
    />
  )

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Conversas' },
      { key: 'second', title: 'Contatos' },
    ],
  };


  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: _Conversas,
          second: _Contatos,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ 
          height: 0,
          width: Dimensions.get('window').width
        }}
        renderTabBar={ this.renderTabBar }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});

export default connect(null, { habilitaInclusaoContato })(Principal);