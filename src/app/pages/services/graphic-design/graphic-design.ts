import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Form } from '../../../shared/form/form';
import { Topbutton } from '../../../shared/topbutton/topbutton';

@Component({
  selector: 'app-graphic-design',
  imports: [RouterLink, Form,Topbutton],
  templateUrl: './graphic-design.html',
  styleUrl: './graphic-design.css',
})
export class GraphicDesign {

}
