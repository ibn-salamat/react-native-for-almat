import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "red", fontSize: 30 }}>Альхамдулиллах!</Text>
      <Text style={{ color: "green", fontSize: 20 }}>Я mobile разработчик</Text>

      <Button
        title="нажми на меня"
        onPress={() => {
          Alert.alert("спулае");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
