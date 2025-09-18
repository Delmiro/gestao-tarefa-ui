import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { TarefaFormComponent } from './app/components/tarefa-form/tarefa-form.component';
import { TarefaListComponent } from './app/components/tarefa-list/tarefa-list.component';
import 'zone.js';

const routes: Routes = [
  { path: '', redirectTo: 'tarefas', pathMatch: 'full' },
  { path: 'tarefas', component: TarefaListComponent },
  { path: 'nova-tarefa', component: TarefaFormComponent },
  { path: '**', redirectTo: 'tarefas' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient() // Se você usar HttpClient
  ]
});