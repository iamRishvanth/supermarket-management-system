class BillItem{
    productId: number;
    quantity: number;
    constructor(productId: number, quantity: number){
        this.productId = productId;
        this.quantity = quantity;
    }
    // getItemTotal(): number {
    //     return this.quantity * Product.getProductById(this.productId).getPriceWithDiscount();
    // }
}