class Bill{
    id: number;
    billItems: BillItem[];

    constructor(id: number, billItems: BillItem[]){
        this.id = id;
        this.billItems = billItems;
    }
}