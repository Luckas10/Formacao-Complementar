# Módulo B: Comandos básicos do JavaScript

<aside>
🌍 Este módulo é uma continuação dos módulos anteriores, por isso as aulas seguirão uma ordem cronológica, com isso em mente, esse módulo irá começar a partir da aula 5.

</aside>

# [Aula 5 - Variáveis e tipos primitivos](https://youtu.be/Vbabsye7mWo?si=JaQa5KYdgKRRtFak)

### Resumo:

Nesta aula o professor Gustavo Gunabara ensina sobre os tipos de dados e variáveis, mas antes disso ele dá uma passagem rápida em como comentar no JavaScript, após essa passagem ele volta à aula normalmente explicando sobre variáveis, explicando o conteúdo através de metáforas de fácil entendimento.

### Principais tópicos da aula:

1. 💭 **Comentários no JavaScript.**
    - 💡 Gustavo Guanabara cita que muitas vezes a parte de comentários é ignorada, porém, ele também afirma que códigos bem comentados são ótimos para trabalhar em equipe ou caso for utilizar esse código no futuro.
2. 🚗 **Variáveis como um estacionamento.**
    - 💡 Na aula, é citado que para entendermos o conceito de variável, podemos imaginar a memória do PC como um estacionamento e as vagas do mesmo, podem ser associadas a variáveis.
3. ➕ **Sinais nas variáveis.**
    - 💡 Quando estiver um sinal único de `=` na linha, lemos ele como “recebe”.
    - 💡 `Null` deixa a variável nula, ou seja, sem nenhum valor interno ou externo.
    - 💡 Para criarmos uma variável podemos colocar o `var` ou `let` antes do nome da mesma e para atribuirmos um valor na variável, colocamos que ela recebe o valor, por exemplo `var n1 = 5`
4. 🚫 **Regras para a nomeação de indentificadores.**
    - 💡 Podem começar com letra, $ ou _.
    - 💡 Não podem começar com números.
    - 💡 É possível usar letras ou números.
    - 💡 É possível usar acentos e símbolos.
    - 💡 Não podem ser palavras reservadas.
5. 🧩 **Dicas para nomeação de indentificadores.**
    - 💡 Maiúsculas e minúsculas fazem diferença.
    - 💡 Tente escolher nomes coerentes para as variáveis.
    - 💡 Evite se tornarm um ‘programador alfabeto’ ou um ‘programador contador’.
6. 📲 **Tipos primitivos primordiais.**
    - 💡 Number (independe de ser inteiro ou float).
    - 💡 String (pode ser declarada com `“string”` `‘string’` ou ``string``).
    - 💡 Boolean (recebe o valor `true` ou `false`).
    - 💡 Observação → O comando `typeof` serve para exibir um tipo de uma variável.

# [Aula 6 - Tratamento de dados](https://youtu.be/OJgu_KCCUSY?si=7bzZK8buefNI4GCm)

### Resumo:

Nesta aula, o professor Gustavo Gunabara recapitula alguns conceitos da aula passada e começa a trabalhar com os seus estudantes o tema de tratamento de dados. Após isso, o mesmo ensina como formatar os tipos das variáveis avançando ainda mais o conteúdo da aula 6.

### Principais tópicos da aula:

1. 📥 Guardando valores
    - 💡 Para conseguirmos guardar o valor escrito em um prompt, temos que dizer que “a variável recebe o prompt”, para isso temos que ditar o seguinte código
    
    ```jsx
    var nome = window.prompt("Qual o seu nome?")
    ```
    
2. 🖇 Concatenação e adição
    - 💡 + para concatenar é somente entre duas strings, já o + para somar, tem que ser entre dois numbers.
3. 🔁 Conversão de tipos de variáveis
    - 💡 Para converter uma string para números inteiros ou reais, utiliza-se
    
    ```jsx
    var valorString = "1" // Valor em string
    var valorInt = Number.ParseInt(valorString) // Valor em inteiro
    var valorFloat = Number.ParseFloat(valorString) // Valor em real
    var valorAuto = Number(valorString) // JS indentifica para qual converter
    ```
    
    - 💡 Para conveter um número inteiro ou real para string, utiliza-se
    
    ```jsx
    var valorNumber = 1 // Valor em inteiro
    var valorString = String(valorNumber) // Valor em string
    var valorString = valorNumber.toString() // Valor em string
    ```
    
