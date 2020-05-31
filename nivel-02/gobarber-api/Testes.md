# Testes automatizados

Servem para que a nossa aplicação continue funcionando independente do número de fruncionalidades e do número de devs no time

## Tipos de testes

> Testes Unitários (TDD)

- Testam funcionalidades específicas da nossa aplicação (Precisam ser funçōes puras)
- Jamais fazem chamadas a API e efeito colateral

> Testes de Integração

- Testam uma funcionalidade completa, passando por várias camadas da aplicação
- Route -> Controller -> Service -> Repository -> ...

> Testes E2E

- Testes que simulam a ação do usuário dentro da nossa aplicação

## TDD (Test Driven Desing)

- Quando o usuário se cadastrar na aplicação, ele deve receber um email de boas vindas
