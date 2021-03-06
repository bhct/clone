import React, { Component } from "react";
import {
  View,
  StatusBar,
  ListView,
  ImageBackground,
  ScrollView,
} from "react-native";

import ListViewData from "./SubComponents/ListViewData";

import { connect } from "react-redux";

import _ from "lodash";

import { contatosUsuarioFetch } from "../actions/AppActions";

class Contatos extends Component {
  componentWillMount() {
    this.props.contatosUsuarioFetch();

    this.criaFonteDeDados(this.props.contatos);
  }

  componentWillReceiveProps(nextProps) {
    this.criaFonteDeDados(nextProps.contatos);
  }

  criaFonteDeDados(contatos) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.fonteDeDados = ds.cloneWithRows(contatos);
  }

  render() {
    return (
      <ImageBackground
        style={{ flex: 1, width: null }}
        source={require("../images/bg-in.png")}
      >
        <ScrollView>
          <StatusBar backgroundColor="#114d44" />
          <ListView
            enableEmptySections
            dataSource={this.fonteDeDados}
            renderRow={(data) => {
              return (
                <View>
                  <ListViewData
                    name={data.nome}
                    email={data.email}
                    navigation={this.props.navigation}
                  />
                </View>
              );
            }}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}

const MapStateToProps = (state) => {
  const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
    return { ...val, uid };
  });

  return {
    contatos: contatos,
  };
};

export default connect(MapStateToProps, { contatosUsuarioFetch })(Contatos);
