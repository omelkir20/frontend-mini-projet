import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent {
  public commande={
    idCom:"",
    dateCom:"",
    numCom:""}
    constructor(private servService :ServService ,private router:Router,private routr :ActivatedRoute){}
    save(){
      this.servService.addCommande(this.commande).subscribe((result)=>{
        console.log("ajouter  vec succée");
      },err=>{
        console.error();
        ("erreur");
      });
    }
}
