import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../store';
import Icon from "react-native-vector-icons/FontAwesome"

interface Props {
    productImage: any;
    product: any;
    productTitle: string;
    productPrice: string;
}

const CartProduct : React.FC<Props> = ({
    productImage,
    productTitle,
    productPrice,
    product,
}) => {
    const dispatch = useDispatch()
    const handleCart = ()=>{
        dispatch(deleteFromCart(product))
    }
    return (
        <View style={styles.productCard}>
          <View
            style={styles.productImageWrapper}>
            <Image source={{uri:productImage}} style={styles.productImage} />
          </View>
          {/* Product details wrapper */}
          <View style={styles.productDetailsWrapper}>
            {/* Product title & price */}
            <View>
              <Text
                style={styles.productTitle}
                numberOfLines={1}>
                {productTitle}
              </Text>
              <Text style={styles.productPrice}>
                {productPrice}
              </Text>
            </View>
          </View>
    
          <TouchableOpacity
            onPress={handleCart}
                style={styles.bagIconWrapper}>
                    <Icon name="trash-o" size={24} color="#F45050" />
                    
                
            </TouchableOpacity>
 
        </View>
      );
}

const styles =  StyleSheet.create({
    productCard: {
      height: 110,
      borderRadius: 5,
      flexDirection: 'row',
      marginBottom: 16,
      backgroundColor:"#B6C4B6"
    },
    productImageWrapper: {
      width: 75,
      aspectRatio: 1,
      borderRadius: 5,
      marginStart: 16,
      marginTop: 16,
      padding: 5,
      position: 'relative',
      backgroundColor:"white"
    },
    productImage: {
      width: null,
      height: null,
      flex: 1,
      resizeMode: 'contain',
    },
    productDetailsWrapper: {
      margin: 16,
      flex: 1,
      justifyContent: 'space-between',
    },
    productTitle: {
      color:"#163020",
      fontSize: 14,
      marginBottom: 5,
    },
    productPrice: {
        color:"#304D30",
      fontSize: 14,
    },
    productQuantityWrapper: {
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      marginVertical: 8,
      marginEnd: 16,
      padding: 5,
      borderRadius: 50,
    },
    plusIconWrapper: {
      width: 20,
      aspectRatio: 1,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    productQuantity: {
      
      fontSize: 14,
    },
    minusIconWrapper: {
      width: 20,
      aspectRatio: 1,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bagIconWrapper: {
        width: 40,
        aspectRatio: 1,
        right: 0,
        bottom: 0,
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#304D30"
    },
  });

export default CartProduct