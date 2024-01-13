import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ProductList = ({navigation}:{navigation:any}) => {

  const dispatch = useDispatch();

  const [categories, setcategories] = useState([])
  const [selectedCategory, setselectedcategory] = useState(null)
  const [products, setproducts] = useState([])
// console.log("categories",categories);
// console.log("products",products);
  const handleLogout = () => {
    dispatch(loginUser(null))
  }
useEffect(() => {
  fetchCategories()
  fetchProducts()
}, [])


  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      setcategories(response.data);
    } catch (error) {
      console.log("err", error);

    }
  }
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setproducts(response.data);
    } catch (error) {
      console.log("err", error);

    }
  }
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Icon name="amazon" size={30} color="#163020" />
        <TouchableOpacity onPress={() => handleLogout()} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: "#163020", fontWeight: '700', marginRight: 8 }}>Logout</Text>
          <Icon name="sign-out" size={30} color="#163020" />
        </TouchableOpacity>
      </View>
      <View style={styles.verticalSpacer} />
      <View style={styles.sectionTitleAndLinkWrapper}>
            {/* Section title component */}
            {/* <SectionTitle title="Categories" /> */}
            <Text style={styles.sectionTitle}>{'Categories'}</Text>
          
          </View>
          <View style={styles.verticalSpacer} /> 
          <View >
          <ScrollView
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={
                styles.horizontalScrollViewContentContainerStyle
              }>
                <TouchableOpacity
              
              style={[
                styles.categoryLabelWrapper,
                {backgroundColor: `${null == selectedCategory?"#304D30":"#EEE7DA"}`},
              ]}
              onPress={() => setselectedcategory(null)}>
              <Text
                style={[
                  styles.categoryLabel,
                  {color:  `${null != selectedCategory?"#304D30":"#EEF0E5"}`},
                ]}>
                {"All"}
              </Text>
            </TouchableOpacity>
              {categories.map((item, index) => {
              return <TouchableOpacity
              key={index}
              style={[
                styles.categoryLabelWrapper,
                {backgroundColor: `${item == selectedCategory?"#304D30":"#EEE7DA"}`},
              ]}
              onPress={() => setselectedcategory(item)}>
              <Text
                style={[
                  styles.categoryLabel,
                  {color:  `${item != selectedCategory?"#304D30":"#EEF0E5"}`},
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
              })}
            </ScrollView>
            </View>
            <View style={styles.verticalSpacer} /> 
               {/* Vertical scroll view */}
               <ScrollView
              showsHorizontalScrollIndicator={false}
              bounces={false}
              >
              {products.map((product:any, index) => 
                {
               return (selectedCategory == null || selectedCategory == product.category) && <View key={index} style={styles.productWrapper}>
                  {/* <Text>{product.title}</Text> */}
                  <ProductCard
                  product={product}
                    productImage={product.image}
                    productTitle={product.title}
                    productPrice={product.price}
                    rating={product.rating.rate}
                    onPress={() => navigation.navigate('Product',{id:product.id})}
                  />
                </View>}
              )}
            </ScrollView>
           
          
      {/* <Text>ProductList</Text> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  verticalSpacer: {
    marginVertical: 12,
  },
  sectionTitleAndLinkWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 16,
    color:'#304D30'
  },
  horizontalScrollViewContentContainerStyle: {
    marginHorizontal: 8,
    height:26
    
  },
  categoryLabelWrapper: {
    paddingHorizontal: 5,
    // height:28,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 7,
    marginHorizontal:8,
    borderBottomColor:"#163020",
    // borderWidth:1
  },
  categoryLabel: {
    fontSize: 14,
    padding:2
  },
  productWrapper: {
    marginHorizontal: 16,
    paddingVertical: 16,
    // width: 130,
  },
})
export default ProductList