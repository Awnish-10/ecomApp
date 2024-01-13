import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput';
import PasswordInput from '../components/PasswordInput';
import ErrorPopup from '../components/ErrorPopup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store';
import CustomButton from '../components/CustomButton';

const Login = () => {

  const [userName, setUserName] = useState("")
  const [password, setpassword] = useState("")
  const [error, seterror] = useState(false)
  const users = useSelector((state: any) => state.users);

  const dispatch = useDispatch()

  const LoginHandler = () => {
    const matchingUser = users.find((user: any) => user.name === userName);
    if (!matchingUser || matchingUser?.password != password) {
      seterror(true)
      return
    }
    dispatch(loginUser(matchingUser))
  }

  return (
    <View style={styles.mainWrapper}>
      <View  >
        {error &&
          <><ErrorPopup
            errorMessage={'Username or password incorrect.(try username: awnish , password: awnish'}
            onHide={() => { seterror(false) }}
          />
            <View style={styles.verticalSpacer} />
          </>}

      </View>
      {/* Form wrapper */}
      <KeyboardAvoidingView
        behavior="padding"

        style={styles.formWrapper}>
        <View  >
          <View style={styles.verticalSpacer} />
          <Text style={styles.screenTitle}>
            {"Login"}
          </Text>
        </View>

        <View  >
          <Text style={styles.info}>{"hey, enter your account details to get log in to your account."}</Text>
        </View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Text input component */}
        <View  >
          <CustomInput
            text={userName}
            placeholder={"user name"}
            onChangeText={(text) => {
              setUserName(text)
            }}
          />
        </View>

        {/* Vertical spacer */}
        <View style={styles.verticalSpacer} />

        {/* Password text input component */}
        <View  >
          <PasswordInput
            text={password}
            placeholder={"password"}
            onChangeText={(text) => {
              setpassword(text)
            }}
          />

        </View>


        {/* Button component */}
        <View style={styles.verticalSpacer} />
        <View style={styles.verticalSpacer} />
        <View  >
          <CustomButton
            label="Login"
            onPress={() => LoginHandler()}
          />
        </View>

      </KeyboardAvoidingView>

    </View>
  );
}
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#B6C4B6'
  },
  formWrapper: {
    width: "100%",
    height: "75%",
    position: 'absolute',
    bottom: 0,
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    backgroundColor: '#304D30'
  },
  verticalSpacer: {
    marginVertical: 12,
  },
  socialMediaIconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  questionAndLinkWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  modal: {
    margin: 5 * 3,
  },
  modalBody: {
    position: 'relative',
    borderRadius: 5 * 3,
    padding: 5 * 3,
    paddingVertical: 5 * 9,
  },
  modalSubmitButtonWrapper: {
    marginTop: 5 * 3,
  },

  screenTitle: {
    fontSize: 32,
    color: "#EEF0E5",
  },
  info: {
    fontSize: 16,
    textTransform: 'capitalize',
    color: "#B6C4B6",
  },
});
export default Login