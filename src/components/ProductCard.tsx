import { memo, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../store';

interface Props {
    productImage: any;
    product: any;
    productTitle: string;
    productPrice: string;
    rating: string;
    onPress: () => void;
}

// Functional component
const ProductCard: React.FC<Props> = ({
    productImage,
    productTitle,
    productPrice,
    rating,
    product,
    onPress,
}) => {
    const dispatch = useDispatch()
    const cart = useSelector((state: any) => state.cart);
    const isPresent = cart.some((item:any) => item.id === product.id)
    // Using context
console.log("cart",cart);

    // Storing theme config according to the theme mode

    // Returning
    const handleCart = ()=>{
        isPresent?
        dispatch(deleteFromCart(product))
        : dispatch(addToCart(product))
    }
    return (
        <TouchableOpacity
            style={styles.productCard}
            onPress={onPress}>
            {/* Rotated background */}

            {/* Product image */}
            <View style={styles.productImageContainer}>
            <Image source={{uri:productImage}} style={styles.productImage} />
            </View>

            {/* Product title */}
            <View>
            <Text
                style={styles.productTitle}
                // numberOfLines={1}
                // ellipsizeMode="tail"
                >
                {productTitle}
            </Text>

            <View 
            style={styles.productPriceAndRatingWrapper}
            >
                <Text style={styles.productPrice}>
                    {"₹ " +productPrice}
                </Text>
                <View style={styles.starAndRatingWrapper}>
                    <Icon name="star" size={14} color="#F9D949" />
                    <Text style={styles.rating}>{rating}</Text>
                </View>
            </View>
            </View>
            <TouchableOpacity
            onPress={handleCart}
                style={styles.bagIconWrapper}>
                    {!isPresent?
                    <Icon name="shopping-cart" size={24} color="#EEF0E5" />
                    :<Icon name="trash-o" size={24} color="#F45050" />
                    }
                
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    productCard: {
        padding:8,
        borderRadius: 5,
        flexDirection:'row',
        // minHeight: 195,
        justifyContent: 'flex-start',
        // marginTop: 50,
        // position: 'relative',
        backgroundColor: '#B6C4B6'
    },
    productImageContainer:{
        backgroundColor:'white',
        paddingHorizontal:8,
        borderRadius: 5,
    },
    productImage: {
        width: 105,
        height: 150,
        // resizeMode: 'contain',
        padding:10,
        borderRadius: 5,
        // alignSelf: 'center',
        // position: 'absolute',
        // top: -55,
    },
    productTitle: {
        marginTop:8,
        maxWidth: 200,
        fontSize: 14,
        // bottom: 50,
        marginHorizontal: 15,
        color: '#163020'
    },
    productPriceAndRatingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        // bottom: 50,
        margin: 16,
    },
    productPrice: {
        fontSize: 14,
        marginEnd: 5,
        color: '#163020',
        fontWeight:'700'
    },
    starAndRatingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:8,
    },
    rating: {
        fontSize: 14,
        marginStart: 5,
        color: "#163020"
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
})
// Exporting
export default ProductCard;
