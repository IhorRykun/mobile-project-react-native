import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";

import { useFonts } from "expo-font";
import corse from "./curse.json";
import React, { useState } from "react";

// const COURSES = [
//   {
//     id: "45k6-j54k-4jth",
//     title: "HTML"
//   },
//   {
//     id: "4116-jfk5-43rh",
//     title: "JavaScript"
//   },
//   {
//     id: "4d16-5tt5-4j55",
//     title: "React"
//   },
//   {
//     id: "LG16-ant5-0J25",
//     title: "React Native"
//   }
// ];

const Ur =
  "https://i.pinimg.com/236x/2a/d5/8a/2ad58aa93a1d60a0700332c40e58b31c.jpg";

const Uri2 =
  "https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg";

const initialState = {
  email: "",
  password: ""
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "Bebas-Neue": require("./fonts/BebasNeue-Regular.ttf")
  });

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyBordHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyBordHide}>
      <View style={styles.container}>
        <ImageBackground source={{ uri: Uri2 }} style={styles.imgContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <Text style={styles.text}>sign in</Text>
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 20 : 100
              }}>
              <View>
                <Text style={styles.inputTitle}>EMAIL</Text>
                <TextInput
                  onChangeText={() => {
                    (value) =>
                      setState((prevState) => ({
                        ...prevState,
                        email: value
                      }));
                  }}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  style={styles.login}></TextInput>
              </View>
              <View>
                <Text style={styles.inputTitle}>PASSWORD</Text>
                <TextInput
                  onChangeText={() => {
                    (value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value
                      }));
                  }}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  style={styles.login}
                  secureTextEntry={true}
                  maxLength={12}
                  minLength={5}></TextInput>
              </View>
              <TouchableOpacity
                style={styles.formButton}
                activeOpacity={0.8}
                onPress={keyBordHide}>
                <Text style={styles.formButtonText}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        backgroundColor: "red",
        fontSize: 12,
        flex: 1,
        color: "black"
      },
      android: {
        flex: 1,
        textAlign: "center",
        backgroundColor: "blue",
        fontSize: 48,
        color: "black"
      }
    })
  },
  imgContainer: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end"
  },
  form: {
    marginHorizontal: 20,
    justifyContent: "flex-end",
    marginBottom: "100"
  },
  text: {
    ...Platform.select({
      android: {
        fontSize: 32,
        fontFamily: "Bebas-Neue",
        marginTop: 100,
        textAlign: "center",
        marginBottom: 20,
        // backgroundColor: "#fff",
        color: "#fff"
      },
      ios: {
        fontSize: 72,
        color: "#fff",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 200
      }
    })
  },
  inputTitle: {
    fontFamily: "Bebas-Neue",
    fontSize: 24,
    paddingLeft: 20,
    color: "#fff"
  },
  login: {
    borderWidth: 2,
    height: 60,
    borderColor: "#fff",
    fontSize: 14,
    color: "white",
    borderRadius: 20,
    textAlign: "center"
  },
  formButton: {
    backgroundColor: "yellow",
    borderRadius: 20,
    height: 40,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderWidth: 1,
    borderBlockColor: Platform.OS === "ios" ? "white" : "red"
  },
  formButtonText: {
    color: Platform.OS === "ios" ? "red" : "blue",
    fontFamily: "Bebas-Neue",
    fontSize: 24
  }
});
