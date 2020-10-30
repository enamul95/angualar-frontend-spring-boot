import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export class HelloWorldBean{
 constructor(
   public name:string,
   public phone:string,
   public address:string
   ){

   }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWordBeanService(){
   return this.http.get<HelloWorldBean>("http://localhost:8080/hellow-world-bean")
    //console.log("Execute Hello World Bean Service")
  }
}
