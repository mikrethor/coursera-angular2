import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NarrowItDownComponent }  from './components/application/app.component';
import { FoundItemsComponent }  from './components/founditems/founditems.component';
import { MenuSearchService } from "./services/menu-search-service";
import { ConstantsService } from "./services/constants-service";
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
    imports:      [ BrowserModule, FormsModule,  HttpModule, JsonpModule],
    providers:    [ MenuSearchService,ConstantsService],
    declarations: [ NarrowItDownComponent,FoundItemsComponent ],
    bootstrap:    [ NarrowItDownComponent,FoundItemsComponent ],
    
})
export class AppModule { }
