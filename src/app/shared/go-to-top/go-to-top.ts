import { Component, OnInit ,HostListener } from '@angular/core';

@Component({
  selector: 'app-go-to-top',
   standalone: true,
  templateUrl: './go-to-top.html',
  styleUrl: './go-to-top.css',
})

export class GoToTop implements OnInit {
  ngOnInit(): void { }
  isShow: boolean = false;
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
