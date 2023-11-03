import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cnc1',
  templateUrl: './cnc1.page.html',
  styleUrls: ['./cnc1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CNC1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
