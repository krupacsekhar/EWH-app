import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Explanation({ answer, explanation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.textContainer}>
          {answer === "true" || answer === "false" ? (
            <Icon
              name={answer === "true" ? "check-circle" : "close"}
              style={answer === "true" ? styles.correct : styles.incorrect}
            />
          ) : (
            <Text style={styles.answerText}>{answer}</Text>
          )}
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.explanationText}> {explanation} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
  },
  top: {
    flex: 0.9,
    justifyContent: "flex-end",
  },
  textContainer: {
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 40,
  },
  correct: {
    color: "#4EB001",
    fontSize: 75,
  },
  incorrect: {
    color: "#E10000",
    fontSize: 75,
  },
  answerText: {
    fontSize: 40,
  },
  bottom: {
    flex: 1,
    width: "75%",
  },
  explanationText: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default Explanation;
