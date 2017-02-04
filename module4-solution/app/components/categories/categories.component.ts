import { Component, Input, Output, AfterViewInit, ViewChild, ChangeDetectionStrategy, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MenuSearchService, MenuItem, Category } from '../../services/menu-search-service';
import { Observable } from 'rxjs/Rx';
import { NarrowItDownComponent } from '../../components/application/app.component';

@Component({
    selector: 'categories',
    templateUrl: `app/components/categories/categories.html`,
})
export class CategoriesComponent {
    private category: Category;
    private items: Category[];
    constructor(private menuSearchService: MenuSearchService) {
        this.callService();
    }


    public callService() {
        this.items = [];
        this.menuSearchService.getAllCategories()
            .subscribe(

            (category) => {
                this.items.push(new Category(
                    category.id,
                    category.short_name,
                    category.name,
                    category.special_instructions,
                    category.url));
            }

            ,
            function (error) { console.log("Error happened" + error) },
            function () { console.log("the subscription is completed") }
            );
    }

    pickCategory(index: number) {
        this.category=this.items[index];
    }





}