4. 🔤 Formatando strings
    - 💡 Ao exibir uma string na tela, podemos formata-las utilizando concatenação ou template string, com por exemplo
    
    ```jsx
    var conteudo = "JavaScript"
    "Estou estudando conteudo" // Não faz interpolação
    "Estou estudando" + conteudo // Usa concatenação
    `Estou estudando ${conteudo}` // Usa template string
    ```
    
    - 💡 Podemos pegar e formatar informações das strings utilizando os seguintes códigos
    
    ```jsx
    var conteudo = "JavaScript"
    conteudo.length // Retorna quantos caracteres a string tem
    conteudo.toUpperCase() // Transforma a string em maiúsculas
    conteudo.toLowerCase() // Transforma a string em minúsculas
    ```
    
5. 🔢 Formatando números
    - 💡 Podemos formatar números de algumas maneiras
    
    ```jsx
    var n1 = 1545.5
    n1.toFixed(2) // Exibe o número com 2 casas flutuantes
    n1.toFixed(2).replace(".", ",") // Exibe o número trocando "." por ","
    n1.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
    // Transforma qualquer valor em moeda do brasil, ou seja, rea
    ```
    

# [Aula 7 - Operadores em JavaScript (Parte 1)](https://youtu.be/hZG9ODUdxHo?si=pMwJmqDyTms5uKR7)

### Resumo:

Nesta aula, o professor Gustavo Guanabara introduz os operadores essenciais do JavaScript, focando nos operadores de atribuição e incremento/decremento. Ele demonstra como simplificar operações aritméticas usando sintaxes encurtadas, como `+=`, `-=`, `**=`, e o operador de módulo `%`. O professor também mostra exemplos práticos no Node.js, destacando as diferenças entre pré e pós-incremento/decremento. A aula enfatiza a importância de praticar esses conceitos fundamentais para o avanço no aprendizado de JavaScript.

### Principais tópicos da aula:

1. 🧮 **Operadores de Atribuição**
    - **Descrição**: Os operadores de atribuição simplificam operações comuns, como adição, subtração, multiplicação, divisão e exponenciação.
    - **Exemplo**:
        
        ```jsx
        let num = 8;
        num += 2; // Soma 2 ao valor atual de num, resultando em 10.
        
        ```
        
2. 🔢 **Operador de Módulo (`%=`)**
    - **Descrição**: Calcula o resto da divisão de um número por outro.
    - **Exemplo**:
        
        ```jsx
        num %= 2; // Define num como o resto da divisão de num por 2, resultando em 0 se num for 10.
        
        ```
        
3. 🌟 **Operador de Exponenciação (`*=`)**
    - **Descrição**: Eleva o valor da variável a uma potência específica.
    - **Exemplo**:
        
        ```jsx
        num **= 2; // Eleva num ao quadrado, resultando no valor de num ao quadrado.
        
        ```
        
4. ➕➖ **Operadores de Incremento (`++`) e Decremento (`-`)**
    - **Descrição**: Permitem adicionar ou subtrair 1 do valor de uma variável.
    - **Exemplo**:
        
        ```jsx
        num++; // Incrementa num em 1.
        num--; // Decrementa num em 1.
        
        ```
        
5. 🔄 **Pré e Pós-Incremento/Decremento**
    - **Descrição**: No pós-incremento (`n++`), o valor atual é usado antes do incremento. No pré-incremento (`++n`), a variável é incrementada antes de ser usada.
    - **Exemplo**:
        
        ```jsx
        let n = 5;
        console.log(n++); // Exibe 5, depois incrementa para 6.
        console.log(++n); // Incrementa para 7, depois exibe 7.
        
        ```
        
6. 💻 **Prática no Node.js**
    - **Descrição**: O professor recomenda praticar os operadores no ambiente Node.js para fortalecer a compreensão dos conceitos básicos de manipulação de variáveis e operações.

### Perguntas Frequentes:

- ❓ **Por que usar operadores como `+=` e `++`?**
    - Simplificam o código e aumentam a eficiência e legibilidade.
- ❓ **Qual a diferença entre `x++` e `++x`?**
    - `x++` usa o valor atual e incrementa depois, enquanto `++x` incrementa primeiro e usa o novo valor.
- ❓ **Como posso aprender mais sobre operadores?**
    - O professor sugere seguir o curso de JavaScript junto com HTML, pois ambos se complementam em desenvolvimento web.

# [Aula 8 - Operadores e Prática em JavaScript (Parte 2)](https://youtu.be/BP63NhITvao?si=0dskf7U9Bv2N9pXL)

### Resumo:

