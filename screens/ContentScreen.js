import { React, useContext, useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Appbar, IconButton } from "react-native-paper";
import { ProgressBar } from "react-native-paper";
import Story from "../components/Story";
import MultipleChoice from "../components/MultipleChoice";
import TrueFalse from "../components/TrueFalse";
import { GlobalContext } from "../util/context";
import { ContentType } from "../util/objects";
import Explanation from "../components/Explanation";

function ContentScreen({ route, navigation }) {
  const { id } = route.params;
  const module_id = Number(id.slice(-1));
  const [state] = useContext(GlobalContext);
  const bgrd = state.background;

  const [id_, setID] = useState(id);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState(null);
  const [progress, setProgress] = useState(0);

  const triggerNext = () => {
    if (index < state.modules[module_id - 1].pages.length - 1) {
      setIndex(index + 1);
    } else {
      navigation.navigate("Module");
    }
  };

  const hanldeModuleCompletion = () => {
    // update state
    navigation.navigate("Module");
  };

  const load = () => {
    setIndex(0);
    setContent(state.modules[module_id - 1].pages[0]);
    setID(id);
    setProgress(0);
    setLoading(false);
  };

  if (id_ !== id || loading) {
    load();
  }

  useEffect(() => {
    setContent(state.modules[module_id - 1].pages[index]);
    setProgress((index + 1) / state.modules[module_id - 1].pages.length);
  }, [content, index]);

  return (
    <ImageBackground source={bgrd} style={style.bgrd}>
      <View>
        <Appbar.Header>
          <Appbar.Action
            icon="home"
            mode="contained"
            onPress={() => navigation.navigate("Home")}
          />
          <Appbar.Content title={state.modules[module_id - 1].name} />
        </Appbar.Header>
      </View>
      <View style={style.container}>
        {loading ? null : (
          <View>
            {content.questiontype === "MC" ? (
              <MultipleChoice
                question={content.question}
                responseA={content.answerchoices[0]}
                responseB={content.answerchoices[1]}
                responseC={content.answerchoices[2]}
                responseD={content.answerchoices[3]}
                answer={content.answer}
                img={content.image}
              />
            ) : content.questiontype === "TF" ? (
              <TrueFalse
                question={content.question}
                answer={content.answer}
                img={content.image}
              />
            ) : content.type === ContentType.Explanation ? (
              <Explanation answer={content.answer} explanation={content.text} />
            ) : (
              <Story img={content.image} txt={content.text} />
            )}
          </View>
        )}

        <View style={style.navigator}>
          {index > 0 ? (
            <IconButton
              icon="arrow-left-bold"
              mode="contained"
              onPress={() => setIndex(index - 1)}
              size={50}
            />
          ) : (
            <IconButton size={50} />
          )}
          {index < state.modules[module_id - 1].pages.length - 1 ? (
            <IconButton
              icon="arrow-right-bold"
              mode="contained"
              onPress={() => {
                setIndex(index + 1);
              }}
              size={50}
            />
          ) : (
            <IconButton
              icon="check-outline"
              mode="contained"
              onPress={hanldeModuleCompletion}
              size={50}
            />
          )}
        </View>
      </View>
      <ProgressBar
        style={style.footer}
        progress={progress}
        color="rgba(249,34,200,0.4)"
      />
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  bgrd: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  navigator: {
    position: "absolute",
    bottom: "2.5%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    height: 15,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default ContentScreen;
