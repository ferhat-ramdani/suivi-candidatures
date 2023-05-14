import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeCandidaturesComponent } from './liste-candidatures/liste-candidatures.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { EditCandidatureComponent } from './edit-candidature/edit-candidature.component';

const routes: Routes = [
  { path: 'liste-candidatures', component: ListeCandidaturesComponent },
  { path: 'candidature/:id', component: CandidatureComponent },
  { path: 'edit-candidature/:id', component: EditCandidatureComponent },
  { path: 'edit-candidature/add', component: EditCandidatureComponent },
  { path: '', redirectTo: 'liste-candidatures', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
