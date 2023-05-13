import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeCandidaturesComponent } from './liste-candidatures/liste-candidatures.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { EditCandidatureComponent } from './edit-candidature/edit-candidature.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeCandidaturesComponent,
    CandidatureComponent,
    EditCandidatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
