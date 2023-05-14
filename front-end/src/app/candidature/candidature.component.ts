import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidature } from '../candidature';
import { CandidatureService } from '../candidature.service';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css'],
})
export class CandidatureComponent implements OnInit {
  id!: string | null;
  candidature!: Candidature;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private candidatureService: CandidatureService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.getCandidature();
  }

  private getCandidature() {
    if (this.id) {
      this.candidatureService.getCandidatureById(this.id).subscribe((data) => {
        this.candidature = data;
      });
    }
  }

  goToListeCandidatures() {
    this.router.navigate(['/liste-candidatures']);
  }

  goToEditCandidature(id: string) {
    this.router.navigate(['/edit-candidature', id]);
  }
}
