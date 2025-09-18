import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TarefaFormComponent } from './components/tarefa-form/tarefa-form.component';
import { TarefaListComponent } from './components/tarefa-list/tarefa-list.component';


export const routes: Routes = [
  { path: '', redirectTo: 'tarefas', pathMatch: 'full' },
  { path: 'tarefas', component: TarefaListComponent },
  { path: 'nova-tarefa', component: TarefaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
