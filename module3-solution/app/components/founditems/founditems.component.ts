import {Component,Input,Output,AfterViewInit, ViewChild,ChangeDetectionStrategy,EventEmitter,ViewEncapsulation } from '@angular/core';
import {MenuSearchService,MenuItem} from '../../services/menu-search-service';
import {Observable} from 'rxjs/Rx';
import { NarrowItDownComponent }  from '../../components/application/app.component';

@Component({
    selector: 'found-items',
    templateUrl: `app/components/founditems/founditems.html`,
 })
export class FoundItemsComponent  {
   @Input('item') private  item:MenuItem;
   @Input('position') private  position:number;

    constructor() { 
    }

    // public empty(){
    //     if(this.foundedItems==undefined || this.foundedItems.length==0){
    //         console.log("empty"+true);
    //         return true;  
    //     }
    //     console.log("empty"+false);
    //   return false;
    // }

    //  ngOnChanges(...args: any[]) {
    //     console.log('changingChild', args);
    //     console.log(this.foundedItems);
    //     console.log('end changingChild', args);

    // }

    remove() {
      console.log('remove'+this.position);

        

     }

}