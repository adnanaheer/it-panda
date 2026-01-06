import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Topbutton } from '../../shared/topbutton/topbutton';

@Component({
  selector: 'app-career',
  imports: [RouterLink,Topbutton],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class Career {

}
