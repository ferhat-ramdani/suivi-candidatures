import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatureService } from '../candidature.service';
import { Candidature } from '../candidature';

@Component({
  selector: 'app-liste-candidatures',
  templateUrl: './liste-candidatures.component.html',
  styleUrls: ['./liste-candidatures.component.css'],
})
export class ListeCandidaturesComponent implements OnInit {
  candidatures: Candidature[] | undefined;
  constructor(
    private router: Router,
    private candidatureService: CandidatureService
  ) {}
  ngOnInit(): void {
    this.getCandidatures();
  }

  private getCandidatures() {
    this.candidatureService.getCandidaturesList().subscribe((data) => {
      this.candidatures = data;
    });
  }

  goToCandidature(id: string) {
    this.router.navigate(['/candidature', id]);
  }
  addCandidature() {
    this.router.navigate(['/edit-candidature/add']);
  }
}
