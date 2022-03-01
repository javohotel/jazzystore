import React from 'react';
import '../styles/components/Success.css';

const Success = () => {
    return(
        <div className="Success">
            <div className="Success-content">
                <h2>Gracias por tu compra</h2>
                <p>Tu pedido llegará en 3 dias a tu direccion</p>
                <div className="Success-map">
                    Google map
                </div>
            </div>
        </div>
    )
}

export default Success;