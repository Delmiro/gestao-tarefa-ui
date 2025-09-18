import { Component } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.css'],
  standalone: true, 
  imports: [FormsModule, CommonModule, ReactiveFormsModule]
})
export class TarefaFormComponent {
  titulo = '';
  descricao = '';
  status = 'Aberta';
  idProjeto = 1; 
  constructor(private tarefaService: TarefaService) {}

  salvar(): void {
    const tarefa = {
      titulo: this.titulo,
      descricao: this.descricao,
      status: this.status,
      idProjeto: this.idProjeto
    };

    this.tarefaService.criar(tarefa).subscribe({
      next: () => {
        alert('Tarefa criada com sucesso!');
        this.titulo = '';
        this.descricao = '';
      },
      error: (err) => console.error('Erro ao salvar tarefa', err)
    });
  }
}
