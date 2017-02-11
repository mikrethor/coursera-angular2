import { Routes, RouterModule } from '@angular/router';
import { NarrowItDownComponent } from './application/app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
    { path: '', component: CategoriesComponent },
    {
        path: 'categories', component: CategoriesComponent,
        children: [
            { path: 'items', component: CategoriesComponent }
        ]
    }
];

export const routing = RouterModule.forRoot(routes);