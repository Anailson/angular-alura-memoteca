import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo:'Passo informaões para o componente filho',
      autoria:'Componente Pai',
      modelo:'modelo3'
    },
    {
      conteudo:'Minha propriedade é decorada com @Input()',
      autoria:'Compoennete filho',
      modelo:'modelo2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
