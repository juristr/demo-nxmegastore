import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@nxmegastore/auth';
import { UiModule } from '@nxmegastore/ui';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    UiModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class MyaccountModule {}
