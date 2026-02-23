### Projeto educacional para estudo de QA e automação.

# Cypress Practice Project

Projeto de automação E2E usando Cypress com o site Saucedemo.

## Objetivo
Treinar automação de login utilizando Page Object Model (POM).

## Tecnologias
- Cypress v15
- JavaScript
- Node.js

## Sistema Testado
Site de testes: https://www.saucedemo.com

## Casos de Teste Implementados
1. Login válido → redireciona para inventory.html
2. Login inválido → exibe mensagem de erro
3. Campos vazios → bloqueio de acesso

## Estrutura do Projeto
cypress/
 ├─ e2e/login.cy.js → Testes E2E
 ├─ pages/LoginPage.js → Page Object Model
 ├─ fixtures/ → Dados de teste
 └─ support/ → Configurações globais

## Como Executar
1. Instalar dependências:
   npm install
2. Abrir Cypress:
   npx cypress open

## Aprendizados
- Estrutura básica de testes E2E
- Uso de Page Object Model
- Assertions com Cypress
- Debug de erros 401 e requests externos

## Próximos Passos
- Adicionar testes de carrinho
- Testes negativos mais completos
- Integração com CI/CD