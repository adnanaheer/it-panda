import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Form } from '../../../shared/form/form';
import { Topbutton } from '../../../shared/topbutton/topbutton';


@Component({
  selector: 'app-ui-ux',
  imports: [RouterLink, Form, Topbutton],
  templateUrl: './ui-ux.html',
  styleUrl: './ui-ux.css',
})
export class UiUx {

}
