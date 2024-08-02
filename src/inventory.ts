class Inventory{
    products: Product[];
    constructor(products: Product[]){
        this.products = products;
    }

    addProduct(product: Product){
        this.products.push(product);
    }

    removeProduct(productId: number){
        this.products = this.products.filter(product => product.id!== productId);
    }

    updateName(productId: number, name: string){
        this.products = this.products.map(product => {
            if(product.id === productId){
                product.name = name;
            }
            return product;
        });
    }

    updatePrice(productId: number, price: number){
        this.products = this.products.map(product => {
            if(product.id === productId){
                product.price = price;
            }
            return product;
        });
    }

    updateStock(productId: number, stock: number){
        this.products = this.products.map(product => {
            if(product.id === productId){
                product.stock = stock;
            }
            return product;
        });
    }

    updateDiscount(productId: number, discount: number){
        this.products = this.products.map(product => {
            if(product.id === productId){
                product.discount = discount;
            }
            return product;
        });
    }

    getStock(productId: number): number {
        const product = this.products.find(product => product.id === productId);
        return product ? product.stock : 0;
    }

    getProductById(productId: number): Product | undefined {
        const product = this.products.find(product => product.id === productId);
        if (product) {
            return product;
        }
        return undefined;
    }

    hasProduct(productId: number): boolean {
        return this.products.some(product => product.id === productId);
    }
}

