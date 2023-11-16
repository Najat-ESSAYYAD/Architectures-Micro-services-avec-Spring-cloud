import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {ProductItemComponent} from "./productItem/productItem.component";
import {BillComponent} from "./bill/bill.component";

const routes: Routes = [
  {
    path : "products", component : ProductsComponent
  },
  {
    path : "customers", component : CustomersComponent
  },
  {
    path : "productItem/:customerId", component : ProductItemComponent
  },
  {
    path : "bill/:billId", component : BillComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
