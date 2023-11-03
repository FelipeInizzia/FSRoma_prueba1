import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cnc2',
  templateUrl: './cnc2.page.html',
  styleUrls: ['./cnc2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CNC2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
