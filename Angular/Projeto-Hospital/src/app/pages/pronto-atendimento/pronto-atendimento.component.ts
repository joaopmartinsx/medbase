import { Component, OnInit } from '@angular/core';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pronto-atendimento',
  templateUrl: './pronto-atendimento.component.html',
  styleUrls: ['./pronto-atendimento.component.css']
})
export class ProntoAtendimentoComponent implements OnInit {
  faDoctor = faUserDoctor;

  dataAtual: Date = new Date();
  diasCalendario: Date[] = [];

  constructor() { }

  ngOnInit(): void {
    this.construiCalendario();
  }

  construiCalendario(){
    const ano = this.dataAtual.getFullYear();
    const mes = this.dataAtual.getMonth();

    const primeiroDiaDaSemana = 0
    const ultimoDiaDaSemana = 6;

    const dataInicial = new Date(ano, mes, 1);
    while (dataInicial.getDay() !== ultimoDiaDaSemana){
      dataInicial.setDate(dataInicial.getDate() - 1)
    }

    const dataFinal = new Date(ano, mes + 1, 0);
    while (dataFinal.getDay() !== ultimoDiaDaSemana){
      dataFinal.setDate(dataFinal.getDate() + 1)
    }

    this.diasCalendario = []
    for(
      let data = new Date(dataInicial.getTime());
      data <= dataFinal;
      data.setDate(data.getDate() + 1)
    ){
      this.diasCalendario.push(new Date(data.getTime()));
    }
  }

  alterarMes(offsetMes: number) {
    this.dataAtual.setMonth(this.dataAtual.getMonth() + offsetMes);
    this.dataAtual = new Date(this.dataAtual.getTime());
    this.construiCalendario();
}

}
