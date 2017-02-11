import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy,APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NarrowItDownComponent } from './components/application/app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ItemsComponent } from './components/items/items.component';
import { MenuSearchService } from "./services/menu-search-service";
import { ConstantsService } from "./services/constants-service";
import { HttpModule, JsonpModule } from '@angular/http';
import {routing} from './components/app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, routing],
    providers: [MenuSearchService, ConstantsService, { provide: LocationStrategy, useClass: HashLocationStrategy },
    // { provide: APP_BASE_HREF, useValue: '/' }
    ],
    declarations: [NarrowItDownComponent, ItemsComponent, CategoriesComponent],
    bootstrap: [NarrowItDownComponent],

})
export class AppModule { }
