import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {
  private apiUrl = 'https://api.chucknorris.io/jokes/random';  // Este é o endereço da API

  constructor(private http: HttpClient) { }

  getRandomJoke(): Observable<any> {  // Função que pega uma piada aleatória
    return this.http.get(this.apiUrl);
  }
}