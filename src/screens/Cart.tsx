import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import CartProduct from '../components/CartProduct';

const Cart = () => {
  const cart = useSelector((state: any) => state.cart);
  console.log("cart",cart);
  const totalCost = cart.reduce((acc:number,value:any)=>{
    return acc += value.price
  },0)
 
  console.log('totalCost',totalCost);
  
  return (
    <View style={styles.mainWrapper}>
        {/* Cart total wrapper */}
        <View
      
      style={styles.cartTotalWrapper}>
      <Text style={styles.cartTotalLabel}>
        Cart total
      </Text>
      <Text style={styles.cartTotal}>
        {`₹ ${totalCost.toFixed(2)}`}
      </Text>
    </View>
      <View
       
        style={{flex: 1}}>
        <ScrollView  showsVerticalScrollIndicator={false}>
          {cart.map((item:any, index:any) => (
            <View key={index}>
              <CartProduct
              product={item}
                productImage={item.image}
                productTitle={item.title}
                productPrice={item.price}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      
    </View>
  );
}

const styles =  StyleSheet.create({
  mainWrapper: {
    flex: 1,
    padding: 16,
    backgroundColor:"#EEF0E5"
  },
  cartTotalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:16,
  },
  cartTotalLabel: {
    color:"#163020",
    fontSize: 14,
  },
  cartTotal: {
    color:"#304D30",
    fontSize: 24,
    
  },
  verticalSpacer: {
    marginVertical: 8,
  },
});

export default Cart