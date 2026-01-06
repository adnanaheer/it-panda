import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Form } from '../../../shared/form/form';
import { Topbutton } from '../../../shared/topbutton/topbutton';

@Component({
  selector: 'app-react',
  imports: [RouterLink, Form, Topbutton],
  templateUrl: './react.html',
  styleUrl: './react.css',
})
export class React {

}
