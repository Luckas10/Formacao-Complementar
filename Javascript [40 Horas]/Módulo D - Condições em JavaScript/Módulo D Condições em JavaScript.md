# Módulo D: Condições em JavaScript

<aside>
🌍 Este módulo é uma continuação dos módulos anteriores, por isso as aulas seguirão uma ordem cronológica, com isso em mente, esse módulo irá começar a partir da aula 11.

</aside>

# Aula 11 - Condições (Parte 1)

### Resumo:

Nesta aula, o professor Gustavo Guanabara introduz o conceito de estruturas condicionais em JavaScript, mostrando como usá-las para controlar o fluxo de execução do código. São explicados os principais tipos de condições (`if`, `else`, `else if`) e sua aplicação prática em exemplos simples e ilustrativos.

### Principais Tópicos da Aula:

1. 📚 **Introdução às Condições**
    - **Descrição**: Explicação da importância das condições para tomadas de decisão dentro dos programas, permitindo que diferentes blocos de código sejam executados dependendo de certas situações.
2. 🔀 **Uso de `if` e `else`**
    - **Descrição**: Demonstração do uso básico das estruturas `if` e `else` para realizar decisões simples no código.
3. ➡️ **Fluxo de Execução Condicional**
    - **Descrição**: Entendimento de como o JavaScript analisa uma condição e decide qual bloco de código executar.
4. 🛠️ **Exemplos Práticos com Condições**
    - **Descrição**: Aplicação prática de condições para responder a diferentes situações, como verificar se uma pessoa é maior ou menor de idade.
5. ❓ **Introdução ao `else if`**
    - **Descrição**: Apresentação da estrutura `else if`, que permite testar múltiplas condições de forma sequencial.
6. ⚡ **Condições Aninhadas**
    - **Descrição**: Demonstração de como usar condições dentro de outras condições para tratar cenários mais complexos.
7. 🔧 **Boas Práticas com Condições**
    - **Descrição**: Dicas de escrita limpa de código e cuidados ao usar muitas condições aninhadas para não complicar a leitura do programa.

### Principais Insights da Aula:

- 🔍 **Decisões no Código**:
    - Estruturas condicionais são fundamentais para fazer programas se comportarem de maneira inteligente e reagirem a diferentes entradas e situações.
- 💬 **Sintaxe Simples, Mas Poderosa**:
    - A combinação de `if`, `else` e `else if` cobre a maioria dos casos de necessidade de decisão em JavaScript.
- 🧩 **Organização de Código**:
    - Manter as condições claras e bem organizadas ajuda na manutenção e entendimento futuro do código.
- 🔁 **Importância da Prática**:
    - Condições são um dos pilares da lógica de programação, e a prática com diferentes exemplos é essencial para dominar o conceito.
- 🚀 **Rumo a Programas Mais Dinâmicos**:
    - Com o domínio das condições, é possível criar programas mais dinâmicos, que reagem a diferentes situações em tempo real.

---

# Aula 12 - Condições (Parte 2)

### Resumo:

Nesta aula, o professor Gustavo Guanabara continua o estudo das estruturas condicionais em JavaScript, aprofundando o uso de condições compostas com operadores lógicos (`&&` e `||`), introduz o conceito do `switch` para seleção múltipla de casos, e apresenta exemplos práticos comparando a utilização de `if/else` e `switch/case` para diferentes situações.

### Principais Tópicos da Aula:

1. 🔁 **Revisão de Condições Compostas**
    - **Descrição**: Revisão do uso dos operadores lógicos `&&` (E) e `||` (OU) para criar expressões compostas em estruturas `if`.
2. 🔀 **Entendendo o `switch/case`**
    - **Descrição**: Introdução ao comando `switch`, mostrando como ele facilita a seleção entre múltiplas alternativas de maneira mais organizada em relação a múltiplos `if/else if`.
