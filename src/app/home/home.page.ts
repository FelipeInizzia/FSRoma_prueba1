import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NonNullableFormBuilder } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  users: any =[]; 
  url = 'https://mck3qse7y4.execute-api.us-east-1.amazonaws.com/estapatest/?transactionId=13&type=PURCHASE&amount=500'

  Res_cnc1: any =[];
  Res_cnc2: any =[];
  Res_cnc3: any =[];
  Res_cnc4: any =[];
  url_cnc1 ='https://okj3x0a8e6.execute-api.us-east-1.amazonaws.com/test1/?CNC=1&Cantidad=1'
  url_cnc2 ='https://okj3x0a8e6.execute-api.us-east-1.amazonaws.com/test1/?CNC=2&Cantidad=1'
  url_cnc3 ='https://okj3x0a8e6.execute-api.us-east-1.amazonaws.com/test1/?CNC=3&Cantidad=1'
  url_cnc4 ='https://okj3x0a8e6.execute-api.us-east-1.amazonaws.com/test1/?CNC=4&Cantidad=1'

  constructor(
    private router: Router,
    private http: HttpClient,
    
    ) { }
    

  ngOnInit(): void {
    console.log("VentanaHome");
/*//PRUEBA
    this.getUsers().subscribe(res=>{
      console.log("Res",res)
      this.users = res;
    });
*/


    this.Solicitud_CNC1();
    this.Solicitud_CNC2();
    this.Solicitud_CNC3();
    this.Solicitud_CNC4();
    this.Comprobacion();


  }
  
  Comprobacion()
  {
    console.log("M-Comprobacion")
    console.log("Metodo en trabajo para acceder a variables de JSON interno y hacer uso de sus variables dentrod e funciones y noso de muestra en HTML")
    console.log("Comrpobacion_CNC-1",this.Res_cnc1) 
    
  }

   
  Solicitud_CNC1(){
    this.getInizziaURL1().subscribe(res=>{
    console.log("CNC-1",res) 
    this.Res_cnc1 = res; 
      
  })};

  getInizziaURL1(){
    return this.http
    .get<any>(this.url_cnc1)
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    ) 
  }



  Solicitud_CNC2(){
    this.getInizziaURL2().subscribe(res=>{
    console.log("CNC_2",res) 
    this.Res_cnc2 = res; 
      
  })};

  getInizziaURL2(){
    return this.http
    .get<any>(this.url_cnc2)
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    ) 
  }


  Solicitud_CNC3(){
    this.getInizziaURL3().subscribe(res=>{
    console.log("CNC_3",res) 
    this.Res_cnc3 = res; 
      
  })};

  getInizziaURL3(){
    return this.http
    .get<any>(this.url_cnc3)
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    ) 
  }


  Solicitud_CNC4(){
    this.getInizziaURL4().subscribe(res=>{
    console.log("CNC_4",res) 
    this.Res_cnc4 = res; 
      
  })};

  getInizziaURL4(){
    return this.http
    .get<any>(this.url_cnc4)
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    ) 
  }

  






  getUsers(){
    return this.http
    .get("./assets/files/Custome.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )

  }

  GoToCustomers(): void{
    this.router.navigate(['/customers'])
    //console.log("nose")
  }

}
