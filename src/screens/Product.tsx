import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Icon from "react-native-vector-icons/FontAwesome"

interface ProductDetail {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: any;
  rating: {
    rate: number;
    count: number;
  };
}

const Product = ({ route }: { route: any }) => {


  const { id } = route.params || {};
  console.log("route", id);

  const [productDetail, setProductDetail] = useState<ProductDetail | null>(null)
  const [loading, setLoading] = useState(true)
  console.log("productDetail", productDetail);

  useEffect(() => {
    fetchProductDetails()
  }, [])


  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProductDetail(response.data);
      setLoading(false)
    } catch (error) {
      console.log("err", error);

    }
  }

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.flatListsWrapper}>

        <View style={styles.largeImageWrapper}>
          <View style={{ backgroundColor: 'white', borderRadius: 8, width: '100%', height: '100%', justifyContent: 'center' }}>
            <Image source={{ uri: productDetail?.image }} style={styles.largeImage} />
          </View>
        </View>
      </View>
      {/* Product details wrapper */}
      <View style={styles.productDetailsOuterWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={
            styles.productDetailsScrollView
          }>
          <View style={styles.productTitleAndHeartIconWrapper}>
            <View style={styles.productTitleWrapper}>
              <Text
                style={styles.productTitle}
              >
                {productDetail?.title}
              </Text>
            </View>

          </View>

          {/* Rating */}
          <View
            style={styles.ratingWrapper}
          >
            <Icon name="star" size={20} color="#F8DE22" />

            <Text style={styles.rating}>{productDetail?.rating.rate}</Text>
            <Text style={styles.outOf}>
              out of
            </Text>
            <Text
              style={styles.ratingThreshold}>
              5.0
            </Text>
            <Text style={styles.totalRating}>
              {`(${productDetail?.rating.count})`}
            </Text>
          </View>

          {/* Pricing and quantity */}
          <View>
            <Text
              style={styles.sectionTitle}>
              Price
            </Text>
            <View style={styles.productPriceAndQuantityWrapper}>
              <Text style={styles.productPrice}>
                {`₹${productDetail?.price}`}
              </Text>

            </View>
          </View>

          {/* Description */}
          <Text style={styles.sectionTitle}>
            Description
          </Text>

          <Text style={styles.description}>
            {productDetail?.description}
          </Text>


        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "#B6C4B6"
  },
  flatListsWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  verticalFlatListWrapper: {
    width: "50%",
    height: '100%',
    alignItems: 'center',
    backgroundColor: "#EEF0E5"
  },
  verticalFlatList: {
    width: '100%',
  },
  verticalFlatListContentContainerStyle: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  horizontalFlatListWrapper: {
    width: "50%",
    height: '100%',
    backgroundColor: "#304D30"
  },
  largeImageWrapper: {
    width: "100%",
    height: '100%',
    padding: 16,
    // backgroundColor:'red'
  },
  largeImage: {
    width: "100%",
    height: "90%",
    borderRadius: 8,
    // flex: 1,
    resizeMode: 'contain',
  },
  thumbnailImageWrapper: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 16,
    padding: 5,
    marginVertical: 8,
  },
  thumbnailImage: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'contain',
  },
  productDetailsOuterWrapper: {
    flex: 1,
    marginBottom: 32
  },
  productDetailsScrollView: {
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "#EEF0E5"
  },
  productTitleAndHeartIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productTitleWrapper: {
    flex: 1,
    paddingEnd: 16,
    marginBottom: 8
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#163020"
  },
  heartIconWrapper: {
    width: 35,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: "#304D30",
    fontSize: 16,
    marginHorizontal: 5,
  },
  outOf: {
    color: "#B6C4B6",
    fontSize: 16,
  },
  ratingThreshold: {
    color: "#304D30",
    fontSize: 16,
    marginStart: 5,
  },
  totalRating: {
    color: "#B6C4B6",
    fontSize: 16,
  },
  productPriceAndQuantityWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: "#163020",
    fontSize: 16,
    fontWeight: '500',
    marginTop: 16,
  },
  productPrice: {
    color: "#304D30",
    fontSize: 24,
  },
  productQuantityWrapper: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 50,
    width: 100,
  },
  plusIconWrapper: {
    width: 20,
    aspectRatio: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productQuantity: {

    fontSize: 16,
  },
  minusIconWrapper: {
    width: 20,
    aspectRatio: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plantCareWrapper: {
    marginEnd: 16,
  },
  plantCareTitle: {

    fontSize: 12,
    marginBottom: 5,
  },
  plantCareAmount: {

    fontSize: 12,
  },
  description: {
    color: "#163020",
    fontSize: 14,
  },
});

export default Product