import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  servicesOpen = false;
  marketingOpen = false;

  toggleServices() {
    this.servicesOpen = !this.servicesOpen;
  }

  
}