# Recuperação de senha

**Requisitos funcionais**

- O usuário deve poder recuperar sua senha informando o seu email;
- O usuário deve receber um email com instruçōes de recuperação de senha;
- O usuário deve poder resetar sua senha;

**Requisitos não funcionais**

- Utilizar Mailtrap para testar envios para ambientes de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de emails deve acontecer em segundo plano (background job);

**Regras de negócio**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisar confirmar a nova senha ao resetar senha antiga;

# Atuailização de perfil

**Requisitos funcionais**

- O usuário deve poder atualizar seu perfil (nome, email, senha, avatar);

**Regras de negócio**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**Requisitos funcionais**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificaçōes não lidas;

**Requisitos não funcionais**

- Os agendamentos do prestador no dia devem ser armazenadas em cache;
- As notificaçōes do prestador devem ser armazenadas no MongoDB;
- As notificaçōes do prestador devem ser enviadas em tempo-real utilizando socket.io;

**Regras de negócio**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento der serviço

**Requisitos funcionais**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar os horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**Requisitos não funcionais**

- A listagem de prestadores deve ser armazenadas em cache;

**Regras de negócio**

- Cada agendamento deve durar 1h extamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h útimo as 17h);
- O usuário não pode agendar em um horário já oculpado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços comsigo mesmo;
