import {Component,Output,OnInit} from '@angular/core';
import {MenuSearchService,MenuItem} from '../../services/menu-search-service';
import {Observable} from 'rxjs/Rx';
import { FoundItemsComponent }  from '../../components/founditems/founditems.component';

@Component({
    selector: 'narrow-application',
    templateUrl: `app/components/application/app.html`,
})
export class NarrowItDownComponent {
   @Output() menuItems:MenuItem[];
   searchTerm:string="";
    constructor(private menuSearchService: MenuSearchService) { 
     }
    public getMatchedMenuItems(searchTerm:string){
       return this.menuSearchService.getMatchedMenuItems(searchTerm);  
    }

    public narrowItDown(){
        console.log("searchTerm:"+this.searchTerm)
        this.menuItems=this.getMatchedMenuItems(this.searchTerm);
    }

     public remove(index:number){
        console.log("index: "+index)
       this.menuItems.splice(index,1);
    }


    
}