Para executar a aplicação, siga os passos abaixo:

Baixe o código do repositório

Execute o Docker Compose: Na pasta onde você extraiu o código, execute o comando docker-compose up. Isso iniciará os serviços definidos no arquivo docker-compose.yml, incluindo os contêineres necessários para o MySQL (mysql:8.0) e para a aplicação Node.js (amandavergilio/node-app:latest).

Acesso à aplicação:

Listagem de livros cadastrados: Para visualizar a lista de livros cadastrados, acesse http://localhost:4000.
Liveness (disponibilidade da aplicação): Verifique se a aplicação está respondendo em tempo real acessando http://localhost:4000/liveness.
Readiness (prontidão da aplicação): Confira se a aplicação está pronta para receber tráfego acessando http://localhost:4000/readiness.

Certifique-se de que o Docker esteja instalado e configurado corretamente no seu ambiente antes de executar esses passos. Esta descrição ajuda a garantir que o processo de configuração e execução da aplicação seja claro e eficiente.
