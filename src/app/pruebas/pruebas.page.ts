import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PRUEBASPage implements OnInit {

  //url = 'https://mck3qse7y4.execute-api.us-east-1.amazonaws.com/estapatest/?transactionId=5&type=PURCHASE&amount=500';
  url = 'https://okj3x0a8e6.execute-api.us-east-1.amazonaws.com/test1/?CNC=4&Cantidad=8';
  respuesta: string = "";
  jasonObtenido: any =[];
  jasonObtenidoString: string = "";

  constructor(
    private router: Router,
    private http: HttpClient,
    
    //respuesta: string = "",
  ) {}



  ngOnInit(): void {
    console.log("TEST_VENTANA"); 
    
    

    //this.Solicitud();
  {}}


  PruebaApi(): void{
  console.log("Btn Ejecucion PruebaApi")
  this.Solicitud()
  console.log("texto: "+this.respuesta)
  }

  


  
  Solicitud(){
    this.getInizziaURL().subscribe(res=>{
    console.log("Res5",res);  
    this.jasonObtenido = res; 
    this.jasonObtenidoString = res;
    console.log("Res6",this.jasonObtenido);  
    console.log("Res7",this.jasonObtenidoString);  
  })};

  getInizziaURL(){
    return this.http.get<any>(this.respuesta) 
  }

}
