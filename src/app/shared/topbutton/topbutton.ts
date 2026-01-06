import { Component, OnInit ,HostListener } from '@angular/core';

@Component({
  selector: 'app-topbutton',
  imports: [],
  templateUrl: './topbutton.html',
  styleUrl: './topbutton.css',
})
export class Topbutton  implements OnInit {
  ngOnInit(): void { }
  isShow: boolean= false;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 10, 
      behavior: 'smooth' 
    });
  }
}
