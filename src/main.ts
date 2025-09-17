// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; 
import 'zone.js'; 

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  
    provideHttpClient() 
  ]
})
.catch((err: unknown) => console.error('Erro ao inicializar a aplicação:', err));
