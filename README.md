# 📸 Photo Opp – Desafio Técnico Nex Lab

Este projeto foi desenvolvido como parte da segunda etapa do processo seletivo da **Nex Lab**. O objetivo é simular uma ativação interativa em um estande de evento, onde participantes tiram fotos com molduras personalizadas e podem baixá-las via QR Code.

## 🧠 Sobre o Projeto

A aplicação simula a seguinte experiência:

1. **Tela Inicial** – "Toque para começar"
2. **Tela de Pré-Captura** – Com botão de captura
3. **Contagem Regressiva** – 3 segundos
4. **Captura da Foto** – Com aplicação de moldura (formato 9:16)
5. **Revisão da Foto** – Opções de "Refazer" ou "Aprovar"
6. **Tela Final** – Geração de QR Code com link para download da imagem
7. **Retorno automático** à tela inicial

Além disso, foi implementado um **painel administrativo simples**, exibindo:
- Número de participações por dia
- Lista de links das fotos geradas

## ⚙️ Tecnologias Utilizadas

### 🖥️ Front-End
- **React** com Vite
- TailwindCSS para estilização
- Canvas API para manipulação de imagem
- qrcode.react para geração de QR Code

### 🌐 Back-End
- **Node.js** com **TypeScript**
- **Express** para criação da API
- **Drizzle ORM** para manipulação do banco
- **PostgreSQL** como banco de dados
- Multer para upload de imagens
- CORS e dotenv

## 📷 Funcionalidades

- Captura de imagem com câmera do dispositivo
- Adição de moldura personalizada
- Armazenamento da imagem gerada
- Geração de QR Code com link para download
- Painel administrativo com:
  - Contador de fotos por data
  - Links das imagens salvas

## 🚧 Observações Importantes

> **Deploy e Hospedagem**
>
> Por limitações de tempo e ambiente, o **back-end não foi hospedado em um servidor tradicional** (como Railway, Render ou AWS). Em vez disso, utilizei o [**ngrok**](https://ngrok.com/) para expor minha API local, o que possibilitou a integração com o front-end hospedado.
>
> A URL do ngrok foi atualizada no `.env` do front para simular corretamente a comunicação em produção durante a avaliação.

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js (versão 18+ recomendada)
- PostgreSQL
- Conta no [ngrok](https://ngrok.com/) (opcional)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/photo-opp-nexlab.git
cd photo-opp-nexlab
```

### 2. Configure o Back-End


```bash
cd server
cp .env.example .env
Preencha o .env com suas variáveis de ambiente, incluindo:
```

Instale as dependências e execute as migrações:

```bash
npm install
npx drizzle-kit push
npm run dev
```

Opcional: rode o ngrok se quiser expor o back-end:

```bash
ngrok http 3333
```

### 3. Configure o Front-End

```bash
npm install
npm run dev
```

### Links Importantes

## 🖥️- Painel Administrativo: /admin

⚠️ **A API precisa estar rodando para o projeto funcionar corretamente. Use o ngrok ou configure um backend local.**
