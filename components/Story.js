import { View, Image, Text, StyleSheet } from "react-native";

function Story({ img, txt }) {
  const loadImage = () => {
    if (img !== null && img !== undefined) {
      return (
        <View style={style.square}>
          <Image style={style.image} source={img} />
        </View>
      );
    }
  };
  const imgPresence = img !== undefined && img !== null;
  return (
    <View style={imgPresence ? style.containerwImg : style.containerwoImg}>
      <View style={style.square}>
        <Text style={style.text}>{txt}</Text>
      </View>
      {loadImage()}
    </View>
  );
}

const style = StyleSheet.create({
  containerwImg: {
    display: "flex",
    flexDirection: "row",
    margin: "5%",
    alignItems: "center",
  },
  containerwoImg: {
    display: "flex",
    flexDirection: "row",
    margin: "5%",
    alignItems: "center",
    top: "15%",
  },
  text: {
    fontSize: 40,
    width: "90%",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    borderRadius: 10,
  },
  square: {
    flex: 1,
  },
});

export default Story;
