import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css'],
})
export class CandidatureComponent {
  constructor(private router: Router) {}

  goToListeCandidatures() {
    this.router.navigate(['/liste-candidatures']);
  }

  goToEditCandidature() {
    this.router.navigate(['/edit-candidature']);
  }
}
