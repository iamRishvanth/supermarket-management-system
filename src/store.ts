class Store{
    id: number;
    inventory: Inventory;
    bills: Bill[];

    constructor(id: number, inventory: Inventory, bills: Bill[]){
        this.id = id;
        this.inventory = inventory;
        this.bills = bills;
    }

    addSale(billItems: BillItem[]){
        billItems.forEach(billItem => {
            
        const bill = new BillItem(this.id, billItems);
        this.bills.push(bill);
    }

    addBill(bill: Bill){
        this.bills.push(bill);
    }

    updateInventory(productId: number, quantity: number){
        const product = this.inventory.products.find(product => product.id === productId);
        if (product) {
            const newStock = product.stock + quantity;
            this.inventory.updateStock(productId, newStock);
        }
    }
}