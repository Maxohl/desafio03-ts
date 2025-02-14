# Desenvolvendo o Dio Bank
desenvolvido por [Maximilian C. Ohlweiler](https://github.com/Maxohl)

#### Projeto desenvolvido com conceitos básicos de typescript

### Tecnologias
- Typescript

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependeências
    
    npm install

3 - Execute o projeto

    npm start

#### Desafios
[x] Incluir validação da senha no campo de login
  - Para logar, além do email faça a validação com a senha informada pelo usuário.

[x] Implemente um sistema de login com a Context API
  - Seguindo os exemplos demonstrados ao longo do curso, crie um estado global para realizar o login
  - Utilize o localStorage para armazenar os dados do usuário ao logar
  - Caso os dados do usuário existam no localStorage, a tela de login não deve ser exibida

[x] Crie uma página para exibir as informações do usuário
  - Crie uma página onde será exibido o nome, email
  - Esta página só poderá ser acessada caso a usuária esteja logada
  - Caso a usuária não esteja logada, deve ser mantida na página com a tela de login

[x] Fazer o deploy no Netlify e compartilhar o link da página
