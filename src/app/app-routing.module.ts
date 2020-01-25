import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VotacionComponent } from './pages/votacion/votacion.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'votacion', component: VotacionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
