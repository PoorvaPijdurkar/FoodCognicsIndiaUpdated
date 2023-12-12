import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutKnowmoreComponent } from './about-knowmore.component';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'about',
        component: AboutKnowmoreComponent,
      },
    ]),
  ],
})
export class AboutusModule {}
