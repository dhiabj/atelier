import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ListuserComponent } from './listuser/listuser.component';
import { FormsModule } from '@angular/forms';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceModule } from './invoice/invoice.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ListuserComponent,
    ListProduitsComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ListuserComponent,
    ListProduitsComponent,
    InvoiceListComponent,
  ],
})
export class AppModule {}
