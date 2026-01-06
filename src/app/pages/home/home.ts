import { Component, } from '@angular/core';
import { Testimonial } from '../../shared/testimonial/testimonial';
import { Form } from '../../shared/form/form';
import { Topbutton } from '../../shared/topbutton/topbutton';

@Component({
  selector: 'app-home',
  imports: [Testimonial,Form,Topbutton],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home  {

}