import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams, Jsonp  } from '@angular/http';
import {ConstantsService} from './constants-service';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class MenuSearchService {
    menuItems:MenuItem[]=[];
     // Resolve HTTP using the constructor
     constructor (private http: Http,private jsonp: Jsonp, private constantService:ConstantsService) {
     }

     // Fetch all existing comments
     getMenuItemsJson() : Observable<MenuItem[]> {
           return this.http.get(this.constantService.API_ENDPOINT+"/menu_items.json")
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json()['menu_items'])
                         //...errors if any
                         
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
         
     }

     getAllMenuItems() : MenuItem[]{
     //   console.log("getAllMenuItems");
        
        this.getMenuItemsJson().subscribe((data) => {
            this.menuItems=[];
               for(let menu of data){
                   // console.log(menu.short_name);
                    this.menuItems.push(new MenuItem(
                        menu.id,
                        menu.short_name,
                        menu.name,
                        menu.description,
                        menu.price_small,
                        menu.price_large,
                        menu.small_portion_name,
                        menu.large_portion_name));
               } 
               
           });
           //console.log("getAllMenuItems : "+this.menuItems);
           return this.menuItems;
     }

     getMatchedMenuItems(searchTerm:string){
         console.log("getMatchedMenuItems");
        var allItems:MenuItem[]=this.getAllMenuItems();
      //  console.log("getMatchedMenuItems all "+allItems);
        var foundItems:MenuItem[]=[];
      //  console.log("getMatchedMenuItems all "+allItems.length);
        for(let menuItem of allItems){
          //  console.log("for in");
             if(menuItem.description.toLowerCase().indexOf(searchTerm) !== -1){
               // console.log("found");
                foundItems.push(menuItem);
                
             }   else{
            //     console.log("not found");
             }

                    
        } 
       // console.log("for out");
        return foundItems;
               
           

     }
}
export class MenuItem {
    constructor(
        public id: number, 
        public short_name: string, 
        public name: string,
        public description: string, 
        public price_small: string, 
        public price_large:string,
        public small_portion_name: string, 
        public large_portion_name:string
        ){}
}