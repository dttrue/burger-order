class Queue {
    constructor() {
        this.items = []
    }

    enqueue(item) {
        this.items.push(item)
    }

    dequeue() {
        if(this.items.length === 0) {
            return null
        }
        return this.items.shift()
    }

    peek() {
        return this.items.length > 0 ? this.items[0] : null
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    getSnapshot() {
        return [...this.items]
    }

    printQueue() {
        console.log(this.items)  
    }
}

    export default Queue
