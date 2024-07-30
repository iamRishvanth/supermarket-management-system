"use strict";
class Product {
    constructor(id, name, price, stock, discount) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.discount = discount;
    }
    getPriceWithDiscount() {
        return this.price - (this.price * this.discount);
    }
}
//# sourceMappingURL=products.js.map