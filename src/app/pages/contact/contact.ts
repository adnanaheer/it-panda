import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Topbutton } from '../../shared/topbutton/topbutton';

@Component({
  selector: 'app-contact',
  imports: [RouterLink,Topbutton],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
