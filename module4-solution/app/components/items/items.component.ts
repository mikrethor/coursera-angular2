import { Component, Input, Output, AfterViewInit, ViewChild, ChangeDetectionStrategy, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MenuSearchService, MenuItem, Category } from '../../services/menu-search-service';
import { Observable } from 'rxjs/Rx';
import { NarrowItDownComponent } from '../../components/application/app.component';

@Component({
    selector: 'items',
    templateUrl: `app/components/items/items.html`,
})
export class ItemsComponent {

    private items: MenuItem[];
    @Input() private cat: Category;

    constructor(private menuSearchService: MenuSearchService) {

    }

    public getItemsForCategory(shortName: string) {
        this.items = [];
        this.menuSearchService.getItemsForCategory(shortName)
            .subscribe(

            (menu_item) => {
                this.items.push(new MenuItem(
                    menu_item.id,
                    menu_item.short_name,
                    menu_item.name,
                    menu_item.description,
                    menu_item.price_small,
                    menu_item.price_large,
                    menu_item.small_portion_name,
                    menu_item.large_portion_name));
            }

            ,
            function (error) { console.log("Error happened" + error) },
            function () { console.log("the subscription is completed") }
            );
    }

    ngOnChanges(...args: any[]) {
        if (this.cat != undefined) {
            this.getItemsForCategory(this.cat.short_name);
        }

    }



}