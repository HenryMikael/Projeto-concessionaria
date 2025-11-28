import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-homecomponent',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './homecomponent.html',
  styleUrl: './homecomponent.css',
})
export class Homecomponent {
  imagens = [
    'lancer.png',
    'opala.png',
    'carro.png',
    'audir8.png'
  ];

  indexAtual = 0;

  proximo() {
    this.indexAtual = (this.indexAtual + 1) % this.imagens.length;
  }

  anterior() {
    this.indexAtual =
      (this.indexAtual - 1 + this.imagens.length) % this.imagens.length;
  }
}
