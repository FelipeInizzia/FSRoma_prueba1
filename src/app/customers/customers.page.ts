import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CustomersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("CONFIGURACION_VENTANA");
  }

  GoToHome(){
    this.router.navigate(['/home'])
    console.log("nose")
  }

}
