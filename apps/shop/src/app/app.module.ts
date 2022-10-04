import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'checkout',
        loadChildren: () =>
          import('@nxmegastore/checkout').then((m) => m.CheckoutModule),
      },
      {
        path: 'myaccount',
        loadChildren: () =>
          import('@nxmegastore/myaccount').then((m) => m.MyaccountModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('@nxmegastore/products').then((m) => m.ProductsModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
