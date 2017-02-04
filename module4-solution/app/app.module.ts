import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NarrowItDownComponent }  from './components/application/app.component';
import { CategoriesComponent }  from './components/categories/categories.component';
import { ItemsComponent }  from './components/items/items.component';
import { MenuSearchService } from "./services/menu-search-service";
import { ConstantsService } from "./services/constants-service";
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
    imports:      [ BrowserModule, FormsModule,  HttpModule, JsonpModule],
    providers:    [ MenuSearchService,ConstantsService],
    declarations: [ NarrowItDownComponent,ItemsComponent,CategoriesComponent ],
    bootstrap:    [ NarrowItDownComponent,ItemsComponent,CategoriesComponent ],
    
})
export class AppModule { }
