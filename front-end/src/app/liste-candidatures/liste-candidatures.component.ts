import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-candidatures',
  templateUrl: './liste-candidatures.component.html',
  styleUrls: ['./liste-candidatures.component.css'],
})
export class ListeCandidaturesComponent {
  constructor(private router: Router) {}

  goToCandidature() {
    this.router.navigate(['/candidature']);
  }
  addCandidature() {
    this.router.navigate(['/edit-candidature']);
  }
}
