import {Component} from '@angular/core';
import {Item, ItemService} from '../../services/item-service';

@Component({
    selector: 'shopping-list-application',
    templateUrl: `app/components/application/app.html`
})
export class ShoppingListApplicationComponent {
   
    toBuyList: Array<Item> = [];
    boughtList: Array<Item> = [];
   
    constructor(private itemService: ItemService) { // <2>
        this.toBuyList = this.itemService.getToBuyItems();
        this.boughtList = this.itemService.getBoughtItems();
    }

    public buyItem(index:number) {
        this.itemService.buyItem(index);
    }
}