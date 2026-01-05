import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Form } from '../../../shared/form/form';

@Component({
  selector: 'app-wordpress',
  imports: [RouterLink,Form],
  templateUrl: './wordpress.html',
  styleUrl: './wordpress.css',
})
export class Wordpress {

}
