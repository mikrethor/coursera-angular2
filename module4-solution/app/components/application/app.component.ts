import { Component, Output, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { MenuSearchService, MenuItem } from '../../services/menu-search-service';
import { Observable } from 'rxjs/Rx';
import { CategoriesComponent } from '../../components/categories/categories.component';

@Component({
    selector: 'restaurant-application',
    templateUrl: `app/components/application/app.html`,
})
export class NarrowItDownComponent {

    constructor(private menuSearchService: MenuSearchService, private router: Router, private route: ActivatedRoute,) {
        //  this.router.navigate([categories], { relativeTo: this.route });
    }
    public getMatchedMenuItems(searchTerm: string) {
        return this.menuSearchService.getMatchedMenuItems(searchTerm);
    }


}