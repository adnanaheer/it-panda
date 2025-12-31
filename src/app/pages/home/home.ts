import { Component, } from '@angular/core';
import { Testimonial } from '../../shared/testimonial/testimonial';

@Component({
  selector: 'app-home',
  imports: [Testimonial],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home  {

}