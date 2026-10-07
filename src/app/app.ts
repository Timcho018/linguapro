import { Component, signal } from '@angular/core';

import { Inicio } from './components/inicio/inicio';
import { Institucional } from './components/institucional/institucional';
import { Cursos } from './components/cursos/cursos';
import { Docentes } from './components/docentes/docentes';
import { Promociones } from './components/promociones/promociones';
import { Resena } from './components/resena/resena';


@Component({
  imports: [
    Inicio,
    Institucional,
    Cursos,
    Docentes,
    Promociones,
    Resena
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  protected readonly title = signal('linguapro');

}