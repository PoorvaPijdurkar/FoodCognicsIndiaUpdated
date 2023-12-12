import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent {

  gallary: any[] = [
    {
      imageUrl: 'assets/portfolio/img1.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img2.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img3.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img4.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img5.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img6.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img9.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img10.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img8.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img11.jpg',
    },
    // {
    //   imageUrl: 'assets/portfolio/img7.jpg',
    // },
    {
      imageUrl: 'assets/portfolio/img12.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img13.jpg',
    },
  ];
}

