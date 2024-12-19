import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  fundacao: Date = new Date(1998, 0, 1);
  atual: Date = new Date();

  getFundacao(): number {
    const anoFundacao = this.fundacao.getFullYear();
    const anoAtual = this.atual.getFullYear();
    const qtdAnos = anoAtual - anoFundacao;
    return qtdAnos;
  }

}
