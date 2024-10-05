import { Component } from '@angular/core';
import { ChuckNorrisService } from '../services/chucknorris.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  joke: string = '';  // Aqui guardamos a piada

  constructor(private chuckNorrisService: ChuckNorrisService) { }

  // Quando a página carregar, já pedimos uma piada
  ionViewDidEnter() {
    this.getJoke();
  }

  // Função para buscar a piada
  getJoke() {
    this.chuckNorrisService.getRandomJoke().subscribe((response) => {
      this.joke = response.value;  // Guardamos a piada que veio da API
    });
  }
}