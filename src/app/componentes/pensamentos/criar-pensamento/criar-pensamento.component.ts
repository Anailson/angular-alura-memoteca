import { Pensamento } from './../pensamento/pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
      id: 1,
      conteudo: 'Aprendendo Angular',
      autoria: 'Dev',
      modelo:'modelo1'
  }
//cancelarPensamento
  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
     alert("Novo pensamentos criado");
    //console.log(this.pensamento);
  }

  cancelarPensamento(){
    alert("Pensamento Cancelado");
  }

}
