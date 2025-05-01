## Protocolo HTTP

<?quiz?>
question: 1. Os sites e os portais que são acessados diariamente, tecnicamente, são conhecidos como documentos Web. Esses documentos são categorizados no momento em que seu conteúdo é determinado, o que, entre outras coisas, define seus parâmetros e características de acessibilidade.<br>No que se refere às categorias dos documentos Web, marque a alternativa correta.
answer-correct: A. Os documentos Web são categorizados em estáticos, dinâmicos e ativos.
answer: B. Os documentos Web são categorizados em fixos, ativos no servidor e ativos no cliente.
answer: C. Os documentos Web são categorizados em controladores, interpretadores e protocolo cliente.
answer: D. Os documentos Web são categorizados em fixos, estáticos e dinâmicos.
answer: E. Os documentos Web são categorizados em estáticos, dinâmicos e scripts.
content:
Os documentos Web são categorizados em estáticos, que são documentos de conteúdo fixo; dinâmicos, que são criados no servidor via aplicativo ou script, conforme recebe uma solicitação de acesso; e também ativos, que dependem que um programa ou script seja executado no dispositivo cliente. As demais opções não se referem a categorizações de documentos Web, sendo que controladores, interpretadores e protocolo cliente são itens da arquitetura dos navegadores Web.
<?/quiz?>

<?quiz?>
question: 2. Um documento Web dinâmico tem a característica de gerar uma resposta para cada nova solicitação de um dispositivo cliente. Essas respostas normalmente são geradas via script ou programa que é executado no servidor para cada solicitação.<br>São exemplos de solicitação de conteúdo dinâmico de um site:
answer: A. formulários on-line.
answer: B. informações de rodapé do site.
answer-correct: C. data e hora.
answer: D. informações do desenvolvedor do site.
answer: E. telefone e endereço.
content:
Os documentos dinâmicos atendem a solicitações que normalmente precisam ser atualizadas. Um exemplo muito comum é um site que contém, em alguma parte de seu conteúdo, data e hora atuais. Essas informações são geradas no servidor a cada nova solicitação de acesso. Conteúdos como formulários on-line, informações de cabeçalho e rodapé, informações do desenvolvedor e de contato com o proprietário do site são informações fixas que, eventualmente, podem sofrer atualização e, portanto, não são caracterizadas como conteúdos dinâmicos.
<?/quiz?>

<?quiz?>
question: 3. A categoria de documentos Web ativos faz uso de programas e scripts que devem ser executados nos dispositivos clientes, diferentemente dos documentos dinâmicos que são executados no servidor.<br>Para permitir acesso a documentos Web ativos, qual programa ou script é utilizado?
answer: A. CGI.
answer: B. PHP.
answer: C. JSP.
answer: D. ASP.
answer-correct: E. Java. 
content:
Para consumo de conteúdos categorizados como ativos, faz-se necessário que a estação cliente execute algum programa ou script. Um exemplo muito comum desses programas são os applets Java, uma combinação de linguagem de alto nível, biblioteca de classe e ambiente de tempo de execução que permite que seja criado um documento ativo para ser executado no browser. CGI, PHP, JSP e ASP normalmente são usados para criação de documentos dinâmicos via script.
<?/quiz?>

<?quiz?>
question: 4. O HTTP é um protocolo da camada de aplicação que utiliza o TCP como protocolo de transporte. Além disso, é um protocolo sem estado que se utiliza de envio de mensagens ao servidor, que, por sua vez, responde com o conteúdo ou alguma outra indicação. Essas mensagens trocadas entre o cliente e o servidor são semelhantes entre si e normalmente contêm uma linha de pedido, um cabeçalho e, algumas vezes, o corpo da mensagem. A linha de pedido normalmente é respondida com uma linha de status que pode conter diferentes informações.<br>No que se refere à linha de status de erro de servidor, marque a alternativa correta.
answer: A. Código 301 – Movido permanentemente / Código 302 – Movido temporariamente.
answer: B. Código 405 – Método não permitido / Código 406 – Não aceitável.
answer: C. Código 204 – Nenhum conteúdo / Código 202 – Aceito.
answer: D. Código 401 – Não autorizado / Código 404 – Não encontrado.
answer-correct: E. Código 501 – Não implementado / Código 503 – Serviço indisponível.
content:
Para as linhas de pedido, são respondidas linhas de status. Esse status pode representar sucesso da solicitação, redirecionamento, erro de cliente e erro de servidor. Por padrão, os códigos de status com início vinculado à centena 500 são códigos de erro de servidor, enquanto a centena 400 se refere a erros de cliente, como, por exemplo, um pedido inválido. A centena 300 trata do redirecionamento e a centena 200, do sucesso da solicitação.
<?/quiz?>

<?quiz?>
question: 5. Os domínios de rede das empresas normalmente atendem às solicitações de um grande número de estações clientes e devem estar aptos a garantir a entrega dos recursos e do serviço, de forma a não comprometer as atividades dos colaboradores. Os serviços de Web são os mais acionados pelos usuários, portanto, os administradores utilizam-se de servidores específicos na tentativa de tornar mais ágil o acesso aos conteúdos da Web.<br>Para melhorar o desempenho no acesso à Web das empresas, qual servidor é utilizado?
answer: A. Servidor DNS.
answer: B. Servidor Web.
answer: C. Servidor HTTP.
answer-correct: D. Servidor proxy.
answer: E. Servidor Apache.
content:
Uma série de serviços de servidores atende a funções vinculadas ao acesso Web. O servidor proxy, porém, tem uma função bem específica, que acaba sendo um diferencial no desempenho de acesso Web por parte dos usuários nas empresas, uma vez que mantém cópia de respostas de pedidos recentes feitos pelos usuários. Com isso, diminui a carga de solicitações aos servidores Web originais, reduzindo a carga e a latência da rede, uma vez que parte das respostas é atendida diretamente por ele na rede local. Outros servidores usados para acessos Web são: o DNS, que tem função de resolução de nome de domínio; e o servidor Web ou HTTP, que, de modo geral, armazena os conteúdos dos sites, sendo que o Apache é um exemplo desse tipo de servidor.
<?/quiz?>

## Protocolo DNS

## Criptografia
