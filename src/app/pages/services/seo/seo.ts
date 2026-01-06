import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Form } from '../../../shared/form/form';
import { Topbutton } from '../../../shared/topbutton/topbutton';

@Component({
  selector: 'app-seo',
  imports: [RouterLink, Form, Topbutton],
  templateUrl: './seo.html',
  styleUrl: './seo.css',
})
export class Seo {

}
