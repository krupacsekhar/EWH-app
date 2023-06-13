import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

const ChoiceButton = ({ icon, title, iconColor, answer }) => {
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const navigation = useNavigation();

  return (
    <IconButton
      style={
        correct && answer
          ? [style.buttonContainer, style.correct]
          : incorrect
          ? [style.buttonContainer, style.incorrect]
          : style.buttonContainer
      }
      title={title}
      icon={icon}
      size={70}
      iconColor={iconColor}
      onPress={() => {
        if (answer) {
          setCorrect(true);
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
    />
  );
};

function TrueFalse({ question, answer, img }) {
  const loadImage = () => {
    if (img !== undefined && img !== null) {
      return <Image style={style.image} source={img} />;
    }
  };
  const imgPresence = img !== undefined && img !== null;
  return (
    <View style={imgPresence ? style.containerwImg : style.containerwoImg}>
      {loadImage()}
      <Text style={style.text}> {question} </Text>
      <View style={style.buttons}>
        <ChoiceButton
          icon={"check"}
          title={"True"}
          iconColor={"#58C900"}
          answer={answer}
        />
        <ChoiceButton
          icon={"window-close"}
          title={"False"}
          iconColor={"#E10000"}
          answer={!answer}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  containerwImg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1%",
  },
  containerwoImg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1%",
    top: "50%",
  },
  text: {
    fontSize: 30,
    marginTop: "1%",
    marginBottom: "4%",
    width: "80%",
    textAlign: "center",
  },
  image: {
    height: "60%",
    width: "100%",
    resizeMode: "contain",
    borderRadius: 10,
  },
  buttons: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 125,
    width: 300,
  },
  correct: {
    backgroundColor: "#4EB001",
  },
  incorrect: {
    backgroundColor: "#ccc",
  },
});

export default TrueFalse;
