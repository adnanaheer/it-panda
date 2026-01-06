import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Topbutton } from '../topbutton/topbutton';

@Component({
  selector: 'app-terms',
  imports: [RouterLink,Topbutton],
  templateUrl: './terms.html',
  styleUrl: './terms.css',
})
export class Terms {

}
