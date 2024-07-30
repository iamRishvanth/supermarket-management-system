"use strict";
class Inventory {
    constructor(id, products) {
        this.id = id;
        this.products = products;
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId);
    }
    updateName(productId, name) {
        this.products = this.products.map(product => {
            if (product.id === productId) {
                product.name = name;
            }
            return product;
        });
    }
    updatePrice(productId, price) {
        this.products = this.products.map(product => {
            if (product.id === productId) {
                product.price = price;
            }
            return product;
        });
    }
    updateStock(productId, stock) {
        this.products = this.products.map(product => {
            if (product.id === productId) {
                product.stock = stock;
            }
            return product;
        });
    }
    updateDiscount(productId, discount) {
        this.products = this.products.map(product => {
            if (product.id === productId) {
                product.discount = discount;
            }
            return product;
        });
    }
    getStock(productId) {
        const product = this.products.find(product => product.id === productId);
        return product ? product.stock : 0;
    }
}
//# sourceMappingURL=inventory.js.map