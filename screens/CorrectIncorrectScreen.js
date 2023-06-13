import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, Pressable, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function CorrectIncorrectScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { icon, color } = route.params;

  return (
    <View style={[style.container, { backgroundColor: color }]}>
      <Pressable
        style={style.press}
        title={"pressable"}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name={icon} style={style.icon} />
      </Pressable>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  icon: {
    color: "white",
    fontSize: "300",
  },
  press: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CorrectIncorrectScreen;
