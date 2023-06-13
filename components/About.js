import { Image, StyleSheet, Text, View } from "react-native";
import { Divider, IconButton } from "react-native-paper";
import rose_logo from "../assets/rose_logo.png";
import ewh_logo from "../assets/ewh_logo.png";

const B = (props) => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

export default function About({ hideAboutModal }) {
  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <Text style={style.headerText}>
          Working Together to Solve Global Health Problems
        </Text>
        <IconButton
          icon="close"
          size={20}
          style={style.aboutContent}
          onPress={hideAboutModal}
          containerColor={"#ddd"}
        />
      </View>
      <Divider style={style.divider} />

      <Text style={style.content}>
        <B>Akafuba Educational Application Program </B>is the result of a joint
        collaborative effort by the
        <B> Engineering World Health Project Team at Cornell University </B>and
        <B> Rose Academies-Uganda</B>. Tuberculosis (TB) is a vicious, highly
        contagious disease that generally affects the lungs and is fatal if not
        medically treated. However, TB can easily be cured with early detection
        and treatment. In Uganda, there have been many programs that have
        attempted to reduce the prevalence of TB, but due to a lack of
        understanding about the disease, how it is transmitted, testing and
        treatment, the efforts have been largely unsuccessful.
      </Text>

      <Text style={style.content}>
        Our primary objective in the development of the{" "}
        <B>Akafuba Educational Application Program</B> is to break down the
        barriers of ignorance with an interactive, graphic intensive program.
        This program, like many of our Android based applications, makes
        learning easier with the use of culturally appropriate graphics that
        address cultural fears, myths and misconceptions. We hope that this
        educational tool will help remove the fears of early diagnosis so that
        lives can be saved.
      </Text>
      <View style={style.imageContainer}>
        <Image source={rose_logo} style={style.image} />
        <Image source={ewh_logo} style={style.ewh_image} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: "5%",
  },
  divider: {
    borderWidth: 1,
    width: "10%",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
  },
  content: {
    marginTop: "2.5%",
    fontSize: 15,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    resizeMode: "contain",
    width: "50%",
  },
  ewh_image: {
    resizeMode: "contain",
    width: "50%",
    marginTop: "-3%",
  },
});
