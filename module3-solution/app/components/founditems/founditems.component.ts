import {Component,Input,Output,AfterViewInit, ViewChild,ChangeDetectionStrategy,EventEmitter,ViewEncapsulation } from '@angular/core';
import {MenuSearchService,MenuItem} from '../../services/menu-search-service';
import {Observable} from 'rxjs/Rx';
import { NarrowItDownComponent }  from '../../components/application/app.component';

@Component({
    selector: 'found-items',
    templateUrl: `app/components/founditems/founditems.html`,
 })
export class FoundItemsComponent  {
   @Input('items') private  items:MenuItem[];
   @Input('position') private  position:number;

    constructor() { 
    }

    remove() {
      console.log('remove'+this.position);
    }

   ngOnChanges(...args: any[]) {
        console.log('changing', args);
        console.log(this.items);
    }

}