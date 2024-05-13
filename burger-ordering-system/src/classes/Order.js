

class Order {
    constructor(OrderID, burerType, customizations) {
        this.OrderID = OrderID
        this.burgerType = burerType
        this.customizations = customizations
       
    }

    getOrderDetails() {
        return `OrderID: ${this.OrderID}, burgerType: ${this.burgerType}, customizations: ${JSON.stringify(this.customizations)}`
    }

}

export default Order
