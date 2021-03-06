import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";

export default ({ navigation }) => (
  <ImageBackground
    style={styles.container}
    source={require("../images/bg.png")}
  >
    <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 35,
          marginBottom: 5,
        }}
      >
        Seja Bem-vindo
      </Text>
      <Image source={require("../images/logo.png")} />
    </View>

    <View style={{ flex: 1 }}>
      <Button
        title="Fazer Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: { flex: 1, width: null, padding: 15 },
});
