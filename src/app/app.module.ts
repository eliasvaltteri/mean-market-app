import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

const appRoutes: Routes = [
  {
    path: 'items',
    component: ItemComponent,
    data: { title: 'Item list' }
  },
  {
    path: 'item-details/:id',
    component: ItemDetailComponent,
    data: { title: 'Item details' }
  },
  {
    path: 'item-add',
    component: ItemAddComponent,
    data: { title: 'Add item' }
  },
  {
    path: 'item-edit/:id',
    component: ItemEditComponent,
    data: { title: 'Edit item' }
  },
  { path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemDetailComponent,
    ItemAddComponent,
    ItemEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
