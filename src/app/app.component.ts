import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nombre-proyecto';


  onRegister() {
    console.log('Redirigiendo al registro...');
    // Aquí puedes redirigir a otra ruta o abrir un modal
    // Ejemplo con Router:
    // this.router.navigate(['/register']);
  }
}
