import { PensamentoService } from './../pensamento.service';
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

  //Realizando a injeção de dep. da service
  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) =>{
         this.listaPensamentos = listaPensamentos
    })
  }

}
