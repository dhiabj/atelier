import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';

const routes: Routes = [
  {
    path: '',
    component: MainInvoiceComponent,
    children: [{ path: ':id/:active', component: InvoiceComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}
