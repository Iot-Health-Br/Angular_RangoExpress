

![WhatsApp Image 2024-11-25 at 10 52 07 PM (1)](https://github.com/user-attachments/assets/c1f6cf59-9475-402c-b19a-b9d4cd2416c1)




# Rango Express 

  O Rango Express é uma aplicação web para o gerenciamento eficiente de pedidos de marmitas. Ele centraliza o controle de cadastro de usuários, gerenciamento de pedidos, planejamento de rotas de entrega e controle financeiro.
  
  O projeto foi desenvolvido com Spring Boot no back-end e Angular no front-end, seguindo a arquitetura monolítica e o padrão Model-View-Controller (MVC). Seu objetivo principal é oferecer uma solução prática, escalável e segura para empresas do ramo alimentício.
  

### 🌐 Estrutura do Projeto

  O projeto é dividido nas seguintes camadas:

   1. Back-End
   Framework: Spring Boot
   Linguagem: Java
   Funções principais:
   Autenticação e autorização de usuários (Spring Security).
  Gerenciamento de pedidos e controle financeiro.
  Comunicação com o banco de dados (PostgreSQL).
  Algoritmos para otimização de rotas de entrega.

  2. Front-End
  Framework: Angular
  Biblioteca de UI: PrimeNG
  Funções principais:
  Interface intuitiva para cadastro e gerenciamento de pedidos.
  Visualização de rotas e relatórios financeiros.
  Responsividade para uso em diferentes dispositivos.


    
### 🚀 Começando

  Estas instruções ajudam a configurar o projeto para desenvolvimento e teste em sua máquina local.
  Para saber como implantar em produção, consulte a seção Implantação.
  Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.
  
  

### 📋 Pré-requisitos

   Antes de iniciar, certifique-se de ter todas as ferramentas necessárias instaladas. Você precisará de:

   - Java JDK 20: Ambiente para executar o back-end.
   - Git: Controle de versão para clonar o repositório.
   - PostgreSQL: Banco de dados utilizado para armazenamento.
   - Node.js e NPM: Necessários para o front-end.
   - IntelliJ IDEA ou outra IDE de sua preferência: Para desenvolvimento do back-end.

     

### 🔧 Instalação

   Siga estes passos para configurar seu ambiente de desenvolvimento:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Iot-Health-Br/SpringBoot_RangoExpress.git
   

2. **Crie o banco de dados:**

   Nesta Aplicação estamos usando o banco de dados H2 conforme o **[Construído com](#-Construído%C3%A7%C3%A3o)**   
   Execute os scripts SQL fornecidos no repositório para criar as tabelas necessárias.
   

  
### ⚙️ Instale as dependências do Front-End:
  
    cd frontend/
    npm install
    
   1. Instale as dependências do Front-End:
      
   Abra o projeto no IntelliJ IDEA.
   Configure o arquivo application.properties com as credenciais do banco de dados.
   Execute a aplicação.


   
  2. Inicie o front-end:
     
    cd frontend/
    npm start
    
Agora, acesse a aplicação no navegador em http://localhost:4200.



### 💻 Testes
 
1. Testes Unitários:
   
Cada função do back-end foi testada para garantir consistência nos cálculos de rotas, pedidos e relatórios.

2. Testes de Integração:
   
Verificações completas para assegurar a comunicação entre o back-end e o front-end.

3. Testes de Desempenho:
   
Avaliação do tempo de resposta para rotas grandes e pequenas.


Para rodar os testes, use os comandos abaixo:
     
   # Para back-end:
     mvn test

   # Para front-end:
     ng test



### 🛠️ Construído com

   Ferramentas usadas para criar o projeto.

   * Programa criado usando a ferrameta [Intelij] - https://www.jetbrains.com/pt-br/idea/ - IDE usada
   * Programa criado usando o framework [Spring Boot] - https://spring.io/ - Framework usado
   * Programa criado usando a ferrameta [GIT] - https://git-scm.com/ - Versionamento
   * Programa criado usando o banco de dados [H2] -  - Banco de Dados usado

     

### 🖇️ Colaborando
   1. Fazer o Fork

   1. Na página do repositório que você deseja fazer o fork, clique no botão `Fork` no canto superior direito da página.

   2. GitHub irá criar uma cópia do repositório em sua conta. Este processo pode levar alguns segundos.
  
   ### 2. Clonar o Repositório Forkado

   Depois de fazer o fork, você precisará clonar o repositório para sua máquina local para começar a fazer alterações.

   1. Vá para a página do seu repositório forkado. Ele estará localizado em `https://github.com/seu-usuario/nome-do-repositorio`.

   2. Clique no botão `Code` e copie a URL do repositório (HTTPS, SSH, ou GitHub CLI).
   ![Clone Button](https://docs.github.com/assets/images/help/repository/https-url-clone-cli.png)

  3. Abra um terminal na sua máquina local e execute o seguinte comando para clonar o repositório:

    git clone https://github.com/seu-usuario/nome-do-repositorio.git



### 📌 Versão

   Nós usamos [GIT](https://git-scm.com/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](). 

   

### ✨ Autores

   * **Desenvolvedor** - *Trabalho Inicial* / *Documentação* - [Igor Leonor Macedo](https://github.com/Iot-Health-Br)
   * **Desenvolvedor** - *Trabalho Inicial* / *Documentação* - [Luidy Tavares](https://github.com/LuidyTT)
   * **Desenvolvedor** - *Trabalho Inicial* / *Documentação* - [Kauan Farias Lima](https://github.com/lKauanF)
     


### 📄 Licença

   Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

   

## 🎁 Expressões de gratidão

   * Conte a outras pessoas sobre este projeto 📢;
   * Convide alguém da equipe para uma cerveja 🍺;
   * Um agradecimento publicamente 👋;
