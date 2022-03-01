import React, {useRef, useContext} from 'react';
import AppContext from '../context/AppContext';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/components/Information.css';

const Information = () => {
    const {state, AddToBuyer} = useContext(AppContext);
    const form = useRef(null);
    const navigate = useNavigate();
    const {cart} = state;

    const handdleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'depto': formData.get('depto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'zip' : formData.get('zip'),
            'phone' : formData.get('phone')

        }
        AddToBuyer(buyer)
        navigate('/checkout/payments')
    }
    return(
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Informacion de contacto</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type="text" placeholder="Nombre" name="name" />
                        <input type="text" placeholder="Correo" name="email" />
                        <input type="text" placeholder="Direccion" name="address" />
                        <input type="text" placeholder="Depto" name="depto" />
                        <input type="text" placeholder="Ciudad" name="city" />
                        <input type="text" placeholder="Pais" name="cuntry" />
                        <input type="text" placeholder="Region" name="state" />
                        <input type="text" placeholder="Zip code" name="zip" />
                        <input type="text" placeholder="Telefono" name="phone" />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        <Link to="/checkout">
                            Regresar
                        </Link>
                    </div>
                    <div className="Information-next">
                        <button type="button" onClick={handdleSubmit}>Pagar</button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                {cart.map( (item) => (
                <div className="Information-item" key={item.title}>
                    <div className="Information-element">
                        <h4>{item.title}</h4>
                        <span>${item.price}</span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Information;