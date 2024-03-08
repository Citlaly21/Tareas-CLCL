import { Component, OnInit } from '@angular/core';
import { Tareas } from '../../models/Tarea';

@Component({
  selector: 'CLCL-app-tareas-clcl',
  templateUrl: './tareas-clcl.component.html',
  styleUrls: ['./tareas-clcl.component.css']
})
export class TareasClclComponent implements OnInit {
  listTareas: Tareas[]=[]
  nombreTarea= '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){

    //console.log(this.nombreTarea);
    //crear objeto tarea
    const tarea: Tareas ={
      nombre: this.nombreTarea,
      estado: false
    }
    //agregar el objeto tarea al array
    this.listTareas.push(tarea);

    //reseatear form
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void{
    //console.log (index);
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(index:number, tarea: Tareas): void{
    this.listTareas[index].estado = !tarea.estado
  }

}
