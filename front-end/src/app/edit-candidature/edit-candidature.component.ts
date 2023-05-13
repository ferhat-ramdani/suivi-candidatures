import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-candidature',
  templateUrl: './edit-candidature.component.html',
  styleUrls: ['./edit-candidature.component.css'],
})
export class EditCandidatureComponent {
  constructor(private router: Router) {}

  saveCandidature() {
    this.router.navigate(['/candidature']);
  }

  cancelCandidature() {
    this.router.navigate(['/candidature']);
  }
  deleteCandidature() {
    this.router.navigate(['/liste-candidatures']);
  }
}
