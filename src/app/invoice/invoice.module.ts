import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from '../invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice.component';
import { TestComponent } from '../test/test.component';

@NgModule({
  declarations: [
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent,
    TestComponent,
  ],
  imports: [CommonModule, InvoiceRoutingModule],
})
export class InvoiceModule {}
