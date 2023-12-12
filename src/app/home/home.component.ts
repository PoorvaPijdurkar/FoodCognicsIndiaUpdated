import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private router: Router) {}

  navigateToFoodCategory(category: string): void {
    this.router.navigate(['/food-categories', category]);
  }


  ngAfterViewInit(): void {
    AOS.init(
      {
        offset: 120,
        duration: 700,
      }
    );
    console.log("animation");
  }
  //services
  services = [
  {image: '../../assets/Home/homeimg1.jpg',caption:'Turnkey project setup', content:'We handle every aspect of factory design under one roof, encompassing Process, Building and Civil, Utilities, Electrical and Automation, Quality Assurance, and more.Our designs adhere to global standards for food safety and hygienic engineering.From the ground up, we construct new factories to the highest standards, ensuring that your food facility is not just built, but built to be a source of pride.' },
  { image: '../../assets/foodSlider/slide1.jpg', caption:'Detailed Project Report', content: 'A Detailed Project Report (DPR) for a food business typically includes comprehensive information about the proposed venture. Our hand on experienced on preparation of report with expertise, financial experts ,engg team, data analyst leads to success' },
  { image: '../../assets/foodSlider/slide3.jpg', caption:'New Product Development', content: 'Core expertise with the product development as well as standardization according to the FSSAI Norms we developed innovative products bt nurturing the idea in mind of client. 20 + years experienced food technologist team continuously upgrade their knowledge and form products that have match the expectation of client.' },
  ];

  //home
  slides = [
    { image: '../../assets/Home-Section/home1.jpeg',  },
    { image: '../../assets/Home-Section/home2.jpeg', },
    { image: '../../assets/Home-Section/home3.jpeg', },
    { image: '../../assets/Home-Section/home5.jpeg', },
  ];

  //sectors
  slides1: any[] = [
    {
      title: 'Fruits-&-Vegetable-Processing',

      imageUrl: '../../assets/foodSlider/1.png',

    },
    {
      title: 'Cereal-&-Cereal-Products',

      imageUrl: '../../assets/foodSlider/2.png',

    },
    {
      title: 'Functional-Food',

      imageUrl: '../../assets/foodSlider/3.png',

    },
    {
      title: 'Confectionary-Products',

      imageUrl: '../../assets/foodSlider/4.png',

    },
  ]
  slides2: any[] = [
    {
      title: 'Meat-&-Meat-Products',

      imageUrl: '../../assets/foodSlider/5.png',

    },
    {
      title: 'Milk-&-Other-Dairy-Products',

      imageUrl: '../../assets/foodSlider/6.png',

    },
    {
      title: 'Instant-Premixes',

      imageUrl: '../../assets/foodSlider/7.jpg',

    },
    {
      title: 'Frozen-Products',

      imageUrl: '../../assets/foodSlider/8.png',

    },
  ]
  slides3: any[] = [
    {
      title: 'Packaged-drinking-water',

      imageUrl: '../../assets/foodSlider/9.png',

    },
    {
      title: 'Spices-&-Condiments',

      imageUrl: '../../assets/foodSlider/10.png',

    },
    {
      title: 'Bakery-products',

      imageUrl: '../../assets/foodSlider/11.png',

    },
    {
      title: 'Sugar-&-other-sweeteners',

      imageUrl: '../../assets/foodSlider/12.png',

    },
  ]
  //
  items1: any[] = [
    {
      imageUrl: '../../assets/clients/q.png',

    },
    {
      imageUrl: '../../assets/clients/b.png',
    },
    {
      imageUrl: '../../assets/clients/c.png',
    },
    {
      imageUrl: '../../assets/clients/d.png',
    },
    {
      imageUrl: '../../assets/clients/e.png',
    },
    {
      imageUrl: '../../assets/clients/f.jpg',
    },
  ]
  items2: any[] = [
    {
      imageUrl: '../../assets/clients/g.png',
    },
    {
      imageUrl: '../../assets/clients/h.png',
    },
    {
      imageUrl: '../../assets/clients/i.png',
    },
    {
      imageUrl: '../../assets/clients/j.png',
    },
    {
      imageUrl: '../../assets/clients/k.png',
    },
    {
      imageUrl: '../../assets/clients/l.png',

    },
  ]
  items3: any[] = [
    {
      imageUrl: '../../assets/clients/m.jpg',
    },
    {
      imageUrl: '../../assets/clients/p.png',

    },
    {
      imageUrl: '../../assets/clients/n.jpg',
    },
    {
      imageUrl: '../../assets/clients/o.png',
    },
    {
      imageUrl: '../../assets/clients/a.png',
    },
    {
      imageUrl: '../../assets/clients/r.png',
    },
  ]

}