3. 🎯 **Quando Usar `switch` ou `if/else`**
    - **Descrição**: Explicação prática de quando é mais vantajoso utilizar `switch` (quando há várias alternativas baseadas no mesmo valor) em vez de muitos `if/else`.
4. 🧩 **Sintaxe do `switch`**
    - **Descrição**: Demonstração da estrutura do `switch`, incluindo o uso das palavras-chave `case`, `break` e `default`.
5. 💻 **Exemplo Prático: Verificando Dia da Semana**
    - **Descrição**: Desenvolvimento de um programa que, baseado em um número (0 a 6), imprime o dia da semana correspondente, utilizando `switch/case`.
6. 📚 **Uso do `break` para Evitar "Queda" de Casos**
    - **Descrição**: Explicação sobre a importância do `break` para impedir que o JavaScript continue executando os próximos `case` após encontrar o primeiro verdadeiro.
7. ⚡ **`default`: Tratando Casos Inesperados**
    - **Descrição**: Introdução da cláusula `default` para tratar qualquer valor que não tenha sido previsto nos `case`.
8. 🛠️ **Comparação entre `if/else` e `switch`**
    - **Descrição**: Discussão sobre legibilidade e eficiência na escolha entre estruturas condicionais.

### Principais Insights da Aula:

- 🔎 **Operadores Lógicos em Condições**:
    - A combinação de operadores lógicos permite testar múltiplas condições ao mesmo tempo, tornando o código mais poderoso e adaptável.
- 🛠️ **`switch/case`: Organização e Clareza**:
    - `switch` é muito útil quando se lida com múltiplas opções para a mesma variável, deixando o código mais limpo e organizado.
- ❗ **Importância do `break`**:
    - Sem o `break`, o JavaScript executaria todos os casos seguintes, gerando resultados errados (efeito conhecido como *fall-through*).
- 💬 **Uso Estratégico de `default`**:
    - O `default` é essencial para capturar entradas não previstas e garantir que o programa tenha um comportamento controlado para qualquer valor.
- 🚀 **Escolhendo a Melhor Estrutura**:
    - Saber escolher entre `if/else` e `switch` de acordo com a situação melhora a eficiência e a legibilidade do código.
- 📈 **Prática com Exemplos Simples**:
    - Exercitar o uso de condições e `switch` com exemplos reais, como classificação de dias da semana ou tipos de usuário, solidifica o aprendizado.

---

# Exercícios JavaScript (Parte 1)

### Resumo:

Nesta aula, o professor Gustavo Guanabara propõe exercícios práticos para fixar o conteúdo de condições em JavaScript, focando em aplicações básicas de estruturas `if`, `else`, `else if`, operadores relacionais e operadores lógicos.

### Principais Tópicos da Aula:

1. 🛠️ **Desenvolvimento de Programas Simples**
    - **Descrição**: Criação de scripts para praticar decisões com `if/else`, como identificar nacionalidade e calcular multas de trânsito.
2. 🚗 **Verificação de Velocidade**
    - **Descrição**: Programa que analisa a velocidade de um carro e imprime mensagens dependendo se ultrapassou ou não o limite permitido.
3. 🌎 **Identificação de Nacionalidade**
    - **Descrição**: Programa que solicita o país de origem do usuário e determina se ele é brasileiro ou estrangeiro usando condicionais.
4. 🛡️ **Prática de Operadores Relacionais**
    - **Descrição**: Uso de operadores como `>`, `<`, `==`, `!=` para tomar decisões em diferentes situações simuladas.
5. 💬 **Introdução de Mensagens Personalizadas**
    - **Descrição**: Exibição de mensagens adaptadas conforme as respostas das condições.

### Principais Insights da Aula:

- 🎯 **Praticar Condições é Essencial**:
    - Quanto mais exemplos forem desenvolvidos, maior será a fluência na criação de decisões lógicas.
- 🧠 **Pensar no Fluxo de Decisão**:
    - Antes de programar, pensar nos possíveis caminhos (fluxogramas) ajuda a organizar melhor as condições.
