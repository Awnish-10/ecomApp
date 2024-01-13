import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/FontAwesome"
import Cart from '../screens/Cart';
import ProductList from '../screens/ProductList';
import Product from '../screens/Product';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: "blue"
    },

    headerTintColor:  'white'
};
const BottomTabNavigator = createBottomTabNavigator();

export const BottomNavigator = () => {
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
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                }}

            />
            <BottomTabNavigator.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Cart',
                    tabBarBadge: 2,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="shopping-cart" size={size} color={color} />
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
                options={{ headerShown: false }}
            />
        </ProductStackNavigator.Navigator>
    );
};