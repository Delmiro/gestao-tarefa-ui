import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Tarefa, TarefaService, PageResponse  } from '../../services/tarefa.service';

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
  paginaAtual = 0;
  totalPaginas = 0;
  totalElementos = 0;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(pagina: number = 0): void {
    this.carregando = true;
    this.erro = null;

    this.tarefaService.listar(undefined, pagina).subscribe({
      next: (resposta: PageResponse<Tarefa>) => {
        this.tarefas = resposta.content;
        this.paginaAtual = resposta.number;
        this.totalPaginas = resposta.totalPages;
        this.totalElementos = resposta.totalElements;
        this.carregando = false;
      },
      error: (error) => {
        console.error('Erro completo:', error);
        this.erro = 'Erro ao carregar tarefas';
        this.carregando = false;
        
        // Para debug - verifique o console
        if (error.error) {
          console.error('Detalhes do erro:', error.error);
        }
      }
    });
  }

  getStatusDisplay(status: string): string {
    const statusMap: { [key: string]: string } = {
      'ABERTA': 'Aberta',
      'EM_ANDAMENTO': 'Em Andamento', 
      'CONCLUIDA': 'Concluída'
    };
    return statusMap[status] || status;
  }

  mudarPagina(pagina: number): void {
    this.carregarTarefas(pagina);
  }

  getPaginas(): number[] {
    const paginas = [];
    const inicio = Math.max(0, this.paginaAtual - 2);
    const fim = Math.min(this.totalPaginas, inicio + 5);
    
    for (let i = inicio; i < fim; i++) {
      paginas.push(i + 1);
    }
    return paginas;
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
