import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const formSubmit = () => {
    console.log(state);
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <ImageBackground
          source={require("../../assets/PhotoBG.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.formContainer,
                height: isShowKeyboard ? 360 : 549,
              }}
            >
              <View style={styles.form}>
                <Text style={styles.title}> Login</Text>

                <View>
                  <TextInput
                    onChangeText={value =>
                      setState(prevState => ({
                        ...prevState,
                        email: value,
                      }))
                    }
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.email}
                    style={styles.input}
                    placeholder="Email"
                  />
                </View>
                <View>
                  <TextInput
                    onChangeText={value =>
                      setState(prevState => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.password}
                    style={styles.input}
                    placeholder="Password"
                  />
                </View>
                <View style={styles.buttons}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.btn}
                    onPress={formSubmit}
                  >
                    <Text style={{ color: "#fff" }}>Sign in</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "#1B4371",
                    }}
                  >
                    Dont have acount?
                    <Text onPress={() => navigation.navigate("Register")}>
                      Register
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: 500,
    marginBottom: 32,
    marginTop: 92,
  },
  form: {
    marginHorizontal: 16,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  btn: {
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    marginTop: 43,
    gap: 16,
    marginBottom: 75,
    alignItems: "center",
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
  },
});
