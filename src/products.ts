class Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    discount: number;

    constructor(id: number, name: string, price: number, stock: number, discount: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.discount = discount;
    }

    getPriceWithDiscount(): number {
        return this.price - (this.price * this.discount);
    }



}