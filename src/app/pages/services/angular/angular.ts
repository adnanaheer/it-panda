import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Form } from '../../../shared/form/form';
import { Topbutton } from '../../../shared/topbutton/topbutton';

@Component({
  selector: 'app-angular',
  imports: [RouterLink, Form, Topbutton],
  templateUrl: './angular.html',
  styleUrl: './angular.css',
})
export class Angular {

}
