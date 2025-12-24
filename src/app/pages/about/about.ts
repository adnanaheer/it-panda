import { Component } from '@angular/core';
import { Testimonial } from '../../shared/testimonial/testimonial';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [Testimonial, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
