import { Component } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.css']
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
