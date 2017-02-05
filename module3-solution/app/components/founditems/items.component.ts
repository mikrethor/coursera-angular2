import { Component, Input, Output } from '@angular/core';
import { MenuItem, MenuSearchService } from '../../services/menu-search-service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'items',
    templateUrl: 'app/components/founditems/items.html',
})
export class ItemsComponent {
    @Input() private items: MenuItem[];

    constructor() { }

    remove() {
        // console.log('remove' + this.position);
    }

    ngOnChanges(...args: any[]) {
        console.log('changing', args);
        //console.log(this.items);
        // console.log("test" + this.test);
    }

}