import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
    #cartItems = []
    
    static #allCarts = []
    constructor() {
        this.id = getId()
        ShoppingCart.#allCarts.push(this)
    }
    createItem(name, price) {
        const createdItem = new CartItem(name, price)
        this.#cartItems.push(createdItem)
        return createdItem
    }
    getItems() {
        return [...this.#cartItems]
    }
    removeItem(id) {
        this.#cartItems.splice(this.#cartItems.findIndex((item) => item.id === id), 1)
    }
    getTotal() {
        const sum = this.#cartItems.reduce((a, c) => a + c.price, 0)
        return sum
    }
    static listAll() {
        return [...ShoppingCart.#allCarts]
    }
    static findBy(id) {
        const cart = ShoppingCart.#allCarts.filter((cart) => cart.id === id)
        return cart[0]
    }
}

export default ShoppingCart;