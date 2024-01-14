import React  from "react";
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props {
    label: string;
    onPress: () => void;


}

const CustomButton: React.FC<Props> = ({label, onPress}) => {

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
