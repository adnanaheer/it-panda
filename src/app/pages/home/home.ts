import { Component, } from '@angular/core';
import { Testimonial } from '../../shared/testimonial/testimonial';
import { Form } from '../../shared/form/form';
@Component({
  selector: 'app-home',
  imports: [Testimonial, Form],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home  {

}