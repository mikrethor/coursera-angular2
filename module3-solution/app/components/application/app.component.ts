import { Component, Output, OnInit, Input } from '@angular/core';
import { MenuSearchService, MenuItem } from '../../services/menu-search-service';
import { Observable } from 'rxjs/Rx';
import { FoundItemsComponent } from '../../components/founditems/founditems.component';

@Component({
    selector: 'narrow-application',
    templateUrl: `app/components/application/app.html`,
})
export class NarrowItDownComponent implements OnInit {
    @Output() menuItems: MenuItem[];
    @Input() searchTerm: string = "";
    constructor(private menuSearchService: MenuSearchService) {
    }
    public getMatchedMenuItems(searchTerm: string) {
        return this.menuSearchService.getMatchedMenuItems(searchTerm);
    }

    public narrowItDown() {
        console.log("searchTerm:" + this.searchTerm)
        this.menuItems = [];
        this.callService();
    }

    public remove(index: number) {
        console.log("index: " + index)
        this.menuItems.splice(index, 1);
    }

    public callService() {
        this.menuItems = [];
        this.menuSearchService.getMatchedMenuItems(this.searchTerm)
            .subscribe(

            (menu_item) => {
                //   console.log(menu_item);
                this.menuItems.push(new MenuItem(
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

    ngOnInit() {
        this.callService();
    }


}