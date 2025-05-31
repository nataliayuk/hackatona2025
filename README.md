
# Hackatona 2025



## Sobre o produto:

A ideia foi iniciada a partir da base de um game de bingo, porém, com características alinhadas aos valores da empresa, transformando o jogo em um produto para mandar feedback para funcionários de empresas.

Como escopo passado pela HPE, o método atual de dar um feedback na área de TI é muito maçante na maioria dos casos, por ser feito apenas via e-mail, assim levando muito tempo e por muitas vezes não é realizado por ser cansativo. Com isso, a ideia proposta foi uma solução que seja anticonvencional e prática. Nesse sentido, o WebApp FeedBingo é uma nova maneira de dar feedbacks aos usuários, trazendo uma inovadora forma de engajamento com o usuário de forma lúdica, espontânea e descontraída. O produto consiste em avaliar funcionários através de um jogo de bingo, dando notas de 1 a 5 para os atributos que se alinham aos valores da empresa. A avaliação é feita de forma anônima, permitindo a coleta de feedbacks reais dos empregados e recompensando-os com pontos.

## Funcionalidades do WebApp

- Feedbacks anônimos
- Feedbacks personalizados para um usuário
- Ganho de pontos por feedback realizado
- Relatórios com os feedbacks recebidos
- Filtragem de usuários por nome
- Cadastro de usuários e login
- Sistema de avaliação por notas

# Telas

## Tela inicial

![Moon Icon](https://i.postimg.cc/5y5nm2sB/Whats-App-Image-2025-05-31-at-13-26-55.jpg)

## Bingo Personalizado

![Moon Icon](https://i.postimg.cc/9ffKFZJv/imagem-2025-05-31-133315346.png)

## Confirmação do feedback

![Moon Icon](https://i.postimg.cc/bJhn9HW5/Whats-App-Image-2025-05-31-at-13-26-50.jpg)



## Stack utilizada

**Front-end:** React, Css, Typescript

**Back-end:** Node, NestJs, Postgres e Docker


## Backend:

#### Retorna todos os usuários

```http
  GET /user
```

| Retorna   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Lista os usuários**. |

* Referente ao que está integrado com o Frontend
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/nataliayuk/hackatona2025.git
```

Entre no diretório do projeto

```bash
  cd backend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

Para o frontend:

```bash
  cd frontend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Autores

- [@nataliayuk](https://www.github.com/nataliayuk)
- [@Lucas-Jacchetti](https://www.github.com/Lucas-Jacchetti)
- [@ThiTarantino](https://www.github.com/ThiTarantino)
- [@eduardalegui](https://www.github.com/eduardalegui)
- Pedro Castilhos Fraga
- Nícolas dos Santos Batista

