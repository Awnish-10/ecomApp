import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/FontAwesome"
import Cart from '../screens/Cart';
import ProductList from '../screens/ProductList';
import Product from '../screens/Product';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: "blue"
    },

    headerTintColor:  'white'
};
const BottomTabNavigator = createBottomTabNavigator();

export const BottomNavigator = () => {
    const cart = useSelector((state: any) => state.cart);
    return (
        <BottomTabNavigator.Navigator
            screenOptions={{
                tabBarActiveTintColor: "blue"
            }}
        >
            <BottomTabNavigator.Screen
                name="Home"
                component={ProductNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({  size, focused }) => (
                        <Icon name="home" size={size} color={focused?"#163020":"#B6C4B6"} />
                    ),
                }}

            />
            <BottomTabNavigator.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Cart',
                    tabBarBadge: cart.length,
                    tabBarBadgeStyle: {
                        backgroundColor: '#304D30', 
                      },
                    tabBarIcon: ({ size , focused}) => (
                        <Icon name="shopping-cart" size={size} color={focused?"#163020":"#B6C4B6"} />
                    ),
                }}
            />

        </BottomTabNavigator.Navigator>
    );
};


const ProductStackNavigator = createStackNavigator();

export const ProductNavigator = () => {
    return (
        <ProductStackNavigator.Navigator
            screenOptions={defaultNavOptions}
        >
            <ProductStackNavigator.Screen
                name="Product List"
                component={ProductList}
                options={{ headerShown: false }}
            />
            <ProductStackNavigator.Screen
                name="Product"
                component={Product}
                // options={{ headerShown: false }}
                options={{
                    headerStyle: {
                      backgroundColor: '#EEF0E5', 
                    },
                    headerTintColor: '#163020', 
                    headerTitleStyle: {
                      fontWeight: 'bold', 
                    },
                  }}
            />
        </ProductStackNavigator.Navigator>
    );
};