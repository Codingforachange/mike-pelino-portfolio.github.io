import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  scrollToProjects() {
    const element = document.getElementById('projects-section');
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start' });
    }
  }
}
