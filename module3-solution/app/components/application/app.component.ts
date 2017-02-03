import {Component,Output} from '@angular/core';
import {MenuSearchService,MenuItem} from '../../services/menu-search-service';
import {Observable} from 'rxjs/Rx';
import { FoundItemsComponent }  from '../../components/founditems/founditems.component';

@Component({
    selector: 'narrow-application',
    templateUrl: `app/components/application/app.html`,
    //directives: [FoundItemsComponent]
})
export class NarrowItDownComponent {
   
   
   @Output() menuItems:MenuItem[]=[];
   @Output() test="tyiti";
   searchTerm:string="";
    constructor(private menuSearchService: MenuSearchService) { 
        this.menuItems=[];
        this.menuItems=this.menuSearchService.getAllMenuItems();
   // console.log("constructeur"+);
    // console.log(this.menuItems);
    }
    public getMatchedMenuItems(searchTerm:string){
       return this.menuSearchService.getMatchedMenuItems(searchTerm);  
    }

    public narrowItDown(){
       console.log("narrowItDown"+this.searchTerm);
        this.menuItems= this.getMatchedMenuItems(this.searchTerm);
         console.log("narrowed");
          console.log("narrowed"+this.menuItems);
          console.log("narrowed"+this.menuItems.length);
          this.test=this.test+"1";
    }
}