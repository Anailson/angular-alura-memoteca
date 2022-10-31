import { Pensamento } from './../pensamento/pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  //Chamando o array do back
  listaPensamentos: Pensamento[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
