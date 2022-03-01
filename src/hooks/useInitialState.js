import {useState} from "react";
import initialState from '../initialState';

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter( (items) => {
                return items.id != payload.id;
            })
        })
    }

    const AddToBuyer = (payload) => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const AddNewOrder = (payload) => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }

    return {
        addToCart,
        removeFromCart,
        state,
        AddToBuyer,
        AddNewOrder
    }
}

export default useInitialState;