import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nxmegastore-products-page',
  standalone: true,
  imports: [CommonModule],
  template: `<p>products-page works!</p>`,
})
export class ProductsPageComponent {}

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ProductsPageComponent },
    ]),
  ],
})
export class ProductsModule {}
