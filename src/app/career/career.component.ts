import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      education: ['', Validators.required],
      resume: [null, Validators.required]
    });
  }

  //services
  services = [
    { image: '../../assets/Home/homeimg1.jpg', caption: 'Skill Development', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam laudantium, aliquid error ullam quaerat laborum odio sed explicabo deleniti.' },
    { image: '../../assets/foodSlider/slide1.jpg', caption: 'Mentorship Programs', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam laudantium, aliquid error ullam quaerat laborum odio sed explicabo deleniti.' },
    { image: '../../assets/foodSlider/slide3.jpg', caption: 'Industry Exposure', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam laudantium, aliquid error ullam quaerat laborum odio sed explicabo deleniti.' },
    { image: '../../assets/Home/homeimg1.jpg', caption: 'Technical Training', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam laudantium, aliquid error ullam quaerat laborum odio sed explicabo deleniti.' },
    { image: '../../assets/foodSlider/slide1.jpg', caption: 'Collaboration with Educational Institutions' , content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam laudantium, aliquid error ullam quaerat laborum odio sed explicabo deleniti.' },
  ];

  onSubmit(): void {
    console.log('Form submitted:', this.form.value);
  }
}

