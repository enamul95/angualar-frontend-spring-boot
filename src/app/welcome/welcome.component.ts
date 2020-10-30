import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {WelcomeDataService} from "./../service/data/welcome-data.service"

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username = ''
  nameFromServe:String
  phoneFromServe:String
  addressFromServe:String
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService
    ) { }


  ngOnInit(): void {
    //this.route.snapshot.params['username']
    this.username=this.route.snapshot.params['username']
  }

  getWelcomeMessage(){
    //console.log(this.service.executeHelloWordBeanService());
    this.service.executeHelloWordBeanService().subscribe(
      response => this.handleSuccessfullResponse(response)
    )
    
    
    console.log("get last line of getWelcomeMessage")
   // console.log("clicked here...")
  }

  handleSuccessfullResponse(response){
    this.nameFromServe = response.name
    this.phoneFromServe = response.phone
    this.addressFromServe = response.address
    //console.log(response)
    //console.log("***decode value****")
    //console.log(response.name)
   // console.log(response.phone)
    //console.log(response.address)
  }

}
