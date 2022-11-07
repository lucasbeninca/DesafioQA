# DesafioQA
**Os projetos**
- Os projetos estão em duas pastas identificadas como Zitrus-Cypress e Zitrus-Postman.

**Configurações utilizadas para automação com Cypress**

- Versões utilizadas para automação com Cypress: foi utilizado node, versão 18.12.0 e Cypress Versão 9.1.1 (não é a mais atual, porem como já estava configurada em meu ambiente optei por esta), a IDE de desenvolviemento foi utilizada o WebStorm da JetBrains.

**Como baixar e executar o projeto em Cypress**
- basta clicar abrir o repositório em um navegador, clicar no botão Code, opção Download Zip, os arquivos da automação em Cypress estão no repositório acima na pasta zitrus-cypress.
- Após fazer o donwlaod deve ser extraida as pastas em um diretório desejado no computador e na IDE de desenvolvimento (Recomenda-se utilizar a IDE WebStorm da JetBrains).
- Com o projeto extrarido e a IDE aberta na IDE deve ser clicado em File -> Open e informada a pasta que possui o projeto extraido, Feito isso devesse esperar a IDE indexar as dependencias, os Testes estão no seguinte caminho do projeto: *zitrus-cypress\cypress\integration\3-zitrus* são 4 arquivos 1 para cada cenário de testes os mesmos estão indentificados.
- Caso a IDE não consiga realizar o download do Node ou do Cypress recomendasse instalar o Node com a versão 18.12.0 disponível neste link: https://nodejs.org/en/download/ e para instalar o Cypress, deve ser executado o seguinte comando, no terminal da IDE: *npm install cypress@9.1.1 --save -include=dev* para que seja instalada a versão 9.1.1 utilizada para escrever os testes.
- Com as devidas instalações feitas e com o projeto aberto na IDE, basta apenas, ir no terminal e digitar o seguinte comando *npm rum test* para abrir o Cypress, o mesmo irá abrir no navegador padrão da maquina recomendasse utilizar o google chrome versão 107, com o Cypress aberto, basta dar um duplo click encima de qual arquivo de teste se deseja executar, essa é a execução de forma gráfica também se pode executar os testes digitando o seguinte comando no terminal da IDE: *npx cypress run* 

**Configurações utilizadas para automação com Postman**
- Foi utilizado Postman na versão 10.1.1, o mesmo pode ser baixado no seguinte link: https://www.postman.com/downloads/?utm_source=postman-home
- O projeto de autmoação do Postman está no repositório acima, dentro da pasta zitrus-postman
- Bastar ir em Colletions no postman clciar em importar - pegar o arquvio *DesafioQA-API-Postman-GitHub.postman_collection.json*, e clicar em importar, escolher o arquvio e clicar em importar novamente.
- Feito o passo acima, será necessário autalizar o Token de autenticação com o Github, para que o postman possa acessar a APo, para isso, é necessário abrir a colletion na aba authorization, verificar que existe um Bearer Token e inserir o token que enviei, no corpo do e-mail, que indica o link com este repositório,  token não foi enviado automaticamente junto com os dados do projeto por questões de segunça visto que permitiria qualquer pessoa apagar meus repositórios e jutno isso existe uma camada de segurança no Github que identifica se existem tokens código fonte e caso exista revoga automaticamente o mesmo, assim que o commit é feito.
- Com o projeto importado, basta clicar nos 3 pontos da colletion, e escolher a opção Run colletion, após isso na próxima tela clciar no botão em cor laranja Run Desafio-QA-API-Postman, e aguardar os testes serem executados.
- OBSERVAÇÕES IMPORTANTES
- o token e os testes criam e apagam um repositório em meu github particular, caso não queriam utilizar o meu github, podem ser modificados o GET e o DELETE, o nome de usuário(Owner) lucasbeninca por um outro nome de usuário do GitHub e com esse usuário, criar um novo Personal Acesses Token nas configurações de Developer.
