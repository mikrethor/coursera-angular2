import {Component,Output,OnInit} from '@angular/core';
import {MenuSearchService,MenuItem} from '../../services/menu-search-service';
import {Observable} from 'rxjs/Rx';
import { CategoriesComponent }  from '../../components/categories/categories.component';

@Component({
    selector: 'narrow-application',
    templateUrl: `app/components/application/app.html`,
})
export class NarrowItDownComponent {

    constructor(private menuSearchService: MenuSearchService) { 
    }
    public getMatchedMenuItems(searchTerm:string){
       return this.menuSearchService.getMatchedMenuItems(searchTerm);  
    }

    
}