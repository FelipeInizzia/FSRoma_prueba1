import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cnc3',
  templateUrl: './cnc3.page.html',
  styleUrls: ['./cnc3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CNC3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