Neste tutorial, o professor Gustavo Guanabara introduz conceitos fundamentais de programação, como o operador ternário, operadores de comparação e a importância da prática constante. Ele explica como usar o operador ternário para atribuições condicionais e realiza comparações booleanas, destacando o valor de praticar esses conceitos para dominar JavaScript. O vídeo encerra com uma prévia da próxima aula, onde o professor mostrará como integrar JavaScript com HTML e CSS, explorando o DOM (Document Object Model).

### Principais tópicos da aula:

1. 🎭 **Operador Ternário**
    - **Descrição**: O operador ternário permite escrever declarações condicionais de forma concisa.
    - **Sintaxe**:
        
        ```jsx
        condition ? value_if_true : value_if_false;
        
        ```
        
2. 📊 **Operador de Módulo (`%`)**
    - **Descrição**: Verifica se um número é divisível por outro, sendo avaliado antes do operador ternário.
    - **Exemplo**:
        
        ```jsx
        var res = x % 2 == 0 ? 5 : 9; // Se x for par, res recebe 5; caso contrário, res recebe 9.
        
        ```
        
3. 🧩 **Prática e Hands-on**
    - **Descrição**: A prática é essencial para entender conceitos de programação; apenas assistir tutoriais ou ler sobre não é suficiente.
4. 🔄 **Precedência em Operações Aritméticas**
    - **Descrição**: Em expressões com `%` e o operador ternário, o JavaScript avalia as operações aritméticas primeiro.
5. 🧮 **Atribuições Condicionais**
    - **Descrição**: O operador ternário permite atribuir valores baseados no resultado de uma expressão.
    - **Exemplo**:
        
        ```jsx
        var res = x % 2 == 0 ? 5 : 9;
        
        ```
        
6. 🔍 **Debug e Testes no Console**
    - **Descrição**: Imprimir variáveis no console (`console.log(x)`, `console.log(res)`) é importante para entender o comportamento do código.
7. 📅 **Próxima Aula: Introdução ao DOM**
    - **Descrição**: A próxima aula introduzirá o DOM (Document Object Model) e ensinará como integrar JavaScript, HTML e CSS.
8. 🛠 **Ferramentas para Desenvolvimento em JavaScript**
    - **Descrição**: O professor orientará sobre a instalação de ferramentas úteis no Visual Studio Code e no Google Chrome para aprimorar o desenvolvimento em JavaScript.
9. 🔑 **Praticar Conceitos Básicos**
    - **Descrição**: A prática é crucial para consolidar conceitos básicos como o operador ternário e operadores aritméticos, que são fundamentais para projetos mais complexos.

### Perguntas Frequentes:

- ❓ **Qual é a função do operador ternário em JavaScript?**
    - O operador ternário é uma forma abreviada de uma declaração 'if-else', que avalia uma condição e retorna um valor caso seja verdadeira, e outro caso seja falsa.
- ❓ **Como o operador ternário funciona no exemplo `var res = x % 2 == 0 ? 5 : 9;`?**
    - Ele verifica se `x % 2 == 0` (se `x` é par). Se verdadeiro, `res` recebe 5; caso contrário, 9. Se `x` for 8, `res` será 5.
- ❓ **Para que serve o operador de módulo (`%`) em `x % 2 == 0`?**
    - Calcula o resto da divisão de `x` por 2. Se o resto for 0, o número é par; caso contrário, é ímpar.
- ❓ **Por que o console exibe 'undefined' ao imprimir `res` após uma operação ternária?**
    - Se uma variável é atribuída mas não é explicitamente logada ou retornada, pode aparecer como 'undefined' no console.
- ❓ **O que faz a condição `age <= 18 ? 'BIGGER' : 'SMALLER'`?**
    - Verifica se `age` é menor ou igual a 18. Se verdadeiro, `r` recebe 'BIGGER'; caso contrário, 'SMALLER'.
- ❓ **Qual é o próximo tópico da aula seguinte?**
    - A próxima aula abordará o DOM, que permite ao JavaScript manipular HTML e CSS dinamicamente.
- ❓ **O que significa DOM e o que será abordado sobre ele?**
    - DOM significa Document Object Model. A aula mostrará como usar JavaScript para interagir com HTML e CSS de uma página.
- ❓ **Quais ferramentas o professor sugere para melhorar a experiência de programação?**
    - O professor recomendará ferramentas adicionais para Visual Studio Code e Google Chrome que melhoram a codificação em JavaScript.
- ❓ **Como o professor sugere melhorar as habilidades de programação?**
    - Praticando regularmente e aplicando o conhecimento aprendido para fixar os conceitos fundamentais.