import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tarefa {
  id: number;
  titulo: string;
  descricao?: string;
  status: string;
  dataCriacao: string;
  idProjeto: number;
}
export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private apiUrl = 'http://localhost:8080/tarefas';

  constructor(private http: HttpClient) {}

  listar(idProjeto?: number, page: number = 0, size: number = 10): Observable<PageResponse<Tarefa>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    if (idProjeto) {
      params = params.set('idProjeto', idProjeto.toString());
    }
    
    return this.http.get<PageResponse<Tarefa>>(this.apiUrl, { params });
  }

  criar(tarefa: Partial<Tarefa>): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.apiUrl, tarefa);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
