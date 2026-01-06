import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Form } from '../../../shared/form/form';
import { Topbutton } from '../../../shared/topbutton/topbutton';

@Component({
  selector: 'app-wordpress',
  imports: [RouterLink,Form, Topbutton],
  templateUrl: './wordpress.html',
  styleUrl: './wordpress.css',
})
export class Wordpress {

}
