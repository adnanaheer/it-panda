import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('itpanda');

ngOnInit(): void {
    AOS.init({
      once: false,  
    });
  }

  ngAfterViewInit(): void {
    AOS.refresh();  
  }
}
