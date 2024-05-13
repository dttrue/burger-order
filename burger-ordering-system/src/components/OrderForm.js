import React, { useState } from 'react';

function OrderForm({ addOrder }) {
    const [burgerType, setBurgerType] = useState('');
    const [customizations, setCustomizations] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addOrder(burgerType, { customizations });
        setBurgerType('');
        setCustomizations('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="mb-3">
                <label htmlFor="burgerType" className="form-label">Burger Type</label>
                <input
                    type="text"
                    className="form-control"
                    id="burgerType"
                    value={burgerType}
                    onChange={(e) => setBurgerType(e.target.value)}
                    placeholder="Enter burger type"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="customizations" className="form-label">Customizations</label>
                <input
                    type="text"
                    className="form-control"
                    id="customizations"
                    value={customizations}
                    onChange={(e) => setCustomizations(e.target.value)}
                    placeholder="Enter any customizations"
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Order</button>
        </form>
    );
}

export default OrderForm;