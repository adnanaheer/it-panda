import { Component } from '@angular/core';
import { RouterLink,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

mobileOpen = false;
  
}