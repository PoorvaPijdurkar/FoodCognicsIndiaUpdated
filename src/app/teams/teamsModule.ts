import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamsComponent } from './teams.component';


@NgModule({
  declarations: [
    TeamsComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'teams',
        component: TeamsComponent,
      },
    ]),
  ],
})
export class TeamsModule {}
