import {Component,Input,Output,AfterViewInit, ViewChild,ChangeDetectionStrategy,EventEmitter } from '@angular/core';
import {MenuSearchService,MenuItem} from '../../services/menu-search-service';
import {Observable} from 'rxjs/Rx';
import { NarrowItDownComponent }  from '../../components/application/app.component';

@Component({
    selector: 'found-items',
    templateUrl: `app/components/founditems/founditems.html`,
 })
export class FoundItemsComponent {
    @Input() menuItems:MenuItem[];
    @Input() test:string;


 //@Output() selectedItemChange: EventEmitter<MenuItem[]> = new EventEmitter<MenuItem[]>();

// @Input() set foundItems(foundItems: MenuItem[]) {
//     this.foundItems = foundItems;
//     this.selectedItemChange.emit(foundItems); 
// }

    constructor() { 
        console.log("foundItems"+this.menuItems);
        console.log("foundItems"+this.test);
    }

    public empty(){
       return true;  
    }
    
    ngOnInit() {
        console.log("init"+this.menuItems);
        console.log("foundItems"+this.test);
    }

    ngOnChanges(...args: any[]) {
        console.log('onChange fired');
        console.log('changing', args);
        console.log("foundItems ch"+this.menuItems);
        console.log(this.menuItems);
        console.log("foundItems ch"+this.test);

    }



// get selectedItem(): MenuItem[] {
//     return this.foundItems; 
// }
    
}