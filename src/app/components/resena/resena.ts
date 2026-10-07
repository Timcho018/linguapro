import { Component, inject, signal } from '@angular/core';
import { Resena as ResenaInterface } from '../../Interface/resena';
import {
  form,
  min,
  max,
  required,
  FormField,
  FormRoot
} from '@angular/forms/signals';
import { ResenaService } from '../../services/resena.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-resena',
  imports: [FormField, FormRoot],
  templateUrl: './resena.html',
  styleUrl: './resena.css'
})
export class Resena {

  private resenaService = inject(ResenaService);

  listaResenas: ResenaInterface[] = [];


  resenaModelo = signal<ResenaInterface>({
    nombre: '',
    comentario: '',
    valoracion: 0
  });


  resenaFormulario = form(
    this.resenaModelo,

    (esquema) => {

      required(esquema.nombre, {
        message: 'El nombre es obligatorio'
      });

      required(esquema.comentario, {
        message: 'El comentario es obligatorio'
      });

      min(esquema.valoracion, 1, {
        message: 'La valoración mínima es 1'
      });

      max(esquema.valoracion, 5, {
        message: 'La valoración máxima es 5'
      });

    },

    {
      submission: {

        action: async () => {

          const nuevaResena: ResenaInterface = {
            nombre: this.resenaModelo().nombre,
            comentario: this.resenaModelo().comentario,
            valoracion: this.resenaModelo().valoracion
          };


          this.resenaService.guardar(nuevaResena);

          this.mostrarResenas();


          await Swal.fire({
            title: 'Reseña registrada',
            text: 'Tu opinión fue registrada correctamente',
            icon: 'success'
          });


          this.resenaModelo.set({
            nombre: '',
            comentario: '',
            valoracion: 0
          });


          return undefined;

        }

      }

    }

  );


  constructor() {

    this.mostrarResenas();

  }


  mostrarResenas() {

    this.listaResenas = this.resenaService.mostrar();

  }

}