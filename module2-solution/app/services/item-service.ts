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
  getItems(): Array<Item> {
    return items.map(p => new Item(p.name, p.quantity));
  }
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
