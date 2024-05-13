import Queue from './Queue';
import Order from './Order';

class BurgerOrderingSystem {
  constructor() {
    this.orderQueue = new Queue();
    this.currentOrderID = 1;
  }

  addOrder(burgerType, customizations) {
    const newOrder = new Order(this.currentOrderID, burgerType, customizations);
    this.orderQueue.enqueue(newOrder);
    this.currentOrderID++; 
  }

  completeOrder() {
    return this.orderQueue.dequeue();
  }

  viewCurrentOrders() {
    return this.orderQueue.items.map(order => order.getOrderDetails());
  }
}

export default BurgerOrderingSystem;

