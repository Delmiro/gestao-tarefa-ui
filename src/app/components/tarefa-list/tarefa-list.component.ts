import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Tarefa, TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefa-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './tarefa-list.component.html',
  styleUrls: ['./tarefa-list.component.css']
})
export class TarefaListComponent implements OnInit {
  tarefas: Tarefa[] = [];
  carregando = false;
  erro: string | null = null;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.carregando = true;
    this.erro = null;

    this.tarefaService.listar().subscribe({
      next: (resposta) => {
        this.tarefas = resposta.content ?? resposta;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Erro ao carregar tarefas';
        this.carregando = false;
      }
    });
  }

  excluir(id: number): void {
    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
      this.tarefaService.excluir(id).subscribe({
        next: () => this.carregarTarefas(),
        error: () => this.erro = 'Erro ao excluir tarefa'
      });
    }
  }
}
