import promptSync from 'prompt-sync';
class Main {
    constructor() {
        console.log("Hello World");
    }

    static main() {
        const store = new Store(new Inventory([]), []);
        const prompt = promptSync();
        console.log(`
            Welcome to AJ Supermarket Management System!
        `)
        while(true){
            const option = prompt(`
                Usage:
                * 'INVENTORY=>ProductId|ProductName|ProductPrice|ProductStock' to add or update a product
                * 'SALE=>ProductId|Quantity;ProductId|Quantity' to add a sale
                * 'STOCK=>ProductId' to get the stock of a product
                * 'q' to quit    
            `);
            if(option === "q"){
                break;
            }
            if(option.split("=>")[0] === "INVENTORY"){
                const details = option.split("=>")[1].split("|");
                const productId = Number.parseInt(details[0]);
                const productName = details[1];
                const quantity = Number.parseInt(details[2]);
                const productPrice = Number.parseFloat(details[3]);
                if(store.inventory.hasProduct(productId)){
                    store.inventory.updateName(productId, productName);
                    console.log("Product updated in inventory")
                }else{
                    store.inventory.addProduct(new Product(productId, productName, productPrice, quantity, 0));
                    console.log("Product added to inventory")
                }
            }else if(option.split("=>")[0] === "SALE"){
                const itemsString = option.split("=>")[1].split(";");
                store.addSale(itemsString)
            }else if(option.split("=>")[0] === "STOCK"){
                const productId = Number.parseInt(option.split("=>")[1]);
                const product = store.inventory.getProductById(productId);
                if (product) {
                    console.log(`Product ${product.name} has stock ${product.stock}`)
                } else {
                    console.log(`Product with ID ${productId} not found`)
                }
            }
        }
    }
}

Main.main();