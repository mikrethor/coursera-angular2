import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MenuSearchService } from "./services/menu-search-service";
import { ConstantsService } from "./services/constants-service";
import { HttpModule, JsonpModule } from '@angular/http';
import { ItemsComponent }  from './components/founditems/items.component';
import { NarrowItDownComponent }  from './components/application/app.component';


@NgModule({
    imports:      [ BrowserModule, FormsModule,  HttpModule, JsonpModule],
    providers:    [ MenuSearchService,ConstantsService],
    declarations: [ NarrowItDownComponent,ItemsComponent ],
    bootstrap:    [ NarrowItDownComponent,ItemsComponent ],
    
})
export class AppModule { }
