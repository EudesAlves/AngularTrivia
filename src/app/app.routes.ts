import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { Test1Component } from './test1/test1.component';

export const routes: Routes = [
    { path : '', component : AppComponent },
    { path : 'menu', component : MenuComponent },
    { path : 'test1', component : Test1Component }
];
