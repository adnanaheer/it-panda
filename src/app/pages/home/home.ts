import { Component, } from '@angular/core';
import { Testimonial } from '../../shared/testimonial/testimonial';
import { Form } from '../../shared/form/form';
import { Topbutton } from '../../shared/topbutton/topbutton';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Testimonial,Topbutton,RouterLink,Form],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home  {

}