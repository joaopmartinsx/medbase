import { Component, OnInit } from '@angular/core';
import { faPencil, faPills } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faPencil = faPencil;
  faPills = faPills;

  constructor() { }

  ngOnInit(): void {
  }

}
