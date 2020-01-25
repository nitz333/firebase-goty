import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Angular se encarga de cambiar la siguiente importación a la correspondiente en caso de estar en entorno de producción.
import { environment } from '../../environments/environment';
import { Goty } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreGotyService {

  // Esta variable nos ayudará para ofrecer mejor rendimiento al usuario en su navegador y no estar haciendo la
  // petición de getNominados() cada que se navegue a la página donde esta función es invocada. (ver el video
  // 339, minuto 7:37 llamado "Mostrar los juegos en el HTML")
  private goty: Goty[] = [];

  constructor( private _http: HttpClient ) { }

  getNominados()
  {
    // Si tenemos juegos entonces nos evitamos hacer la petición (esto es porque para nuestro ejercicio sabemos que esa base
    // no va a cambiar, es decir, no se van a agregar juegos o hacer cosas mayores a los documentos) 
    if ( this.goty.length > 0 )
    {
      //console.log("Desde caché");
      // Dado que esta función siempre debe regresar un Observable, vamos a hacer uso del operador "of" de los rxjs, este
      // operador recibe algún parámetro y crea una copia exacta de este pero como un Observable, en nuestro caso no vamos
      // a guardar ese Observable en algún lugar simplemente lo vamos a retornar:
      return of(this.goty);
    }
    else
    {
      //console.log("Desde Internet");
      // Poner aquí <Goty[]> indica que regresará un arreglo de tipo de datos que corresponden a la interfaz Goty, esto es
      // otra forma de hacerlo en vez de hacer el cast siempre en el subscribe de quien invoque a esta función con el clásico
      // ( (resp: Goty[]) => {.....}
      // Solo que hacerlo de esta forma ahorra código si es que en muchos lados se invoca a esta función.
      return this._http.get<Goty[]>( `${ environment.urlFirestoreGoty }/api/goty` ).pipe(
        tap( resp => this.goty = resp )
      );
    }
  }

  votarGoty( id: string )
  {
    // Nota: Generalmente el método post siempre recibe argumentos en el body, en nuestro caso no es así y por eso mandamos
    //       un body vacío {}
    return this._http.post( `${ environment.urlFirestoreGoty }/api/goty/${ id }`, {} ).pipe(
      catchError( err => {
        return of(err.error);
      })
    );
  }

}
