import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ShoppingComponent } from './shopping/shopping.component'; 

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  },
  {
    path: 'header',
    component: HeaderComponent,
    title: 'Test header'
  },
  {
    path: 'additem',
    component: AddItemComponent,
    title: 'Add item'
  },
  {
    path: 'shopping',
    component: ShoppingComponent,
    title: 'Shopping'
  }
];

export default routeConfig;
