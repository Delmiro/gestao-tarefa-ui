import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // ← Deve ser true
  imports: [RouterModule, CommonModule],
  template: `
    <h1>Bem-vindo teste técnico!</h1>
    <nav>
      <a routerLink="/nova-tarefa">Nova Tarefa</a> | 
      <a routerLink="/tarefas">Listar Tarefas</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste-tecnico';
}