- 🚀 **Combinação de Estruturas**:
    - A prática envolve combinar entrada de dados (`prompt`), decisões (`if/else`) e saída (`alert`, `console.log`).
- 💬 **Customização das Respostas**:
    - Ajustar mensagens personalizadas torna o programa mais amigável e compreensível.

---

# Exercícios JavaScript (Parte 2)

### Resumo:

Dando continuidade aos exercícios, o professor propõe novos desafios para reforçar a prática de condições em JavaScript, agora incorporando o uso de `switch/case` e manipulação de datas e horários.

### Principais Tópicos da Aula:

1. 🕰️ **Sistema de Boas-Vindas por Horário**
    - **Descrição**: Programa que dá "Bom dia", "Boa tarde" ou "Boa noite" baseado no horário do sistema.
2. 🗓️ **Detecção de Dia da Semana**
    - **Descrição**: Programa que, através do `switch/case`, interpreta o número do dia da semana (0 a 6) e imprime seu nome correspondente.
3. 🔄 **Uso Prático de `switch/case`**
    - **Descrição**: Aplicação prática do `switch` para selecionar alternativas de maneira limpa e organizada.
4. 📆 **Manipulação de Objetos de Data**
    - **Descrição**: Utilização do objeto `Date` para pegar o dia da semana e a hora atual automaticamente.

### Principais Insights da Aula:

- 🌟 **Automação Através de Datas**:
    - Usar `Date` permite que os programas sejam mais dinâmicos e adaptáveis ao tempo real.
- 🔥 **`switch` como Alternativa ao `if/else`**:
    - Quando há muitas possibilidades baseadas em um único valor, `switch` torna o código mais organizado.
- 🚀 **Praticidade nos Exercícios**:
    - Aplicar exercícios mais próximos da vida real (como horários e datas) facilita a fixação do conteúdo.
- 🛠️ **Importância de Comandos Dinâmicos**:
    - Aprender a puxar dados diretamente do sistema é um passo para criar aplicações mais inteligentes.

---

# Exercícios JavaScript (Parte 3)

### Resumo:

No último bloco de exercícios do módulo, o professor desenvolve um mini-projeto de verificação de idade, aplicando tudo o que foi aprendido: entrada de dados, condições compostas, manipulação de elementos HTML e exibição dinâmica de imagens.

### Principais Tópicos da Aula:

1. 🧒👵 **Verificador de Idade**
    - **Descrição**: Aplicativo que pede ano de nascimento e sexo do usuário para calcular idade e mostrar uma imagem correspondente à faixa etária.
2. 🔎 **Análise de Faixas Etárias**
    - **Descrição**: Verificação das faixas de idade para classificar como criança, jovem, adulto ou idoso.
3. 🖼️ **Exibição Dinâmica de Imagens**
    - **Descrição**: Alteração de imagens exibidas na página conforme o resultado da verificação de idade e gênero.
4. 📋 **Validação de Entrada**
    - **Descrição**: Conferência se os campos foram preenchidos corretamente e se a data é válida antes de processar os dados.
5. 🛠️ **Manipulação do DOM**
    - **Descrição**: Uso de comandos como `getElementById`, `createElement` e `appendChild` para mudar o conteúdo da página via JavaScript.

### Principais Insights da Aula:

- 🛡️ **Importância da Validação de Dados**:
    - Sempre verificar se as entradas do usuário fazem sentido para evitar erros no programa.
- 🎨 **Interatividade no Front-End**:
    - Exibir resultados visuais (como imagens) deixa a aplicação mais interessante e amigável.
- 💡 **Combinação de Conceitos**:
    - Este exercício combina várias habilidades: condições, manipulação de datas, DOM e eventos.
- 🚀 **Construindo Aplicações Mais Completas**:
    - Esses exercícios preparam o aluno para projetos maiores e mais interativos.