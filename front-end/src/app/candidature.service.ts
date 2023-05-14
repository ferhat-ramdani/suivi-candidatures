import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidature } from './candidature';

@Injectable({
  providedIn: 'root',
})
export class CandidatureService {
  private baseURL = 'http://localhost:8080/api/candidatures';
  constructor(private httpClient: HttpClient) {}

  getCandidaturesList(): Observable<Candidature[]> {
    return this.httpClient.get<Candidature[]>(`${this.baseURL}`);
  }

  getCandidatureById(id: string): Observable<Candidature> {
    return this.httpClient.get<Candidature>(`${this.baseURL}/${id}`);
  }

  deleteCandidatureById(id: string): Observable<Candidature> {
    return this.httpClient.delete<Candidature>(`${this.baseURL}/${id}`);
  }

  updateCandidature(data: any) {
    const url = `${this.baseURL}/${data.id}`;
    return this.httpClient.put<Candidature>(url, data);
  }
}
