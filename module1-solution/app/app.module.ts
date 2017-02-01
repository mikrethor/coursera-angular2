import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { LunchApplicationComponent }  from './app.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ LunchApplicationComponent ],
    bootstrap:    [ LunchApplicationComponent ]
})
export class AppModule { }
