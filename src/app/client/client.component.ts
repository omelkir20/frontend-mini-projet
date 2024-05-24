import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServService } from '../serv.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  public client={
    clid:"",
    mdp:"",
    nomcl:"",
    prenomcl:"",
    adressecl:"",
    telcl:""}
    constructor(private servService :ServService,private router:Router,private routr :ActivatedRoute){}
    save(){
      this.servService.addClient(this.client).subscribe((result)=>{
        console.log("ajouter  vec succée");
      },err=>{
        console.error();
        ("erreur");
      });
    }

}
