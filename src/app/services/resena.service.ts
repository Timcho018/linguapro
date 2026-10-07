import { Injectable } from '@angular/core';
import { Resena } from '../Interface/resena';

@Injectable({
  providedIn: 'root'
})

export class ResenaService {

  private listaResenas: Resena[] = [
    {
      nombre: 'Lucía Fernández',
      comentario: 'Las clases son dinámicas y los docentes explican muy bien.',
      valoracion: 5
    },
    {
      nombre: 'Diego Ramos',
      comentario: 'Me ayudó bastante a mejorar mi nivel de inglés.',
      valoracion: 4
    }
  ];


  guardar(resena: Resena) {

    this.listaResenas.push(resena);

  }


  mostrar() {

    return this.listaResenas;

  }

}