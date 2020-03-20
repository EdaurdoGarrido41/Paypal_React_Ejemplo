import './App.css';
import React from 'react';
import { PayPalButton } from "react-paypal-button";

function App() {
  const paypalOptions = {
    clientId: "AcgfSWjvFifar4P_3alUSPkhf0Z5g21gs1ieaFCF0HoFojz5GnYxYFE5L-uIH4tZEqWffcTzN_jnqf6l",
    intent: 'capture',
    currency: 'MXN',
    commit: true
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'pill',
    color: 'silver'
  }

  return (
    <div className="App">
      <h1>Prueba Paypal</h1>
      <PayPalButton 
        paypalOptions={paypalOptions}
        buttonStyles={buttonStyles}
        onPaymentSuccess={data => console.log('onPaymentSuccess', data)}
        onPaymentError={msg => console.log('payment error', msg)}
        onPaymentCancel={data => console.log(data)}
        amount={0.01}
        />
    </div>
  );
}

export default App;
