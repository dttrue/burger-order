import React, { useState } from 'react';
import OrderForm from './components/OrderForm';
import OrderQueue from './components/OrderQueue';
import BurgerOrderingSystem from './classes/BurgerOrderingSystem';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is included

function App() {
    const [system, setSystem] = useState(new BurgerOrderingSystem());
    const [orders, setOrders] = useState([]);

    const addOrder = (burgerType, customizations) => {
        system.addOrder(burgerType, customizations);
        setOrders(system.viewCurrentOrders());  // Update the UI
    };

    const completeOrder = () => {
        system.completeOrder();
        setOrders(system.viewCurrentOrders());  // Update the UI after completing an order
    };

    return (
        <div className="container mt-5">
            <h1>Burger Ordering System</h1>
            <OrderForm addOrder={addOrder} />
            <OrderQueue orders={orders} completeOrder={completeOrder} />
        </div>
    );
}

export default App;





