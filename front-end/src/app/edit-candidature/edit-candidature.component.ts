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
    if (this.id != 'add') {
      this.getCandidature();
    } else {
      this.candidature = {
        id: '',
        entreprise: '',
        poste: '',
        date_postulation: '',
        etat_candidature: '',
        lien_offre: '',
        lieu: '',
        duree: 0,
        date_debut: '',
        commentaire: '',
      };
      this.id = null;
    }
  }

  private getCandidature() {
    if (this.id) {
      this.candidatureService.getCandidatureById(this.id).subscribe((data) => {
        this.candidature = data;
      });
    }
  }

  saveCandidature(id: string) {
    if (this.id) {
      this.candidatureService.updateCandidature(this.candidature).subscribe(
        (response) => {
          console.log(response), this.router.navigate(['/candidature', id]);
        },
        (error) => console.log(error)
      );
    } else {
      this.candidatureService.createCandidature(this.candidature).subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/candidature', response.id]);
        },
        (error) => console.log(error)
      );
    }
  }

  cancelCandidature(id: string) {
    if (id) {
      this.id = null;
      this.router.navigate(['/candidature', id]);
    } else {
      this.router.navigate(['liste-candidatures']);
    }
  }

  deleteCandidature() {
    if (this.id) {
      this.candidatureService
        .deleteCandidatureById(this.id)
        .subscribe((data) => {
          this.candidature = data;
        });
    }
    this.id = null;
    this.router.navigate(['/liste-candidatures']);
  }
}
