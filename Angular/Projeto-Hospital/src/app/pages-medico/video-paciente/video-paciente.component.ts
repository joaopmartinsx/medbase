import { Component, OnInit } from '@angular/core';
import { faBars, faUser, faPencil } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-video-paciente',
  templateUrl: './video-paciente.component.html',
  styleUrls: ['./video-paciente.component.css']
})
export class VideoPacienteComponent implements OnInit {
  faBars = faBars;
  faUser = faUser;
  faPencil = faPencil;

  constructor() { }

  ngOnInit(): void {
  }

}
