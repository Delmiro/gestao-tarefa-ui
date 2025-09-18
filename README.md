# Gestão de Tarefas

## Descrição do Projeto
Aplicação web para gerenciamento de tarefas, permitindo criar, listar, editar e excluir tarefas com controle de status, datas e paginação.  
O projeto utiliza Angular 20 com componentes standalone e suporte a SSR (Server-Side Rendering) com Node/Express.

---

## Tecnologias Utilizadas

- **Frontend:** Angular 20, TypeScript, RxJS, Zone.js  
- **SSR (Server-Side Rendering):** @angular/ssr, Express  
- **Estilização:** CSS/SCSS (pode incluir frameworks se usados)  
- **Ferramentas de Desenvolvimento:** Angular CLI, TypeScript, Prettier  
- **Testes:** Jasmine, Karma  

---

## Instruções para Rodar

### Frontend

1. Instale as dependências:
   ```bash
   npm install

2. Rode a aplicação em modo de desenvolvimento:

npm start

Acesse em: http://localhost:4200

 Funcionalidades
 
✅ Listagem paginada de tarefas

✅ Criação de novas tarefas

✅ Exclusão de tarefas

✅ Filtros por status (Aberta, Em Andamento, Concluída)

✅ Interface responsiva

✅ Navegação por páginas

✅ Indicadores visuais de status

Estrutura de Rotas

| Rota           | Descrição                         |
| -------------- | --------------------------------- |
| `/tarefas`     | Lista todas as tarefas            |
| `/nova-tarefa` | Formulário para criar nova tarefa |


| Pergunta                                                     | Resposta                                                                                                                           |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Já trabalhou com Adobe Flex/ActionScript?                    | Apenas conhecimento teórico.                                                                                                       |
| Quando e em que contexto?                                    | Aprendizado acadêmico e leitura de documentação para manutenção teórica de sistemas legados.                                       |
| Quais tipos de aplicações você desenvolveu?                  | Não desenvolvi aplicações reais; apenas estudo de conceitos de Flex/ActionScript.                                                  |
| Você se considera apto a dar manutenção em sistemas legados? | Sim. Possuo conhecimento teórico suficiente para entender a lógica de sistemas existentes e realizar manutenção quando necessário. |


![Gestão de tarefa](src/app/gestao-de-tarefa.png)
