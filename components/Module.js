import React from "react";
import { Card, Title } from "react-native-paper";
import { StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Module({ modnum, name, image }) {
  const navigation = useNavigation();
  return (
    <Card
      style={styles.container}
      onPress={() =>
        navigation.navigate("Content", {
          id: modnum,
        })
      }
    >
      <Card.Cover style={styles.picture} source={image} />
      <Card.Content>
        <Title style={styles.title}>{name}</Title>
        <Text style={styles.name}>Module {modnum.slice(-1)}</Text>
      </Card.Content>

      <Card.Actions style={styles.button}></Card.Actions>
    </Card>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  picture: {
    height: 150,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "bold",
    marginTop: 10,
  },
  name: {
    color: "black",
  },
});
// completedContainer: {
//   picture: {
//     height: 150,
//   },
//   title: {
//     fontWeight: "bold",
//     marginTop: 10,
//     color: "white",
//   },
//   name: {
//     color: "white",
//   },
//   backgroundColor: "#4EB001",
// },

export default Module;
