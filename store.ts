import { createStore, Store } from 'redux';

// Constants
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';
const LOGIN = 'LOGIN';

// Actions
const addToCart = (product: Product) => ({
    type: ADD_TO_CART,
    payload: product,
});
const loginUser = (user: User) => ({
    type: LOGIN,
    payload: user,
});
const deleteFromCart = (product: Product) => ({
    type: ADD_TO_CART,
    payload: product,
});


// Types

type User = {
    id: string;
    name: string;
    password: string;
}

type Rating = {
    rate: number;
    count: number;
};

type Product = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
};
type AppState = {
    cart: Product[]
    users: User[];
    currentUser: User | null
};

const TempUser: User = {
    id: "1",
    name: 'awnish',
    password: 'awnish'

}

// Reducers
const initialState: AppState = {
    cart: [],
    users: [TempUser],
    currentUser: null
};

const rootReducer = (state: AppState = initialState, action: any) => {
    switch (action.type) {

        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
            case LOGIN:
                return {
                    ...state,
                    currentUser: action.payload,
                };

        case DELETE_FROM_CART:
            const filteredCart = state.cart.filter((cart: Product) => cart.id !== action.payload.id);
            return {
                ...state,
                carts: filteredCart,
            };
        default:
            return state;
    }
};

// Create store
const store: Store<AppState, any, any> = createStore(rootReducer);

export { store, addToCart, deleteFromCart ,loginUser};
