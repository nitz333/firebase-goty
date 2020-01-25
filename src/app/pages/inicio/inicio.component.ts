import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Goty } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];

  constructor( private _firestore: AngularFirestore ) { }

  ngOnInit()
  {
    this._firestore.collection('goty').valueChanges().pipe( map( (resp: Goty[]) => {
    
      // Debo devolver el tipo de dato que nos pide nuestra gráfica ( [{ "name": "Juego 1", "value": 25 }, ... )
      // Para ello voy a usar la función map de JavaScript y la destructuración para solo obtener los datos que quiero del objeto
      // que viene en la respuesta:
      return resp.map( ({ nombre, votos }) => ({ name: nombre, value: votos }) );

      // Lo siguiente es equivalente por si la destructuración de datos no es tan clara jajaja
      // return resp.map( data => {
      //   return {
      //     name: data.nombre,
      //     value: data.votos
      //   }
      // });

    }))
    .subscribe( emisiones => {

      //console.log(emisiones);
      this.juegos = emisiones;

    });
  }

}
