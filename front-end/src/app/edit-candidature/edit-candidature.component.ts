import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidature } from '../candidature';
import { CandidatureService } from '../candidature.service';

@Component({
  selector: 'app-edit-candidature',
  templateUrl: './edit-candidature.component.html',
  styleUrls: ['./edit-candidature.component.css'],
})
export class EditCandidatureComponent implements OnInit {
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

  saveCandidature(id: string) {
    this.candidatureService.updateCandidature(this.candidature).subscribe(
      // (response) => console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(['/candidature', id]);
  }

  cancelCandidature(id: string) {
    this.router.navigate(['/candidature', id]);
  }

  deleteCandidature() {
    if (this.id) {
      this.candidatureService
        .deleteCandidatureById(this.id)
        .subscribe((data) => {
          this.candidature = data;
        });
    }
    this.router.navigate(['/liste-candidatures']);
  }
}
