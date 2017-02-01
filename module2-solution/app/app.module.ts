import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ShoppingListApplicationComponent }  from './app.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ ShoppingListApplicationComponent ],
    bootstrap:    [ ShoppingListApplicationComponent ]
})
export class AppModule { }
