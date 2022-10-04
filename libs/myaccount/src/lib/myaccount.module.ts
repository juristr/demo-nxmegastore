import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@nxmegastore/auth';
import { UiModule } from '@nxmegastore/ui';

@Component({
  selector: 'nxmegastore-myaccount-page',
  standalone: true,
  imports: [CommonModule],
  template: `<p>myaccount-page works!</p>`,
})
export class MyAccountPageComponent {}

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    UiModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: MyAccountPageComponent },
    ]),
  ],
})
export class MyaccountModule {}
