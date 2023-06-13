import React, { useContext, useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import Module from "../components/Module";
import { FlatGrid } from "react-native-super-grid";
import { Appbar, Modal, Portal, Provider } from "react-native-paper";
import { GlobalContext } from "../util/context";
import About from "../components/About";

export default function ModuleScreen() {
  const [state] = useContext(GlobalContext);
  const [items] = useState(state.modules);

  const bgrd = state.background;

  const [aboutVisible, setAboutVisible] = useState(false);
  const showAboutModal = () => setAboutVisible(true);
  const hideAboutModal = () => setAboutVisible(false);

  return (
    <Provider>
      <ImageBackground source={bgrd} style={styles.bgrd}>
        <Appbar.Header elevated mode="small">
          <Appbar.Content style={{ textAlign: "left" }} title="Akafuba" />
          <Appbar.Action
            icon="information"
            size={35}
            onPress={showAboutModal}
          />
        </Appbar.Header>

        <Portal>
          <Modal
            visible={aboutVisible}
            onDismiss={hideAboutModal}
            contentContainerStyle={styles.modalContent}
          >
            <About hideAboutModal={hideAboutModal} />
          </Modal>
        </Portal>

        <FlatGrid
          itemDimension={150}
          data={items}
          style={styles.gridView}
          spacing={75}
          horizontal={false}
          maxItemsPerRow={3}
          renderItem={({ item }) => (
            <Module
              style={styles.notCompletedContainer}
              modnum={item.id}
              name={item.name}
              image={item.image}
              id={item.id}
            />
          )}
        />
      </ImageBackground>
    </Provider>
  );
}
const styles = StyleSheet.create({
  header: {
    marginLeft: 2,
  },
  bgrd: {
    flex: 1,
  },
  gridView: {
    flex: 1,
    alignContent: "center",
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
  modalContent: {
    borderRadius: 25,
    marginTop: "5%",
    marginHorizontal: "20%",
    height: "80%",
    backgroundColor: "white",
    alignSelf: "center",
  },
  buttonContainer: {
    justifyContent: "space-around",
    flex: 1,
    backgroundColor: "#fff",
    padding: "5%",
    margin: "5%",
  },
});
