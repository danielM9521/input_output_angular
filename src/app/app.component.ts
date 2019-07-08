import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebas';




public myOutputEvent (data:any):void{
  console.log('Hola alumnos');
}



}
