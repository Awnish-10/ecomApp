import React  from "react";
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props {
    label: string;
    onPress: () => void;


}

// Functional component
const CustomButton: React.FC<Props> = ({label, onPress}) => {
  // Using context
//   const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);

  // Storing theme config according to the theme mode
//   const theme = isLightTheme ? lightTheme : darkTheme;

  // Returning
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.buttonLabel}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};


const styles =  StyleSheet.create({
    button: {
      height: 60,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#163020'
    },
    buttonLabel: {
      fontSize: 20,
      color: "#EEF0E5"
    },
  });

export default CustomButton;
