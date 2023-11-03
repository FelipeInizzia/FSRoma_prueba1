import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'CNC_1', url: '/cnc1', icon: 'desktop' },
    { title: 'CNC_2', url: '/cnc2', icon: 'desktop' },
    { title: 'CNC_3', url: '/cnc3', icon: 'desktop' },
    { title: 'CNC_4', url: '/cnc4', icon: 'desktop' },
    { title: 'Configuracion', url: '/customers', icon: 'construct' },
    { title: 'TEST-API',  url: '/pruebas', icon: 'bug' },
    

  ];
 // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
