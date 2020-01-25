import { Component, OnInit } from '@angular/core';
import { FirestoreGotyService } from '../../services/firestore-goty.service';
import { Goty } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-votacion',
  templateUrl: './votacion.component.html',
  styleUrls: ['./votacion.component.css']
})
export class VotacionComponent implements OnInit {

  juegos: Goty[] = [];

  constructor( private _firestoreGoty: FirestoreGotyService ) { }

  ngOnInit() {
    this._firestoreGoty.getNominados().subscribe( resp => {

      this.juegos = resp;
      console.log(this.juegos);

    });
  }

  votar( juego: Goty )
  {
    console.log(juego);
    // Se pudo haber puesto (resp: any) o crear una interfaz pero esta es otra forma interesante de ser explícito también:
    this._firestoreGoty.votarGoty(juego.id).subscribe( (resp: {ok: boolean, mensaje: string}) => {
      if ( resp.ok )
      {
        Swal.fire('¡Hecho!', resp.mensaje, 'success');
      }
      else
      {
        Swal.fire('¡Ooops!', resp.mensaje, 'error');
      }

    } );
  }

}
