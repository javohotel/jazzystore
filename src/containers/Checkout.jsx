import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {
    const {state, removeFromCart} = useContext(AppContext);
    const {cart} = state;

    const handdleRemove = product => () => {
        removeFromCart(product);
    }

    const handleSumTotal = () => {
        const reducer = (acumulator, currentValue) => Number(acumulator) + Number(currentValue.price);
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return(
        <div className="Checkout">
            <div className="Checkout-content">
                
                {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos</h3>} 
                {cart.map( (item) => (
                <div className="Checkout-item" key={item.id}>
                    <div className="Checkout-element">
                        <h4>{item.title}</h4>
                        <span>${item.price}</span>
                    </div>
                    <button type='button'><i className="fa fa-trash-o" aria-hidden="true" onClick={handdleRemove(item)}></i></button>
                </div>
                ))}
            </div>
            {cart.length > 0 && (
            <div className="Checkout-sidebar">
                <h3>Precio Total: ${handleSumTotal()}</h3>
                <Link to="/checkout/information">
                    <button type='button'>Continuar pedido</button>
                </Link>
                
            </div>
            )}
        </div>
    )
}

export default Checkout;