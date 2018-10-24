import React, { Component } from 'react';
import { View, Text, StatusBar, TextInput, Button, ImageBackground } from 'react-native';

import { modificaEmail, addContato } from '../actions/AppActions';

import { connect } from 'react-redux';

class AdicionarContato extends Component {

  render() {
    return (
      <ImageBackground style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around', padding: 20, width: null }} source={ require('../images/bg-in.png') }>
        <StatusBar backgroundColor="#114d44" /> 

        <View>
          <TextInput 
                placeholder="E-mail"
                value={ this.props.email }
                placeholderTextColor="#115e54"
                selectionColor="#115e54"
                style={{ fontSize: 20, height: 45, borderBottomColor: '#115e54', borderBottomWidth: 0.9, color: '#115e54' }} 
                onChangeText={ text => this.props.modificaEmail(text) } 
              />
        </View>

        <View>
          <Button 
            title='Adicionar'
            color='#115e54'
            onPress={ () => this.props.addContato(this.props.email) }
          />

          <Text style={{ color: 'green' }}>{ this.props.add_contato_sucesso }</Text>
          <Text style={{ color: 'red' }}>{ this.props.add_contato_erro }</Text>
        </View>

      </ImageBackground>
    )
  }
}

const MapStateToProps = state => ({
  email: state.AppReducer.email,
  add_contato_sucesso: state.AppReducer.add_contato_sucesso,
  add_contato_erro: state.AppReducer.add_contato_erro,
})

export default connect(MapStateToProps, { modificaEmail, addContato })(AdicionarContato);
