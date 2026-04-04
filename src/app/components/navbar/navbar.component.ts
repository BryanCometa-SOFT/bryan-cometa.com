import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  scrolled = false;
  scrollProgress = 0;

  constructor(private router: Router) {}

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollTop = window.scrollY;
    this.scrolled = scrollTop > 60;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  }

  rediret(url: String) {
    this.router.navigate([url]);
  }
}
