import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAcceuilComponent} from "./page-acceuil/page-acceuil.component";
import {ClientComponent} from "./client/client.component";
import {CommandeComponent} from "./commande/commande.component";

import {ArticleComponent} from "./article/article.component";
const routes: Routes = 
[{ path: '', component: PageAcceuilComponent },
{path :'acceuil',component:PageAcceuilComponent},
{path :'client',component:ClientComponent},
{path :'commande',component:CommandeComponent},
{path :'article',component:ArticleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
