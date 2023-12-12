import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GallaryComponent } from '../gallary/gallary.component';

@NgModule({
  declarations: [
    GallaryComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'gallary',
        component: GallaryComponent,
      },

    ]),
  ],
})
export class GallaryModule {}
