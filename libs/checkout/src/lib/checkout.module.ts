import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@nxmegastore/auth';
import { UiModule } from '@nxmegastore/ui';

@Component({
  selector: 'nxmegastore-checkout-page',
  standalone: true,
  imports: [CommonModule],
  template: `<p>checkout-page works!</p>`,
})
export class CheckoutPageComponent {}

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    UiModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: CheckoutPageComponent },
    ]),
  ],
})
export class CheckoutModule {}
