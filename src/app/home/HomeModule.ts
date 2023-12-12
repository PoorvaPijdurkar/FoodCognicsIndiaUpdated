import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { TestPageComponent } from '../test-page/test-page.component';

@NgModule({
    declarations: [HomeComponent, TestPageComponent],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      CarouselModule.forRoot(),
      ButtonsModule.forRoot(),
      RouterModule.forChild([
        {
          path: '',
          component: HomeComponent,
        },
      ]),
    ],
  })
export class HomeModule {}
