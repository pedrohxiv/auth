# Projeto Autenticação com NextAuth.js

## Descrição do Projeto

Este é um projeto abrangente onde adicionei autenticação avançada a uma aplicação Next.js utilizando do NextAuth.js. Aprendi a implementar recursos como autenticação social, verificação de e-mail, autenticação de dois fatores, gerenciamento de funções de usuário e muito mais.

## Principais Funcionalidades

- **NextAuth.js v5 (Auth.js):** Utilização da biblioteca NextAuth.js v5 para gerenciar a autenticação na aplicação.

- **Next.js 14 com "server actions":** Implementação de "server actions" para garantir uma autenticação robusta e segura.

- **Provider de Credenciais:** Capacidade de autenticação utilizando credenciais próprias da aplicação.

- **Provider OAuth (Login Social com Google e GitHub):** Implementação de login social utilizando OAuth com provedores como Google e GitHub.

- **Funcionalidade de Esqueci Minha Senha:** Possibilidade de redefinir a senha através do recurso "Esqueci Minha Senha".

- **Verificação de E-mail:** Envio de e-mails de verificação para garantir a validade dos endereços de e-mail dos usuários.

- **Verificação de Dois Fatores (2FA):** Implementação de autenticação de dois fatores para garantir uma camada adicional de segurança.

- **Funções de Usuário (Admin & Usuário):** Gerenciamento de funções de usuário, incluindo administração e usuários regulares.

- **Componente de Login:** Componente de login que pode ser aberto em redirecionamento ou modal, oferecendo flexibilidade na interface de login.

- **Componente de Registro:** Componente para registro de novos usuários na aplicação.

- **Componente de Esqueci Minha Senha:** Componente para recuperar a senha através do processo de "Esqueci Minha Senha".

- **Componente de Verificação:** Componente para verificar a conta através do e-mail de verificação.

- **Componente de Erro:** Componente para lidar com erros durante o processo de autenticação.

- **Botão de Login e Logout:** Botões para facilitar o login e logout dos usuários.

- **Funções de Usuário:** Restringe o acesso a determinadas partes da aplicação com base nas funções do usuário.

- **Middleware do Next.js:** Explorei o middleware do Next.js para adicionar lógica de autenticação em rotas específicas.

- **Estendendo e Explorando a Sessão do NextAuth.js:** Aprofundei na sessão gerenciada pelo NextAuth.js para customização avançada.

- **Explorando Callbacks do NextAuth.js:** Explorei as callbacks fornecidos pelo NextAuth.js para realizar ações específicas durante o processo de autenticação.

- **Hook useCurrentUser:** Utilização do hook useCurrentUser para acessar informações do usuário atualmente autenticado.

- **Hook useRole:** Utilização do hook useRole para acessar informações sobre a função do usuário atual.

- **Utilitário currentUser:** Utilitário para acessar informações do usuário atual em vários componentes da aplicação.

- **Utilitário currentRole:** Utilitário para acessar informações sobre a função do usuário atual em vários componentes da aplicação.

- **Exemplo com Componente do Servidor:** Demonstração de como utilizar o NextAuth.js com um componente do servidor.

- **Exemplo com Componente do Cliente:** Demonstração de como utilizar o NextAuth.js com um componente do cliente.

- **Renderização de Conteúdo para Administradores:** Renderização condicional de conteúdo com base na função do usuário.

- **Proteção de Rotas da API Apenas para Administradores:** Restrição do acesso a rotas da API apenas para usuários com função de administrador.

- **Proteção de Ações no Servidor Apenas para Administradores:** Restrição do acesso a ações no servidor apenas para usuários com função de administrador.

- **Alteração de E-mail com Nova Verificação na Página de Configurações:** Capacidade de alterar o endereço de e-mail com um novo processo de verificação na página de configurações.

- **Alteração de Senha com Confirmação da Senha Antiga na Página de Configurações:** Possibilidade de alterar a senha com confirmação da senha antiga na página de configurações.

- **Habilitar/Desabilitar Autenticação de Dois Fatores na Página de Configurações:** Opção para habilitar ou desabilitar a autenticação de dois fatores na página de configurações.

- **Alterar Função do Usuário na Página de Configurações (apenas para fins de desenvolvimento):** Capacidade de alterar a função do usuário na página de configurações, apenas para fins de desenvolvimento.

## Dependências

O projeto utiliza diversas dependências para garantir seu funcionamento suave:

- `@auth/prisma-adapter`: ^1.2.0
- `@hookform/resolvers`: ^3.3.4
- `@prisma/client`: ^5.9.1
- `@radix-ui/react-avatar`: ^1.0.4
- `@radix-ui/react-dialog`: ^1.0.5
- `@radix-ui/react-dropdown-menu`: ^2.0.6
- `@radix-ui/react-icons`: ^1.3.0
- `@radix-ui/react-label`: ^2.0.2
- `@radix-ui/react-select`: ^2.0.0
- `@radix-ui/react-slot`: ^1.0.2
- `@radix-ui/react-switch`: ^1.0.3
- `bcryptjs`: ^2.4.3
- `class-variance-authority`: ^0.7.0
- `clsx`: ^2.1.0
- `next`: 14.1.0
- `next-auth`: ^5.0.0-beta.5
- `react`: ^18
- `react-dom`: ^18
- `react-hook-form`: ^7.50.0
- `react-icons`: ^5.0.1
- `react-spinners`: ^0.13.8
- `resend`: ^3.1.0
- `tailwind-merge`: ^2.2.1
- `tailwindcss-animate`: ^1.0.7
- `uuid`: ^9.0.1
- `zod`: ^3.22.4
- `@types/bcryptjs`: ^2.4.6
- `@types/node`: ^20
- `@types/react`: ^18
- `@types/react-dom`: ^18
- `@types/uuid`: ^9.0.8
- `autoprefixer`: ^10.0.1
- `eslint`: ^8
- `eslint-config-next`: 14.1.0
- `postcss`: ^8
- `prisma`: ^5.9.1
- `tailwindcss`: ^3.3.0
- `typescript`: ^5

## Como Executar o Projeto

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js e o npm (ou yarn) instalados.
3. Instale as dependências do projeto utilizando o seguinte comando:

```bash
npm install
# ou
yarn install
```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes chaves e seus respectivos valores:

```env
DATABASE_URL=seu_valor_aqui
AUTH_SECRET=seu_valor_aqui
GOOGLE_CLIENT_ID=seu_valor_aqui
GOOGLE_CLIENT_SECRET=seu_valor_aqui
GITHUB_CLIENT_ID=seu_valor_aqui
GITHUB_CLIENT_SECRET=seu_valor_aqui
RESEND_API_KEY=seu_valor_aqui
NEXT_PUBLIC_APP_URL=seu_valor_aqui
```

Certifique-se de substituir `seu_valor_aqui` pelos valores corretos de cada chave.

5. Inicie o servidor de desenvolvimento com o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

6. Acesse a aplicação em `http://localhost:3000` e explore todas as funcionalidades de autenticação avançada implementadas na aplicação Next.js.
