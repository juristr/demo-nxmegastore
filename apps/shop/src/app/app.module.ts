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
          import('checkout-remote/Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: 'myaccount',
        loadChildren: () =>
          import('myaccount-remote/Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('products-remote/Module').then((m) => m.RemoteEntryModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
