import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento/pensamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
     // id: 1,
      conteudo: ' ',
      autoria: ' ',
      modelo:'modelo1'
  }
//cancelarPensamento
  constructor(
    private service: PensamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() =>{
       this.router.navigate(['/listarPensamento'])  //Apos criar um novo pensamento é feita a router para a lista dos pensamentos
    })
    // alert("Novo pensamentos criado");
    //console.log(this.pensamento);
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
    // alert("Pensamento Cancelado");
  }

}
