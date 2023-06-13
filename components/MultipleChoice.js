import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Image, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

function MultipleChoice({
  question,
  img,
  answer,
  responseA,
  responseB,
  responseC,
  responseD,
}) {
  const answerA = answer == responseA;
  const answerB = answer === responseB;
  const answerC = answer === responseC;
  const answerD = answer === responseD;

  return (
    <View style={style.container}>
      <Text style={style.text}> {question} </Text>
      {/* <Image style={style.image} source={img} /> */}
      <View style={style.buttonsRow}>
        <View style={style.buttonsCol}>
          <View style={style.buttonMargin}>
            <MCButtonContainer response={responseA} answerChoice={answerA} />
          </View>
          <View style={style.buttonMargin}>
            <MCButtonContainer response={responseB} answerChoice={answerB} />
          </View>
        </View>

        <View style={style.buttonsCol}>
          <View style={style.buttonMargin}>
            <MCButtonContainer response={responseC} answerChoice={answerC} />
          </View>
          <View style={style.buttonMargin}>
            <MCButtonContainer response={responseD} answerChoice={answerD} />
          </View>
        </View>
      </View>
    </View>
  );
}

function MCButtonContainer({ response, answerChoice }) {
  const [stateA, setStateA] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const navigation = useNavigation();

  return (
    <Button
      contentStyle={
        stateA && answerChoice
          ? [style.button, style.correct]
          : incorrect
          ? [style.button, style.incorrect]
          : style.button
      }
      onPress={() => {
        if (answerChoice) {
          setStateA(true);
          navigation.navigate("CorrectIncorrect", {
            icon: "check",
            color: "#4EB001",
          });
        } else {
          setIncorrect(true);
          navigation.navigate("CorrectIncorrect", {
            icon: "close",
            color: "#E10000",
          });
        }
      }}
    >
      <View style={style.answerContainer}>
        <Text style={style.buttonText}>{response}</Text>
      </View>
    </Button>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "5%",
  },
  text: {
    fontSize: 40,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 400,
    height: 175,
  },
  buttonsRow: {
    display: "flex",
    flexDirection: "column",
  },
  buttonsCol: {
    display: "flex",
    width: "68%",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
  },
  answerContainer: {
    display: "flex",
    justifyContent: "center",
  },
  buttonMargin: {
    margin: "5%",
  },
  correct: {
    backgroundColor: "#4EB001",
  },
  incorrect: {
    backgroundColor: "#ccc",
  },
});

export default MultipleChoice;
