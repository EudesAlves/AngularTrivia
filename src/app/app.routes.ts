import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    { path : '', component : AppComponent },
    { path : 'menu', component : MenuComponent }
];
