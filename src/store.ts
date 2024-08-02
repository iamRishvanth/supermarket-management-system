class Store{
    inventory: Inventory;
    bills: Bill[];
    static billCount = 0;

    constructor(inventory: Inventory, bills: Bill[]){
        this.inventory = inventory;
        this.bills = bills;
    }

    static createBill(itemStrings: string[]){
        const billItems = itemStrings.map(itemString => {
            const [productIdStr, quantityStr] = itemString.split("|");
            const productId = Number.parseInt(productIdStr);
            const quantity = Number.parseInt(quantityStr);
            return new BillItem(productId, quantity);
        });
        return new Bill(Store.billCount, billItems);
    }

    updateInventory(productId: number, quantity: number){
        const product = this.inventory.products.find(product => product.id === productId);
        if (product) {
            const newStock = product.stock + quantity;
            this.inventory.updateStock(productId, newStock);
        }
    }


    addSale(itemStrings: string[]){
        const bill = Store.createBill(itemStrings);
        this.bills.push(bill);
        Store.billCount++;
        for (const billItem of bill.billItems) {
            this.updateInventory(billItem.productId, -billItem.quantity);
        }
    }
}