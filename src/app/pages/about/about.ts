import { Component } from '@angular/core';
import { Testimonial } from '../../shared/testimonial/testimonial';
import { RouterLink } from '@angular/router';
import { Topbutton } from '../../shared/topbutton/topbutton';

@Component({
  selector: 'app-about',
  imports: [Testimonial, RouterLink, Topbutton],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
