export class Item {
  constructor(
    public name: string,
    public quantity: number
) {
  }

  

  public toString():string{
    return this.name+" "+this.quantity;
  }
}

export class ItemService {
  boughtList: Array<Item> = [];
  toBuyList: Array<Item> = this.getItems();
  getItems(): Array<Item> {
    return items.map(p => new Item(p.name, p.quantity));
  }

  getBoughtItems(): Array<Item> {
    return this.boughtList;
  }

  getToBuyItems(): Array<Item> {
    return this.toBuyList;
  }

  buyItem(index:number) {
    this.boughtList.push(this.toBuyList[index]);
    this.toBuyList.splice(index, 1);
  };
}

var items = [
  {
    "name": "cookies",
    "quantity": 10,
  },
  {
    "name": "coke",
    "quantity": 5,
  },
  {
    "name": "cake",
    "quantity": 2,
  },
  {
    "name": "cheese",
    "quantity": 3,
  },
  {
    "name": "ham",
    "quantity": 5,
  }
];
