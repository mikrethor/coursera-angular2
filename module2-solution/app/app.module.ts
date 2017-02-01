import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ShoppingListApplicationComponent }  from './components/application/app.component';
import {ItemService} from "./services/item-service";

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ ShoppingListApplicationComponent ],
    bootstrap:    [ ShoppingListApplicationComponent ],
    providers:    [ ItemService],
})
export class AppModule { }
