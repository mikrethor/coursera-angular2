import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams, Jsonp  } from '@angular/http';
import {ConstantsService} from './constants-service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class MenuSearchService {
    menuItems:Array<MenuItem>=[];
     // Resolve HTTP using the constructor
     constructor (private http: Http,private jsonp: Jsonp, private constantService:ConstantsService) {
     }

     // Fetch all existing comments
     getMenuItemsJson()  {

    return this.http.get(this.constantService.API_ENDPOINT+"/menu_items.json")
     
      // subscribe to output from this observable and bind
      // the output to the component when received

           
        //    .http.get(this.constantService.API_ENDPOINT+"/menu_items.json")
        //                 // ...and calling .json() on the response to return data
        //                  .map((res:Response) =>{ 
                             
                             
                             
                             
                             
                            
            //     var  items:MenuItem[]=[];
            //    for(let menu of res.json()['menu_items']){
            //        // console.log(menu.short_name);
            //         items.push(new MenuItem(
            //             menu.id,
            //             menu.short_name,
            //             menu.name,
            //             menu.description,
            //             menu.price_small,
            //             menu.price_large,
            //             menu.small_portion_name,
            //             menu.large_portion_name));
            //    } 
            //    return items;

                    
                
            // })
            //              //...errors if any
             
            //              .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
         
     }

// if(menuItem.description.toLowerCase().indexOf(searchTerm) !== -1){
               
           

     getMatchedMenuItems(searchTerm:string):MenuItem[]{
     //   console.log("getAllMenuItems");
       var  elements:MenuItem[]=[];
        this.http.get(this.constantService.API_ENDPOINT+"/menu_items.json")
        .flatMap((response) => response.json()['menu_items'])
        .filter((menu_item) => menu_item.description.toLowerCase().indexOf(searchTerm) !== -1)
      //   .map((menu_item) => {new MenuItem(
      //   menu_item.id,
      //   menu_item.short_name,
      //   menu_item.name,
      //   menu_item.description,
      //   menu_item.price_small,
      //   menu_item.price_large,
      //   menu_item.small_portion_name,
      //   menu_item.large_portion_name);
      // console.log("description"+menu_item.description);  
      // })
        .subscribe(

(menu_item) => {
         console.log(menu_item);
        elements.push( new MenuItem(
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
        function(error) { console.log("Error happened" + error)},
        function() { console.log("the subscription is completed")}
      );
       
console.log("el :"+elements);
      return   elements;

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