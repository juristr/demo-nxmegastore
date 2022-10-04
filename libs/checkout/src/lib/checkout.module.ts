import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@nxmegastore/auth';
import { UiModule } from '@nxmegastore/ui';
import { MyaccountModule } from '@nxmegastore/myaccount';

@NgModule({
  imports: [
    CommonModule,
    MyaccountModule,
    AuthModule,
    UiModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class CheckoutModule {}
