import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styleUrls: ['./grafico-barra.component.css']
})
export class GraficoBarraComponent implements OnDestroy {

  @Input() results: any[] = [];
  
  // results: any[] =[
  //   {
  //     "name": "Juego 1",
  //     "value": 25
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 30
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 17
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 28
  //   }
  // ];

  // Esta variable (directiva del lado del html) define el tamaño de la caja del gráfico, nosotros lo vamos a quitar.
  //view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  // Esta variable servirá para poder destruir al setInterval y así evitar fugas de memoria.
  //intervalo;

  constructor()
  {
    // this.intervalo = setInterval( () => {
    //   console.log('thick');

    //   const newResults = [...this.results];

    //   for ( let i in newResults )
    //   {
    //     newResults[i].value = Math.round( Math.random() * 500 );
    //   }

    //   this.results = [...newResults];

    // }, 1500);
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy()
  {
    //clearInterval( this.intervalo );
  }

}
